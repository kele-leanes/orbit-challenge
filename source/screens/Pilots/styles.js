import { StyleSheet } from 'react-native';

import { Theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  error: {
    color: Theme.COLORS.WHITE,
    fontSize: 18,
  },
});
