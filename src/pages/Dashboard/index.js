import React, { useEffect } from "react";

import api from "~/services/api";
import * as S from "./styles";
import {
  insertBatch,
  insertTransactionBatch,
  insertVaccinate,
} from "~/services/blockChain";

export default function Dashboard() {
  return (
    <S.DashboardWrapper>
      <h1>Bem vindo ao Imune</h1>
      <p>
        Sistema de rastreio de lotes de vacina, da produção até a aplicação em
        Blockchain
      </p>
      <br />
      <p>
        Smart contract publicado na rede de testes Ropsten:{" "}
        <a target="_blank" href={"https://ropsten.etherscan.io"}>
          link
        </a>
      </p>
      <br />
      <p>Address: 0x65A7eA299e9E8DB63478eab12E403a1c7b9501df</p>
    </S.DashboardWrapper>
  );
}
