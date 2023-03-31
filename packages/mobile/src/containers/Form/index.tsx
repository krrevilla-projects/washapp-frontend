import React from 'react';
import {View} from 'react-native';

import styles from './Form.styles';
import {useAddressCreate, useAddressList} from '@laundry-app/shared';
import {AddressDto} from '@laundry-app/shared/openapi';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthedStackParamList} from '../Navigation';
import Routes from '../../config/routes';
import NewAddress from './NewAddress';
import AddressList from './AddressList';

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
