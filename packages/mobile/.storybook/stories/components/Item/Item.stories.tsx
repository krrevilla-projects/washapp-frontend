import {getLaundryJobControllerFindAll200Response} from '@laundry-app/shared/mocks/api-mock';
import React from 'react';
import {View} from 'react-native';
import Item from '../../../../src/components/Item';

const ItemMeta = {
  title: 'Item',
  component: Item,
  args: {
    name: 'Lorem Ipsum',
    quantity: 2,
    itemPrice: 24,
  },
  decorators: [
    Story => (
      <View style={{padding: 20, justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default ItemMeta;

export const Basic = {};
