import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2.2,
    borderColor: theme.colors.gray,
    height: '22%',
    width: '40%',
  },
  text: {
    color: theme.colors.white,
    fontSize: 17,
  },
});
