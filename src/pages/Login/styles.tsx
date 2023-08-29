import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
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
    zIndex: 1,
    flexDirection: 'row',
  },
  registerText: {
    color: theme.colors.white,
    fontSize: 17,
  },
  forgotContentModal: {
    top: 30,
    alignItems: 'center',
    height: '60%',
    justifyContent: 'space-around',
  },
  forgotTitleModal: {
    fontSize: 22,
    fontWeight: 'bold',
    top: 20,
  },
  forgotButtonModal: {
    alignItems: 'center',
  },
  forgotEmailError: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.error,
    bottom: 24,
  },
});
