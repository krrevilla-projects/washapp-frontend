import {LaundryJobStatus} from '@laundry-app/shared/openapi';

import Status from '.';

const StatusMeta = {
  title: 'Status',
  component: Status,
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
