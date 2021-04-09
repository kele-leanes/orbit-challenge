import { StyleSheet } from 'react-native';
import { Theme } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: Theme.COLORS.WHITE,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
