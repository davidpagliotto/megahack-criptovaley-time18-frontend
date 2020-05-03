import React, { useEffect } from 'react';

import api from '~/services/api';
import { insertBatch } from '~/services/blockChain';

export default function Dashboard() {
  useEffect(() => {
    const loadVaccines = async () => {
      const response = await api.get('/vaccine');

      console.log(response.data);
    };

    loadVaccines();
  }, []);

  const handleClick = async () => {
    const response = await insertBatch(
      null,
      '0x1772976766B5C5C01EbfcACBD3C7157DDd9DCf95',
      "{'lat':-27.5,'long':-47.5}",
      '001',
      'NF'
    );
    console.log(response);
  };

  return (
    <>
      <h1>Hello</h1>
      <button type="button" onClick={handleClick}>
        LANÇAR
      </button>
    </>
  );
}
