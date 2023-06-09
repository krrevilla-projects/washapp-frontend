import {colors} from '@laundry-app/shared/style';
import {generateTestId} from '@mobile/utils/helpers';
import {Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useItemStyle} from './Item.styles';

export interface ItemProps {
  name: string;
  quantity: number;
  itemPrice: number;
}

const Item: React.FC<ItemProps> = props => {
  const styles = useItemStyle();

  return (
    <View style={styles.listItem} {...generateTestId('Item')}>
      <View style={styles.iconContainer}>
        <Icon
          {...generateTestId('ItemIcon')}
          name="shopping-basket"
          color={colors.white}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.quantity}>Quantity: {props.quantity}</Text>
      </View>
      <View style={styles.totalItemPriceContainer}>
        <Text style={styles.totalPrice}>
          + {props.quantity * props.itemPrice} PHP
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Item);
