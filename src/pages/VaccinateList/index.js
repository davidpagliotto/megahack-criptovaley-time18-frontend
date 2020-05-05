import React, { useState } from "react";

import * as S from "./styles";
import api from "~/services/api";

export default function VaccinateList() {
  const [formData, setFormData] = useState({});
  const [vaccinates, setVaccinates] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const { document } = formData;

    const loadVaccinates = async () => {
      const response = await api.get(`/vaccinate?document=${document}`);

      const vaccinates = response.data.filter((el) => el.document === document);

      setVaccinates(vaccinates);
    };

    loadVaccinates();
  };

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.Input
          name="document"
          placeholder="Documento"
          onChange={handleChange}
        />
        <S.PageAction>
          <S.ButtonConfirm type="button" onClick={handleClick}>
            Consultar
          </S.ButtonConfirm>
        </S.PageAction>

        {vaccinates.length > 0 && (
          <S.BatchTitleContainerItem>Vacinações</S.BatchTitleContainerItem>
        )}

        <S.VaccinatesContainer>
          {vaccinates.map((item) => (
            <S.VaccinateContent key={item.guid}>
              <S.VaccinateTitle>Registro:</S.VaccinateTitle>
              <S.VaccinateDesc>{item.guid}</S.VaccinateDesc>

              <S.VaccinateTitle>Aplicada em:</S.VaccinateTitle>
              <S.VaccinateDesc>{item.date_of_vaccination}</S.VaccinateDesc>

              <S.VaccinateTitle>Responsável:</S.VaccinateTitle>
              <S.VaccinateDesc>{item.responsible}</S.VaccinateDesc>

              <S.VaccinateTitle>Vacina :</S.VaccinateTitle>
              <S.VaccinateDesc>{item.vaccine_obj.name}</S.VaccinateDesc>

              <S.VaccinateTitle>Documento:</S.VaccinateTitle>
              <S.VaccinateDesc>{item.document_type} </S.VaccinateDesc>
            </S.VaccinateContent>
          ))}
        </S.VaccinatesContainer>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
