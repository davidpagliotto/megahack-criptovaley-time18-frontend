import React, { useEffect, useState } from "react";

import api from "~/services/api";
import {
  insertBatch,
  getCurrentProvider,
  insertVaccinate,
} from "~/services/blockChain";
import * as S from "./styles";

const CryptoJS = require("crypto-js");

const DOCTYPES = ["cpf", "RG", "CNH", "passport", "other"];

export default function VaccinateRegistration() {
  const [geolocation, setGeolocation] = useState([]);
  const [batches, setBatches] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [batchAddress, setBatchAddress] = useState("");
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

  const saveVaccinate = async (key) => {
    console.log("key", key);

    const { batch, vaccine, document, document_type } = formData;

    console.log(vaccine, vaccines, batches, batchAddress);

    const vaccine_name = vaccines.find((el) => {
      return el.guid == vaccine;
    }).name;

    const batchGuid = batches.find((el) => {
      return el.address == batch;
    }).guid;

    const payload = {
      batch: String(batchGuid),
      date_of_vaccination: new Date(),
      document: document,
      document_type: document_type,
      geo: geolocation,
      responsible: "52a5d9cf-f99f-4018-8867-f635498802f1",
      transaction_id: key,
      vaccine: vaccine,
      name: vaccine_name,
    };

    const response = await api.post("/vaccinate", payload);
    console.log("vaccinate saved", response);
  };

  const handleClick = async () => {
    const { batch, vaccine, document } = formData;

    console.log(batch, vaccine, document);

    const vaccinateAddress = `0x${CryptoJS.lib.WordArray.random(20)}`;

    const response = await insertVaccinate(
      vaccinateAddress,
      batch,
      "",
      document,
      vaccine
    );

    console.log(response);

    saveVaccinate(response);
  };

  useEffect(() => {
    const loadBatch = async () => {
      const response = await api.get("/batch");

      const batchList = response.data;
      setBatches(batchList);
    };

    loadBatch();
  }, []);

  useEffect(() => {
    const loadVaccine = async () => {
      const response = await api.get("/vaccine");

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
        <S.Select name="document_type" onChange={handleChange}>
          <S.SelectOption value="">
            Selecione o tipo de documento
          </S.SelectOption>
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
            Salvar Vacinação
          </S.ButtonConfirm>
        </S.PageActions>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
