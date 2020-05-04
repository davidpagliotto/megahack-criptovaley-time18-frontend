import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { insertBatch } from '~/services/blockChain';
import * as S from './styles';

const CryptoJS = require('crypto-js');

const DOCTYPES = ['NF', 'OUTROS'];

export default function BatchRegistration() {
  const [geolocation, setGeolocation] = useState([]);
  const [suppliers, setsuppliers] = useState([]);
  const [batchAddress, setBatchAddress] = useState('');
  const [formData, setFormData] = useState({});
  const [items, setItems] = useState([]);
  const [vaccines, setVaccines] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        vaccine_guid: null,
        quantity: null,
      },
    ]);
  };

  const generateBatchAddress = () => {
    const address = CryptoJS.lib.WordArray.random(20);

    setFormData({
      ...formData,
      address: String(address),
    });

    return address;
  };

  const handleItems = (index, vaccine_guid = null, quantity = null) => {
    const novosItems = [...items];
    novosItems[index].vaccine_guid =
      vaccine_guid || novosItems[index].vaccine_guid;
    novosItems[index].quantity = quantity || novosItems[index].quantity;
    setItems(novosItems);
    console.log(items);
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

    const supplier = suppliers.find(
      (item) => item.address === formData.supplier
    );

    console.log(supplier);

    const { document, docume } = formData;

    const itemsMapped = items.map((i) => ({ ...i, supplier: supplier.guid }));

    const payload = {
      address: String(batchAddress),
      supplier: supplier.guid,
      batch_origin: null,
      document_number: document,
      document: null,
      document_type: '1',
      geo: geolocation,
      responsible: '52a5d9cf-f99f-4018-8867-f635498802f1',
      items: itemsMapped,
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
      const response = await api.get('/vaccine');

      const vaccinesList = response.data;
      setVaccines(vaccinesList);
    };

    loadSupplier();
  }, []);

  useEffect(() => {
    const loadSupplier = async () => {
      const response = await api.get('/person?person_type=pj');

      setBatchAddress(generateBatchAddress());

      const suppliersList = response.data;
      setsuppliers(suppliersList);
    };

    loadSupplier();
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
        <S.Select name="supplier" onChange={handleChange}>
          <S.SelectOption value="">
            Selecione um laboratório (fornecedor)
          </S.SelectOption>
          {suppliers.map((item) => (
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
        <S.Input placeholder="Geolocalização" disabled value={geolocation} />
        <S.Select name="document_type">
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
        <S.ButtonAddItem type="button" onClick={addItem}>
          +
        </S.ButtonAddItem>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <S.Select
                onChange={(event) =>
                  handleItems(index, event.target.value, null)
                }
              >
                <S.SelectOption value="">Selecione uma vacina</S.SelectOption>
                {vaccines.map((item) => (
                  <S.SelectOption key={item.guid} value={item.guid}>
                    {item.name}
                  </S.SelectOption>
                ))}
              </S.Select>
              <S.Input
                onChange={(event) =>
                  handleItems(index, null, event.target.value)
                }
                name="quantity"
                placeholder="Quantidade"
              />
            </div>
          );
        })}
        <S.PageAction>
          <S.ButtonConfirm type="button" onClick={handleClick}>
            Salvar Lote
          </S.ButtonConfirm>
        </S.PageAction>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
