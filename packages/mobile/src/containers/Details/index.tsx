import {useLaundryJob, useLaundryJobUpdateStatus} from '@laundry-app/shared';
<<<<<<< Updated upstream
import {JobItemsResponse, LaundryJobStatus} from '@laundry-app/shared/openapi';
=======
import {MobileRoutes} from '@laundry-app/shared/config/routes';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';
>>>>>>> Stashed changes
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import Item from '@mobile/components/Item';
import type {AuthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';

import {useDetailStyles} from './Details.styles';

type Props = NativeStackScreenProps<AuthedStackParamList, MobileRoutes.Details>;

const renderItem = (item: JobItemsResponse, index: number) => {
  const animation = FadeInRight.delay(index * 50).duration(500);

  return (
    <Animated.View entering={animation}>
      <Item
        key={item.id}
        name={item.item.name}
        itemPrice={item.item.price}
        quantity={item.quantity}
      />
    </Animated.View>
  );
};

const DetailsContainer: React.FC<Props> = ({route}) => {
  const styles = useDetailStyles();
  const {data, refetch} = useLaundryJob(route.params.id, route.params.preData);
  const {mutate: onUpdate, isLoading} = useLaundryJobUpdateStatus();
  const totalValue = calculateTotalValue(data?.items ?? []);

  const onCancel = async () => {
    await onUpdate({id: route.params.id, status: LaundryJobStatus.Cancelled});
    refetch();
  };

  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={styles.totalValue}>{totalValue} PHP</Text>
        <Text style={styles.totalLabel}>Total</Text>
      </View>

      <View style={styles.dataTable}>
        <Text style={styles.itemsLabel}>ITEMS</Text>
        {data?.items.map(renderItem)}
        {data?.status === LaundryJobStatus.Pending && (
          <Button
            {...generateTestId('DetailsButton')}
            isLoading={isLoading}
            disabled={isLoading}
            onPress={onCancel}>
            Cancel
          </Button>
        )}
        {data?.status === LaundryJobStatus.Finished && (
          <Button
            {...generateTestId('DetailsButton')}
            isLoading={isLoading}
            disabled={isLoading}
            onPress={onCancel}>
            Pay
          </Button>
        )}
      </View>
    </View>
  );
};

export default DetailsContainer;
