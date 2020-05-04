import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { insertBatch, getCurrentProvider } from '~/services/blockChain';
import * as S from './styles';

const CryptoJS = require('crypto-js');

const DOCTYPES = ['NF', 'OUTROS'];

export default function BatchRegistration() {
  const [geolocation, setGeolocation] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [batchAddress, setBatchAddress] = useState('');
  const [formData, setFormData] = useState({});

  const generateBatchAddress = () => {
    const address = CryptoJS.lib.WordArray.random(20);

    setFormData({
      ...formData,
      address: String(address),
    });

    return address;
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const saveBatch = async (key, batchAddress) => {
    console.log('key', key);
    console.log('formData.supplier', formData.supplier);

    const supplier = supplies.find(
      (item) => item.address === formData.supplier
    );

    console.log(supplier);

    const { document } = formData;

    const payload = {
      address: String(batchAddress),
      supplier: supplier.guid,
      batch_origin: String(batchAddress),
      document_number: document,
      document: null,
      document_type: '1',
      geo: 'casa do carai',
      responsible: '52a5d9cf-f99f-4018-8867-f635498802f1',
      items: [
        {
          vaccine_guid: '3d5af359-5fbe-4a55-94b0-81489bb8703a',
          quantity: 1,
          supplier: supplier.guid,
        },
      ],
      transaction_id: key,
    };

    const response = await api.post('/batch', payload);
    console.log('FOOOOI', response);
  };

  const handleClick = async () => {
    const { supplier, document } = formData;

    console.log(supplier);

    const batchAddress = `0x${CryptoJS.lib.WordArray.random(20)}`;
    const batchOrigin = batchAddress; // como não vamos dividir lotes no MVP, o lote de origin é igual ao batch address

    const response = await insertBatch(
      batchAddress,
      // supplier,
      supplier,
      batchOrigin,
      geolocation,
      '2',
      document
    );

    console.log(response);

    saveBatch(response, batchAddress);
  };

  useEffect(() => {
    const loadSupplier = async () => {
      const response = await api.get('/person?person_type=pj');

      setBatchAddress(generateBatchAddress());

      const suppliesList = response.data;
      setSupplies(suppliesList);
    };

    loadSupplier();
  }, []);

  useEffect(() => {
    const loadGeolocation  = async () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setGeolocation(JSON.stringify({"latitude": position.coords.latitude, "longitude": position.coords.longitude}))
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    )};

    loadGeolocation();
  }, []);

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.BatchTitleContainer>
          <S.BatchTitleContainerItem>
            Cadastro de Lotes
          </S.BatchTitleContainerItem>
        </S.BatchTitleContainer>
        <S.Select name="supplier" onChange={handleChange}>
          <S.SelectOption value="">Selecione um laboratório (fornecedor)</S.SelectOption>
          {supplies.map((item) => (
            <S.SelectOption key={item.guid} value={item.address}>
              {item.full_name}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Input
          placeholder="Número do lote"
          name="address"
          disabled
          value={batchAddress}
        />
        <S.Input placeholder="Geolocalização" disabled
          value={geolocation}/>
        <S.Select>
          {DOCTYPES.map((option) => (
            <S.SelectOption key={option} value={option}>
              {option}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Input
          name="document"
          placeholder="Número do Documento"
          onChange={handleChange}
        />
        <S.ButtonConfirm type="button" onClick={handleClick}>
          Salvar Lote
        </S.ButtonConfirm>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
