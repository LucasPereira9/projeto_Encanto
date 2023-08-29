import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  content: {
    height: '100%',
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignItems: 'center',
    top: '18%',
  },
  title: {
    fontSize: 22,
    color: theme.colors.primary,
  },
  inputsContainer: {
    height: '46%',
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
