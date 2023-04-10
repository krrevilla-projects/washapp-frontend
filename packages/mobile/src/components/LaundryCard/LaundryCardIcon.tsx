import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import {generateTestId} from '@mobile/utils/helpers';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Icon
        {...generateTestId(`LaundryCardIcon-${iconName}`)}
        name={iconName}
        style={styles.icon}
      />
    </View>
  );
};

export default React.memo(LaundryCardIcon);
