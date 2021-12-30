import React from 'react';
import { ModalAction } from '../types';

import View from './view';

export default function StartModal() {
  // TODO: get this from state?
  const actions: [ModalAction] = [
    {
      title: 'Start Workout',
      icon: 'rocket',
      action: () => console.log('yeee'),
    },
  ];

  return <View actions={actions} />;
}
