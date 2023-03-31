import React from 'react';
import {Badge} from '@rneui/themed';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';

import {useStatusStyle} from './Status.styles';

interface StatusProps {
  status: LaundryJobStatus;
}

const Status: React.FC<StatusProps> = ({status}) => {
  const style = useStatusStyle(status);

  return (
    <Badge
      value={status}
      badgeStyle={style.containerStyle}
      textStyle={style.textStyle}
    />
  );
};

export default React.memo(Status);
