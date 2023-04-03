import React from 'react';
import {Badge} from 'native-base';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';

interface StatusProps {
  status: LaundryJobStatus;
}

const Status: React.FC<StatusProps> = ({status}) => {
  return <Badge>{status}</Badge>;
};

export default React.memo(Status);
