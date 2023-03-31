import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text, Input} from '@rneui/themed';
import {useForm, Controller} from 'react-hook-form';

import {
  registerSchemaResolver,
  useAuthedUser,
  useRegister,
} from '@laundry-app/shared';
import {RegisterDto} from '@laundry-app/shared/openapi';

import styles from './Registration.styles';
import {genericStorage, StorageKeys} from '../../utils/localStorage';
import {generateTestId} from '../../utils/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnauthedStackParamList} from '../Navigation';
import Routes from '../../config/routes';

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
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginFirstName')}
                label="First Name"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.firstName?.message ?? ''}
              />
            )}
            name="firstName"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginLastName')}
                label="Last Name"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.lastName?.message ?? ''}
              />
            )}
            name="lastName"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginEmail')}
                label="Email"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.email?.message ?? ''}
              />
            )}
            name="email"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginContact')}
                label="Contact"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.contact?.message ?? ''}
              />
            )}
            name="contact"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginPassword')}
                secureTextEntry={true}
                label="Password"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.password?.message ?? ''}
              />
            )}
            name="password"
          />
        </View>
        <View style={styles.input}>
          <Controller
            control={control}
            render={({
              formState: {errors},
              field: {onChange, onBlur, value},
            }) => (
              <Input
                {...generateTestId('LoginPassword')}
                secureTextEntry={true}
                label="Confirm Password"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.confirmPassword?.message ?? ''}
              />
            )}
            name="confirmPassword"
          />
        </View>
        <Button
          {...generateTestId('LoginButton')}
          loading={isFetching || isLoading}
          disabled={isFetching || isLoading}
          onPress={handleSubmit(onSubmit)}>
          Register
        </Button>
      </ScrollView>
    </View>
  );
};

export default RegistrationContainer;
