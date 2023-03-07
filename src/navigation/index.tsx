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

const Tab = createBottomTabNavigator<TabParamList>();

const Navigation = () => {
  useGetPermission();
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
