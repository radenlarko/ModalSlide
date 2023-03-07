import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';

interface Data {
  label: string;
  value: string;
  color: string;
}

const data: Data[] = [
  {
    label: 'data 1',
    value: 'value 1',
    color: 'red',
  },
  {
    label: 'data 2',
    value: 'value 2',
    color: 'gray',
  },
  {
    label: 'data 3',
    value: 'value 3',
    color: 'green',
  },
  {
    label: 'data 4',
    value: 'value 4',
    color: 'blue',
  },
  {
    label: 'data 5',
    value: 'value 5',
    color: 'yellow',
  },
];

const ListCardScreen = () => {
  const [idx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const renderItem = useCallback<ListRenderItem<Data>>(({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
          setIdx(index);
        }}
        style={[styles.containerList, {backgroundColor: item.color}]}>
        <Text>{item.label}</Text>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    );
  }, []);

  const renderItemModal = useCallback<ListRenderItem<Data>>(({item}) => {
    return (
      <View style={[styles.containerListModal, {backgroundColor: item.color}]}>
        <Text>{item.label}</Text>
        <Text>{item.value}</Text>
      </View>
    );
  }, []);
  return (
    <View>
      <Modal
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
        transparent
        statusBarTranslucent>
        <FlatList
          data={data}
          renderItem={renderItemModal}
          keyExtractor={item => item.value}
          horizontal
          pagingEnabled
          initialScrollIndex={idx}
        />
      </Modal>
      <Text>ListCardScreen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.value}
        horizontal
      />
    </View>
  );
};

export default ListCardScreen;

const styles = StyleSheet.create({
  containerList: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerListModal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
