import {useAddressCreate, useAddressList} from '@laundry-app/shared';
import {AddressDto} from '@laundry-app/shared/openapi';
import Routes from '@mobile/config/routes';
import type {AuthedStackParamList} from '@mobile/containers/Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

import AddressList from './AddressList';
import styles from './Form.styles';
import NewAddress from './NewAddress';

type Props = NativeStackScreenProps<AuthedStackParamList, Routes.Form>;

const FormContainer: React.FC<Props> = () => {
  const {data, isLoading} = useAddressList();
  const {onCreateAddress, isLoading: isSubmittingAddress} = useAddressCreate();

  const onSubmit = (form: AddressDto) => {
    onCreateAddress(form);
  };

  return (
    <View style={styles.rootContainer}>
      <NewAddress onSubmit={onSubmit} isLoading={isSubmittingAddress} />
      <View style={styles.dataContainer}>
        <AddressList data={data || []} isLoading={isLoading} />
      </View>
    </View>
  );
};

export default FormContainer;
