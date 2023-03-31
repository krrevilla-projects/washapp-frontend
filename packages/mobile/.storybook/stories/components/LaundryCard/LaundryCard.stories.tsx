import {getLaundryJobControllerFindAll200Response} from '@laundry-app/shared/mocks/api-mock';
import React from 'react';
import {View} from 'react-native';
import LaundryCard from '../../../../src/components/LaundryCard';

const laundryJobs = getLaundryJobControllerFindAll200Response();

const LaundryCardMeta = {
  title: 'Laundry Card',
  component: LaundryCard,
  args: {
    data: laundryJobs[0],
  },
  argTypes: {
    onPress: {action: 'clicked'},
  },
  decorators: [
    Story => (
      <View style={{padding: 20, justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default LaundryCardMeta;

export const Basic = {};
