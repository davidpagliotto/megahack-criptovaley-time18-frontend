import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { insertBatch, getCurrentProvider } from '~/services/blockChain';
import * as S from './styles';

const CryptoJS = require('crypto-js');

const DOCTYPES = ['CNPJ', 'CPF'];

export default function BatchRegistration() {
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

    const response = await insertBatch(
      supplier,
      `0x${CryptoJS.lib.WordArray.random(20)}`,
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
            Cadastro de Lotes
          </S.BatchTitleContainerItem>
        </S.BatchTitleContainer>
        <S.Select name="supplier" onChange={handleChange}>
          <S.SelectOption value="">Selecione uma opção</S.SelectOption>
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
