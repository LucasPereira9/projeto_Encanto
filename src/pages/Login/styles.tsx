import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '50%',
    top: 100,
  },
  heartImage: {
    width: 120,
    height: 110,
  },
  stringImage: {
    width: 170,
    height: 60,
  },
  content: {
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPass: {
    color: theme.colors.primary,
    fontSize: 17,
  },
  bottomButton: {
    flexDirection: 'row',
  },
  registerText: {
    color: theme.colors.white,
    fontSize: 17,
  },
  gradient: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    height: '16%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
