import {
  registerSchemaResolver,
  useAuthedUser,
  useRegister,
} from '@laundry-app/shared';
import {RegisterDto} from '@laundry-app/shared/openapi';
import Routes from '@mobile/config/routes';
import type {UnauthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import {genericStorage, StorageKeys} from '@mobile/utils/localStorage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Input, Text} from 'native-base';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';

import styles from './Registration.styles';

const formConfig = {
  defaultValues: {
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  resolver: registerSchemaResolver,
};

type Props = NativeStackScreenProps<
  UnauthedStackParamList,
  Routes.Registration
>;

const RegistrationContainer: React.FC<Props> = () => {
  const {control, handleSubmit} = useForm<RegisterDto>(formConfig);
  const {isLoading, onRegister} = useRegister({
    onSuccess: data =>
      genericStorage.set(StorageKeys.accessToken, data.access_token),
  });
  const {isFetching} = useAuthedUser();

  const onSubmit = (form: RegisterDto) => {
    onRegister(form);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.createAccount}>Create Account</Text>
      </View>
      <ScrollView>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                {...generateTestId('LoginFirstName')}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="firstName"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                {...generateTestId('LoginLastName')}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="lastName"
          />
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
                {...generateTestId('LoginContact')}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
            name="contact"
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
            name="confirmPassword"
          />
        </View>
        <Button
          {...generateTestId('LoginButton')}
          isLoading={isFetching || isLoading}
          disabled={isFetching || isLoading}
          onPress={handleSubmit(onSubmit)}>
          Register
        </Button>
      </ScrollView>
    </View>
  );
};

export default RegistrationContainer;
