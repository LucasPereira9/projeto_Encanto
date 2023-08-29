import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: theme.colors.gray,
    height: 30,
    minWidth: '40%',
  },
  text: {
    color: theme.colors.white,
    fontSize: 17,
  },
});
