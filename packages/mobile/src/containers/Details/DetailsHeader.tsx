import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Text} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDetailHeaderStyles} from './Details.styles';

const DetailsHeader = ({navigation}: NativeStackHeaderProps) => {
  const styles = useDetailHeaderStyles();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Icon
        name="arrow-back"
        style={styles.backIcon}
        onPress={navigation.goBack}
      />
      <Text style={styles.headerLabel}>Details</Text>
    </SafeAreaView>
  );
};

export default React.memo(DetailsHeader);
