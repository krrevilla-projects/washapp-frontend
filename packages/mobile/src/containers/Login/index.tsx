import React from 'react';
import {Pressable, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Button, Text, Input} from 'native-base';

import {
  loginSchemaResolver,
  useAuthedUser,
  useLogin,
} from '@laundry-app/shared';
import {LoginUserDto} from '@laundry-app/shared/openapi';

import styles from './Login.styles';
import {genericStorage, StorageKeys} from '../../utils/localStorage';
import {generateTestId} from '../../utils/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthedStackParamList} from '../Navigation';
import Routes from '../../config/routes';

const formConfig = {
  defaultValues: {
    email: '',
    password: '',
  },
  resolver: loginSchemaResolver,
};

type Props = NativeStackScreenProps<UnauthedStackParamList, Routes.Login>;

const LoginContainer: React.FC<Props> = ({navigation}) => {
  const {control, handleSubmit} = useForm<LoginUserDto>(formConfig);
  const {isLoading, onLogin} = useLogin({
    onSuccess: data =>
      genericStorage.set(StorageKeys.accessToken, data.access_token),
  });
  const {isFetching} = useAuthedUser();

  const onSubmit = (form: LoginUserDto) => {
    onLogin(form);
  };

  const onCreateAccount = () => {
    navigation.replace(Routes.Registration);
  };

  return (
    <View style={styles.rootContainer} {...generateTestId('LoginContainer')}>
      <View style={styles.header}>
        <Text style={styles.login}>Login</Text>
        <Pressable onPress={onCreateAccount}>
          <Text style={styles.createAccount}>Create Account</Text>
        </Pressable>
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              {...generateTestId('LoginEmail')}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="email"
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              {...generateTestId('LoginPassword')}
              secureTextEntry={true}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="password"
        />
      </View>
      <Button
        {...generateTestId('LoginButton')}
        isLoading={isLoading || isFetching}
        disabled={isLoading || isFetching}
        onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </View>
  );
};

export default LoginContainer;
