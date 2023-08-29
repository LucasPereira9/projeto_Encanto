import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 12,
    height: 40,
    width: '80%',
  },
  iconContainer: {
    borderRightWidth: 0.6,
    minWidth: '11%',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    paddingHorizontal: 10,
  },
  inputContainer: {
    color: theme.colors.white,
    paddingLeft: 10,
    flex: 1,
  },
  eyeContent: {
    marginRight: 13,
  },
});
