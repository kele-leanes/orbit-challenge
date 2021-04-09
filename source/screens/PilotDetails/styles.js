import { StyleSheet } from 'react-native';
import { Theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Theme.COLORS.BACKGROUND,
    flex: 1,
  },
  dataContainer: {
    alignSelf: 'center',
    width: '80%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 20,
    backgroundColor: Theme.COLORS.WHITE,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textbold: {
    fontWeight: 'bold',
  },
  tagContainer: {
    alignItems: 'flex-end',
  },
});
