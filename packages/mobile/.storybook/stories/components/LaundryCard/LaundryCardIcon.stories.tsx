import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import React from 'react';
import {View} from 'react-native';
import LaundryCardIcon from '../../../../src/components/LaundryCard/LaundryCardIcon';

const LaundryCardIconMeta = {
  title: 'Laundry Card Icon',
  component: LaundryCardIcon,
  decorators: [
    Story => (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default LaundryCardIconMeta;

export const Pending = {
  args: {
    status: LaundryJobStatus.Pending,
  },
};

export const Cancelled = {
  args: {
    status: LaundryJobStatus.Cancelled,
  },
};

export const InProgress = {
  title: 'In Progress',
  args: {
    status: LaundryJobStatus.InProgress,
  },
};

export const Paid = {
  args: {
    status: LaundryJobStatus.Paid,
  },
};

export const Finished = {
  args: {
    status: LaundryJobStatus.Finished,
  },
};
