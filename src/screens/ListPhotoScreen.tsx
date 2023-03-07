import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';

type Props = BottomTabScreenProps<TabParamList, 'ListPhotoScreen'>;

const ListPhotoScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>ListPhotoScreen</Text>
    </View>
  );
};

export default ListPhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
