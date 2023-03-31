import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import React from 'react';
import {View} from 'react-native';
import Status from '../../../../src/components/Status';

const StatusMeta = {
  title: 'Status',
  component: Status,
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default StatusMeta;

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
