import {
  registerSchemaResolver,
  useAuthedUser,
  useRegister,
} from '@laundry-app/shared';
import {MobileRoutes} from '@laundry-app/shared/config/routes';
import {RegisterDto} from '@laundry-app/shared/openapi';
import type {UnauthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import {genericStorage, StorageKeys} from '@mobile/utils/localStorage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, FormControl, Input, Text} from 'native-base';
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
  MobileRoutes.Registration
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
    <View
      style={styles.rootContainer}
      {...generateTestId('RegistrationContainer')}>
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
              <FormControl isInvalid={!!errors?.firstName?.message}>
                <Input
                  {...generateTestId('RegistrationFirstName')}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.firstName?.message}
                </FormControl.ErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!errors?.lastName?.message}>
                <Input
                  {...generateTestId('RegistrationLastName')}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.lastName?.message ?? ''}
                </FormControl.ErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!errors?.email?.message}>
                <Input
                  {...generateTestId('RegistrationEmail')}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.email?.message ?? ''}
                </FormControl.ErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!errors?.contact?.message}>
                <Input
                  {...generateTestId('RegistrationContact')}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.contact?.message ?? ''}
                </FormControl.ErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!errors?.password?.message}>
                <Input
                  {...generateTestId('RegistrationPassword')}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.password?.message ?? ''}
                </FormControl.ErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!errors?.confirmPassword?.message}>
                <Input
                  {...generateTestId('RegistrationConfirmPassword')}
                  secureTextEntry={true}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage
                  {...generateTestId('RegistrationInputError')}>
                  {errors?.confirmPassword?.message ?? ''}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
            name="confirmPassword"
          />
        </View>
        <Button
          accessibilityRole="button"
          {...generateTestId('RegistrationButton')}
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
