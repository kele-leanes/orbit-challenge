import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Theme } from '../../constants';

export const Spinner = () => {
  return <ActivityIndicator color={Theme.COLORS.PRIMARY} />;
};
