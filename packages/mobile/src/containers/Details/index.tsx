import {useLaundryJob, useLaundryJobUpdateStatus} from '@laundry-app/shared';
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Routes from '../../config/routes';
import {AuthedStackParamList} from '../Navigation';

import {useDetailStyles} from './Details.styles';
import Item from '../../components/Item';
import {Button} from '@rneui/themed';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';

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
          <Button
            loading={isLoading}
            disabled={isLoading}
            onPress={onCancel}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}>
            Cancel
          </Button>
        )}
        {data?.status === LaundryJobStatus.Finished && (
          <Button
            loading={isLoading}
            disabled={isLoading}
            onPress={onCancel}
            containerStyle={styles.buttonContainerStyle}>
            Pay
          </Button>
        )}
      </View>
    </View>
  );
};

export default DetailsContainer;
