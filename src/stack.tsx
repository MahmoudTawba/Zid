import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen, { IListItem } from './screens/list';
import { Item } from './screens/Item'

import { ThemeFont } from './components/typography';

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen: { item: IListItem };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ title: 'Items' }}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={Item}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.item.name,
        })}
      />
    </RootStack.Navigator>
  );
};


export default Stack;
