import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  content: {
    height: '90%',
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center',
    top: '14%',
  },
  title: {
    fontSize: 22,
    color: theme.colors.primary,
  },
  inputsContainer: {
    height: '56%',
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    bottom: '22%',
  },

  iconContent: {
    position: 'absolute',
    marginHorizontal: 15,
  },
});
