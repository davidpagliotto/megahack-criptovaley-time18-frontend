import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { insertBatch, getCurrentProvider } from '~/services/blockChain';
import * as S from './styles';

const CryptoJS = require('crypto-js');

const DOCTYPES = ['CPF', 'SUS', 'PASSAPORTE'];

export default function OccurrenceRegistration() {
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

  const saveBatch = async (key) => {
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
      batch_origin: null,
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
      '0xea9dc3b3c0dacc90588f683f98bf9d76bcba88ea',
      batchOrigin,
      '',
      '2',
      document
    );

    console.log(response);

    saveBatch(response);
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

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.BatchTitleContainer>
          <S.BatchTitleContainerItem>
            Cadastro de Ocorrência
          </S.BatchTitleContainerItem>
        </S.BatchTitleContainer>
        <S.Select name="batch" onChange={handleChange}>
          <S.SelectOption value="">Selecione um lote</S.SelectOption>
          {supplies.map((item) => (
            <S.SelectOption key={item.guid} value={item.address}>
              {item.full_name}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Select name="vaccine" onChange={handleChange}>
          <S.SelectOption value="">Selecione uma vacina</S.SelectOption>
        {supplies.map((item) => (
          <S.SelectOption key={item.guid} value={item.address}>
          {item.full_name}
          </S.SelectOption>
        ))}
      </S.Select>
        <S.Input placeholder="Geolocalização" disabled />
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
