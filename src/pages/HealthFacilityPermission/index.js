import React, { useState } from "react";
import { toast } from "react-toastify";

import { addHealthFacilities } from "~/services/blockChain";
import * as S from "./styles";

export default function HealthFacilityPermission() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const { address } = formData;

    try {
      await addHealthFacilities(address);
    } catch (error) {
      toast.error(
        "Erro ao salvar Unidade de saúde, verifique os dados inseridos...."
      );
    }
  };

  return (
    <S.BatchWrapper>
      <S.BatchContent>
        <S.Input
          name="address"
          placeholder="Endereço da unidade de saúde"
          onChange={handleChange}
        />
        <S.PageActions>
          <S.ButtonConfirm type="button" onClick={handleClick}>
            Salvar unidade de saúde
          </S.ButtonConfirm>
        </S.PageActions>
      </S.BatchContent>
    </S.BatchWrapper>
  );
}
