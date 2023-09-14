import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  topBar: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  logoContainer: {
    width: '30%',
    marginHorizontal: 10,
  },
  cartContainer: {
    marginHorizontal: 18,
  },
});
