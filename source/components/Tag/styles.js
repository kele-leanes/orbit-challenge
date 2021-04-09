import { StyleSheet } from 'react-native';
import { Theme } from '../../constants';

export const styles = StyleSheet.create({
  tag: {
    backgroundColor: Theme.COLORS.SECONDARY,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    marginBottom: 5,
  },
  tagText: {
    color: Theme.COLORS.WHITE,
    fontWeight: '600',
  },
});
