import React, {useState} from 'react';

import * as S from './styles';
import api from "~/services/api";

export default function VaccinateList() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const {document} = formData;

    const loadVaccines = async () => {
      const response = await api.get(`/vaccinate?document=${document}`);

      const vaccineList = response.data;

      loadVaccines();
    };
  }

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
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
