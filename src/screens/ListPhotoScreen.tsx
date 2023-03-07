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
  Button,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';
import {ImageObj} from '../types/image';
import ModalCamera from '../components/ModalCamera';

type Props = BottomTabScreenProps<TabParamList, 'ListPhotoScreen'>;

const initialData: ImageObj[] = [
  {
    uri: 'https://cdn.pixabay.com/photo/2023/02/02/17/11/chickens-7763394_960_720.jpg',
    name: 'chickens-7763394_960_720',
    type: 'image/jpeg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_960_720.jpg',
    name: 'flowers-7790227_960_720',
    type: 'image/jpeg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794_960_720.jpg',
    name: 'castle-7766794_960_720',
    type: 'image/jpeg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_960_720.jpg',
    name: 'building-7782841_960_720',
    type: 'image/jpeg',
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2019/11/19/22/25/animal-4638681_960_720.jpg',
    name: 'animal-4638681_960_720',
    type: 'image/jpeg',
  },
];

const ListPhotoScreen = ({}: Props) => {
  const [data, setData] = useState(initialData);
  const [idx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCamera, setIsOpenCamera] = useState(false);

  const renderItem = useCallback<ListRenderItem<ImageObj>>(({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
          setIdx(index);
        }}>
        <Image
          source={{uri: item.uri}}
          resizeMode="cover"
          style={styles.containerList}
        />
      </TouchableOpacity>
    );
  }, []);

  const renderItemModal = useCallback<ListRenderItem<ImageObj>>(({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.uri}}
          resizeMode="contain"
          style={styles.containerListModal}
        />
      </View>
    );
  }, []);
  return (
    <>
      <Modal
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
        transparent
        statusBarTranslucent>
        <FlatList
          data={data}
          renderItem={renderItemModal}
          keyExtractor={item => item.uri}
          horizontal
          pagingEnabled
          initialScrollIndex={idx}
        />
      </Modal>
      <ModalCamera
        visible={isOpenCamera}
        onClose={() => setIsOpenCamera(false)}
        onFinish={img => setData(prev => [img, ...prev])}
      />
      <View>
        <Text>ListPhotoScreen</Text>
        <Button title="Add Photo" onPress={() => setIsOpenCamera(true)} />
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.uri}
            numColumns={4}
          />
        </View>
      </View>
    </>
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
