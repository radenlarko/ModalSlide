import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';

type Props = BottomTabScreenProps<TabParamList, 'ListPhotoScreen'>;

interface Data {
  url: string;
}

const data: Data[] = [
  {
    url: 'https://cdn.pixabay.com/photo/2023/02/02/17/11/chickens-7763394_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/11/19/22/25/animal-4638681_960_720.jpg',
  },
];

const ListPhotoScreen = ({}: Props) => {
  const [idx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const renderItem = useCallback<ListRenderItem<Data>>(({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
          setIdx(index);
        }}>
        <Image
          source={{uri: item.url}}
          resizeMode="cover"
          style={styles.containerList}
        />
      </TouchableOpacity>
    );
  }, []);

  const renderItemModal = useCallback<ListRenderItem<Data>>(({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.url}}
          resizeMode="contain"
          style={styles.containerListModal}
        />
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
          keyExtractor={item => item.url}
          horizontal
          pagingEnabled
          initialScrollIndex={idx}
        />
      </Modal>
      <Text>ListPhotoScreen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        horizontal
      />
    </View>
  );
};

export default ListPhotoScreen;

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
  },
  containerListModal: {
    backgroundColor: 'black',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
