import {colors, typography} from '@laundry-app/shared/style';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    zIndex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 500,
    marginBottom: -50,
    zIndex: 1,
  },
  footer: {
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },
  createAccount: {
    ...typography.link,
    color: colors.white,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default styles;
