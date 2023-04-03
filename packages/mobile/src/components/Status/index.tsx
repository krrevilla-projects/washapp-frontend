import React from 'react';
import {Badge, Text} from 'native-base';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import {useStatusStyle} from './Status.styles';

interface StatusProps {
  status: LaundryJobStatus;
}

const Status: React.FC<StatusProps> = ({status}) => {
  const {containerStyle, textStyle} = useStatusStyle(status);
  return (
    <Badge style={containerStyle}>
      <Text style={textStyle}>{status}</Text>
    </Badge>
  );
};

export default React.memo(Status);
