import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../types';
import {
  ListCardScreen,
  ListPhotoPinchScreen,
  ListPhotoScreen,
} from '../screens';
import useGetPermission from '../hooks/useGetPermission';
import useCreateChannelNotif from '../hooks/useCreateChannelNotif';

const Tab = createBottomTabNavigator<TabParamList>();

const Navigation = () => {
  const {createChannel} = useCreateChannelNotif();

  useGetPermission({
    onFinish: async () => {
      await createChannel();
    },
  });
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ListCardScreen" component={ListCardScreen} />
        <Tab.Screen name="ListPhotoScreen" component={ListPhotoScreen} />
        <Tab.Screen
          name="ListPhotoPinchScreen"
          component={ListPhotoPinchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
