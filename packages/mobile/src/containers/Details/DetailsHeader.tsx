import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDetailHeaderStyles} from './Details.styles';

const DetailsHeader = ({navigation}: NativeStackHeaderProps) => {
  const styles = useDetailHeaderStyles();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Icon
        name="arrow-back"
        iconStyle={styles.backIcon}
        onPress={navigation.goBack}
      />
      <Text style={styles.headerLabel}>Details</Text>
    </SafeAreaView>
  );
};

export default React.memo(DetailsHeader);
