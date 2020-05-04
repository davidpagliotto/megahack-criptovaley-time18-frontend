import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import {
  insertBatch,
  getCurrentProvider,
  insertOccurrence,
} from '~/services/blockChain';
import * as S from './styles';

const CryptoJS = require('crypto-js');

const DOCTYPES = ['NF', 'OUTROS'];

export default function OccurrenceRegistration() {
  const [geolocation, setGeolocation] = useState([]);
  const [batches, setBatches] = useState([]);
  const [vaccines, setVaccines] = useState([]);
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

  const saveOccurrence = async (key) => {
    console.log('key', key);

    const batch = batches.find((item) => item.address === formData.supplier);

    const { document } = formData;

    const payload = {
      document_number: document,
      document: null,
      document_type: '1',
      geo: 'casa do carai',
      responsible: '52a5d9cf-f99f-4018-8867-f635498802f1',
      transaction_id: key,
    };

    const response = await api.post('/occurrence', payload); //
    console.log('occurrence saved', response); //
  };

  const handleClick = async () => {
    const { vaccine, document } = formData;

    const occurrenceAddress = `0x${CryptoJS.lib.WordArray.random(20)}`;

    const response = await insertOccurrence(
      occurrenceAddress,
      batchAddress,
      '',
      '2',
      vaccine
    );

    console.log(response);

    saveOccurrence(response);
  };

  useEffect(() => {
    const loadBatch = async () => {
      const response = await api.get('/batch');

      setBatchAddress(generateBatchAddress());

      const batchList = response.data;
      setBatches(batchList);
    };

    loadBatch();
  }, []);

  useEffect(() => {
    const loadVaccine = async () => {
      const response = await api.get('/vaccine');

      setBatchAddress(generateBatchAddress());

      const vaccineList = response.data;
      setVaccines(vaccineList);
    };

    loadVaccine();
  }, []);

  useEffect(() => {
    const loadGeolocation = async () => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setGeolocation(
            JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          );
        },
        function (error) {
          console.error(`Error Code = ${error.code} - ${error.message}`);
        }
      );
    };

    loadGeolocation();
  }, []);

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.Select name="batch" onChange={handleChange}>
          <S.SelectOption value="">Selecione um lote</S.SelectOption>
          {batches.map((item) => (
            <S.SelectOption key={item.guid} value={item.address}>
              {item.address}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Select name="vaccine" onChange={handleChange}>
          <S.SelectOption value="">Selecione uma vacina</S.SelectOption>
          {vaccines.map((item) => (
            <S.SelectOption key={item.guid} value={item.guid}>
              {item.name}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Input placeholder="Geolocalização" disabled value={geolocation} />
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
        <S.PageActions>
          <S.ButtonConfirm type="button" onClick={handleClick}>
            Salvar Ocorrência
          </S.ButtonConfirm>
        </S.PageActions>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
