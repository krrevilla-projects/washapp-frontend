import {useUserLaundryJob} from '@laundry-app/shared';
import {LaundryJobResponse} from '@laundry-app/shared/openapi';
import LaundryCard from '@mobile/components/LaundryCard';
import Routes from '@mobile/config/routes';
import type {AuthedStackParamList} from '@mobile/containers';
import {generateTestId} from '@mobile/utils/helpers';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'native-base';
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';

import {useDashboardStyle} from './Dashboard.styles';
import DashboardEmpty from './DashboardEmpty';

type Props = NativeStackScreenProps<AuthedStackParamList, Routes.Dashboard>;

const keyExtractor = (item: LaundryJobResponse) => `${item.id}`;

const DashboardContainer: React.FC<Props> = ({navigation: {navigate}}) => {
  const styles = useDashboardStyle();
  const {data, isFetching, refetch} = useUserLaundryJob();

  const onLaundryCardPress = useCallback(
    (laundryJobData: LaundryJobResponse) => {
      navigate(Routes.Details, {
        id: laundryJobData.id,
        preData: laundryJobData,
      });
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: {item: LaundryJobResponse}) => {
      return <LaundryCard data={item} onPress={onLaundryCardPress} />;
    },
    [onLaundryCardPress],
  );

  if (data?.length === 0 && !isFetching) {
    return <DashboardEmpty />;
  }

  return (
    <View
      {...generateTestId('DashboardContainer')}
      style={styles.rootContainer}>
      <Text style={styles.historyLabel}>Transaction History</Text>
      <FlatList
        refreshing={false}
        onRefresh={refetch}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default DashboardContainer;
