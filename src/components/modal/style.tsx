import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  Content: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
  },
  title: {
    fontSize: 20,
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    color: theme.colors.black,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    top: 30,
    height: 118,
  },
});
