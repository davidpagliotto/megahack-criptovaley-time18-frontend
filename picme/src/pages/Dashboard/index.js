import React, { useEffect } from 'react';

import api from '~/services/api';

export default function Dashboard() {
  useEffect(() => {
    const loadVaccines = async () => {
      const response = await api.get('/vaccine');

      console.log(response.data);
    };

    loadVaccines();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
