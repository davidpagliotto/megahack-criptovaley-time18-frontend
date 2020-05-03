import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { insertBatch } from '~/services/blockChain';
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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const { supplier, document } = formData;
    /*
      supplier
      batchOrigin,
      geolocation,
      document_number,
      document
    */
    console.log(formData);

    const response = await insertBatch(
      supplier,
      `0x${CryptoJS.lib.WordArray.random(20)}`,
      '',
      '2',
      document
    );
    console.log('Juca da Balada Volume II');
    console.log(response);
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
          {supplies.map(({ guid, full_name, address }) => (
            <S.SelectOption key={guid} value={address}>
              {full_name}
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
