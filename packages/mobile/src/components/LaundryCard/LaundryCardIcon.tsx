import {Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';

import {useLaundryCardIconStyle} from './LaundryCard.styles';

interface LaundryCardIconProps {
  status: LaundryJobStatus;
}

const getIcon = (
  status: LaundryJobStatus,
): 'shopping-basket' | 'close' | 'check' => {
  switch (status) {
    case LaundryJobStatus.Cancelled:
      return 'close';
    case LaundryJobStatus.Paid:
    case LaundryJobStatus.Finished:
      return 'check';
    default:
      return 'shopping-basket';
  }
};

const LaundryCardIcon: React.FC<LaundryCardIconProps> = props => {
  const styles = useLaundryCardIconStyle();
  const iconName = getIcon(props.status);

  return (
    <View style={styles.iconContainer}>
      <Icon name={iconName} iconStyle={styles.icon} />
    </View>
  );
};

export default React.memo(LaundryCardIcon);
