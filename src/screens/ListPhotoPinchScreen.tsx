import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';

type Props = BottomTabScreenProps<TabParamList, 'ListPhotoPinchScreen'>;

const ListPhotoPinchScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>ListPhotoPinchScreen</Text>
    </View>
  );
};

export default ListPhotoPinchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
