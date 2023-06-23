import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  content: {
    height: '90%',
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center',
    top: '13%',
  },
  title: {
    fontSize: 22,
    color: theme.colors.primary,
  },
  button: {
    alignContent: 'center',
    alignItems: 'center',
    bottom: '22%',
  },
});
