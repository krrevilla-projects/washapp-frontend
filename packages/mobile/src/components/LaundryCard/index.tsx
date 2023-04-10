import {formatDate} from '@laundry-app/shared';
import {
  LaundryJobResponse,
  LaundryJobStatus,
} from '@laundry-app/shared/openapi';
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import Status from '@mobile/components/Status';
import {Divider, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useLaundryCardStyle} from './LaundryCard.styles';
import LaundryCardIcon from './LaundryCardIcon';

interface Props {
  data: LaundryJobResponse;
  onPress: (data: LaundryJobResponse) => void;
}

const LaundryCard: React.FC<Props> = ({data, onPress}) => {
  const styles = useLaundryCardStyle();
  const totalValue = calculateTotalValue(data.items);

  const onCardPress = () => {
    onPress(data);
  };

  return (
    <React.Fragment>
      <TouchableOpacity accessibilityRole="button" onPress={onCardPress}>
        <View style={styles.container}>
          <LaundryCardIcon status={data.status as LaundryJobStatus} />
          <View style={styles.detailsContainer}>
            <Text style={styles.date}>{formatDate(data.createdAt)}</Text>
            <Text style={styles.total}>Total: ${totalValue}</Text>
          </View>
          <Status status={data.status as LaundryJobStatus} />
        </View>
      </TouchableOpacity>
      <Divider />
    </React.Fragment>
  );
};

export default React.memo(LaundryCard);
