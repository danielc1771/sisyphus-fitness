import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import View from './view';

export default function UserHeader() {
  const userData = useSelector((state: RootState) => state.user);
  const text = {
    userFirstName: userData.firstName ?? '',
  };
  return <View text={text} profileImageUrl={userData.profileImageUrl ?? ''} />;
}
