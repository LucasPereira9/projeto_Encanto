import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.success,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
  },
  activeIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottieContent: {
    height: 220,
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.white,
    textAlign: 'center',
  },
  buttonContent: {
    alignSelf: 'center',
  },
});
