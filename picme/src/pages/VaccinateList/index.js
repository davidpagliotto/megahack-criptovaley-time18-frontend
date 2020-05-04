import React, {useState} from 'react';

import * as S from './styles';
import api from "~/services/api";

export default function VaccinateList() {
  const [formData, setFormData] = useState({});
  const [vaccinates, setVaccinates] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const {document} = formData;

    const loadVaccinates = async () => {
      const response = await api.get(`/vaccinate?document=${document}`);

      const vaccinates = response.data;

      setVaccinates(vaccinates);
    };

    loadVaccinates();
  };

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.BatchTitleContainer>
          <S.BatchTitleContainerItem>
            Caderneta de Vacinação
          </S.BatchTitleContainerItem>
        </S.BatchTitleContainer>
        <S.Input
          name="document"
          placeholder="Documento"
          onChange={handleChange}
        />
        <S.ButtonConfirm type="button" onClick={handleClick}>
          Consultar
        </S.ButtonConfirm>
      {vaccinates.map((item) => (
        <S.VaccinateContent>
          <b>Registro:</b> {item.guid}<br />
          <b>Aplicada em:</b> {item.date_of_vaccination}<br />
          <b>Responsável:</b> {item.responsible}<br />
          <b>Vacina:</b> {item.vaccine_obj.name}<br />
          <b>Documento:</b> {item.document_type} / {item.document}
        </S.VaccinateContent>
      ))}
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
