import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigation} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigation: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigation">
      <Stack.Screen name="AppTabNavigation" component={AppTabNavigation} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
