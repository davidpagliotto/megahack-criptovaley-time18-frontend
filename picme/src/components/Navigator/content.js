import React from 'react';
import { PersonOutline as Icon } from '@styled-icons/evaicons-outline/PersonOutline';

export const categories = [
  {
    id: 'Registros',
    children: [
      { id: 'Unidade de Saúde', icon: <Icon />, route: 'healthfacility' },
      { id: 'Registro de Lote', icon: <Icon />, route: 'batch' },
      { id: 'Registro de Ocorrência', icon: <Icon />, route: 'occurrence' },
      { id: 'Registro de Vacina', icon: <Icon />, route: 'vaccinate' },
    ],
  },
  {
    id: 'Consulta',
    children: [
      { id: 'Dashboard', icon: <Icon />, route: 'dashboard' },
      { id: 'Carteirinha', icon: <Icon />, route: 'vaccinatelist' },
    ],
  },
];
