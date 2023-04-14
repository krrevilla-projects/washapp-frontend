import {LaundryJobStatus} from '@laundry-app/shared/openapi';

import LaundryCardIcon from './LaundryCardIcon';

const LaundryCardIconMeta = {
  title: 'Laundry Card Icon',
  component: LaundryCardIcon,
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
