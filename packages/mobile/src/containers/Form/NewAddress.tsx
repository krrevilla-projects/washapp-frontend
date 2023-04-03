import React from 'react';
import {View} from 'react-native';
import {Input, Button, Text} from 'native-base';

import styles from './Form.styles';
import {addressSchemaResolver} from '@laundry-app/shared';
import {Controller, useForm} from 'react-hook-form';
import {AddressDto} from '@laundry-app/shared/openapi';
import {generateTestId} from '../../utils/helpers';

const formConfig = {
  defaultValues: {
    address: '',
  },
  resolver: addressSchemaResolver,
};

interface Props {
  onSubmit: (form: AddressDto) => void;
  isLoading: boolean;
}

const NewAddress: React.FC<Props> = ({onSubmit, isLoading}) => {
  const {control, handleSubmit} = useForm<AddressDto>(formConfig);

  return (
    <>
      <View style={styles.input}>
        <Controller
          control={control}
          render={({formState: {errors}, field: {onChange, onBlur, value}}) => (
            <>
              <Input
                {...generateTestId('FormAddress')}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
              {!!errors?.address?.message && (
                <Text {...generateTestId('FormAddressError')}>
                  {errors.address.message}
                </Text>
              )}
            </>
          )}
          name="address"
        />
      </View>

      <Button
        isLoading={isLoading}
        disabled={isLoading}
        onPress={handleSubmit(onSubmit)}
        {...generateTestId('LoginButton')}>
        Login
      </Button>
    </>
  );
};

export default NewAddress;
