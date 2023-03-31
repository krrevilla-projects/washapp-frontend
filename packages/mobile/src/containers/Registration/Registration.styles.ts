import {colors, typography} from '@laundry-app/shared/style';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  createAccount: {
    ...typography.header5,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: 20,
  },
});

export default styles;
