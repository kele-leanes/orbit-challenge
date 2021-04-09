import { StyleSheet } from 'react-native';
import { Theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    height: 70,
    borderColor: '#ccc',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Theme.COLORS.WHITE,
  },
});
