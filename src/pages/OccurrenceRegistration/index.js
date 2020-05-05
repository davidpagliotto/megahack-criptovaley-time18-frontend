import React, { useEffect, useState } from "react";

import api from "~/services/api";
import { insertOccurrence } from "~/services/blockChain";

import { toast } from "react-toastify";

import * as S from "./styles";

const CryptoJS = require("crypto-js");

const DOCTYPES = ["OCORRÊNCIA", "OUTROS"];

export default function OccurrenceRegistration() {
  const [geolocation, setGeolocation] = useState([]);
  const [batches, setBatches] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [batchAddress, setBatchAddress] = useState("");

  const [formData, setFormData] = useState({
    document_type: "OCORRÊNCIA",
    geo: "",
  });

  const [death, setDeath] = useState(false);

  const generateBatchAddress = () => {
    const address = CryptoJS.lib.WordArray.random(20);

    setFormData({
      ...formData,
      address: String(`0x${address}`),
    });

    return address;
  };

  const handleChangeSelectBatch = async (event) => {
    const paramValue = event.target.value;

    const batch = batches.find((item) => item.address === paramValue);

    setBatchAddress(paramValue);

    const response = await api.get(`/batch/${batch.guid}`);

    setFormData({
      ...formData,
      batch: batch.guid,
    });

    setVaccines(response.data.items);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      geo: geolocation,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const { address, document, document_type, vaccine } = formData;

    try {
      await insertOccurrence(
        address,
        batchAddress,
        document,
        document_type,
        vaccine
      );
    } catch (error) {
      toast.error(
        "Erro ao transacionar ocorrência com ethereum, verifique os dados..."
      );
    }

    try {
      await api.post("/occurrence", formData);

      toast.success("Ocorrência salva com sucesso!");
    } catch (error) {
      toast.error("Erro ao salvar ocorrência, verifique os dados...");
    }
  };

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

  useEffect(() => {
    loadGeolocation();

    const loadBatch = async () => {
      setBatchAddress(generateBatchAddress());
      const response = await api.get("/batch");

      const batchList = response.data;
      setBatches(batchList);
    };

    loadBatch();
  }, []);

  const handleChangeCheck = (event) => {
    setFormData({
      ...formData,
      death: !death,
    });
  };

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.Select name="batch" onChange={handleChangeSelectBatch}>
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
              {item.vaccine_guid}
            </S.SelectOption>
          ))}
        </S.Select>
        <S.Input placeholder="Geolocalização" disabled value={geolocation} />
        <S.Select name="document_type" onChange={handleChange}>
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
        <S.TextArea
          rows="6"
          name="effects"
          placeholder="Efeitos"
          onChange={handleChange}
        />

        <S.PageActions>
          <S.DethCheckContainer>
            <S.InputCheck
              checked={death}
              onClick={() => setDeath(!death)}
              onChange={handleChangeCheck}
              name="death"
              id="death"
              type="checkbox"
            />
            <S.LabelCheckInput htmlFor="death">Houve morte</S.LabelCheckInput>
          </S.DethCheckContainer>
          <S.ButtonConfirm onClick={handleClick} type="button">
            Salvar Ocorrência
          </S.ButtonConfirm>
        </S.PageActions>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
