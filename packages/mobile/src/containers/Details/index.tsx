import {useLaundryJob, useLaundryJobUpdateStatus} from '@laundry-app/shared';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import Item from '@mobile/components/Item';
import Routes from '@mobile/config/routes';
import type {AuthedStackParamList} from '@mobile/containers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';

import {useDetailStyles} from './Details.styles';

type Props = NativeStackScreenProps<AuthedStackParamList, Routes.Details>;

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
        {data?.items.map(item => (
          <Item
            key={item.id}
            name={item.item.name}
            itemPrice={item.item.price}
            quantity={item.quantity}
          />
        ))}
        {data?.status === LaundryJobStatus.Pending && (
          <Button isLoading={isLoading} disabled={isLoading} onPress={onCancel}>
            Cancel
          </Button>
        )}
        {data?.status === LaundryJobStatus.Finished && (
          <Button isLoading={isLoading} disabled={isLoading} onPress={onCancel}>
            Pay
          </Button>
        )}
      </View>
    </View>
  );
};

export default DetailsContainer;
