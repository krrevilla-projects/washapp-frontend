import {AddressResponse} from '@laundry-app/shared/openapi';
import {Text} from 'native-base';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

interface Props {
  data: AddressResponse[];
  isLoading: boolean;
}

const keyExtractor = (item: AddressResponse) => `${item.id}`;

const AddressList: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: AddressResponse}) => {
    return (
      <TouchableOpacity>
        <Text>{item.address}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
  );
};

export default AddressList;
