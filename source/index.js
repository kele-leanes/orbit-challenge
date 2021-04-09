import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PilotsNav, ShipsNav } from './navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme } from './constants';

const Tab = createBottomTabNavigator();

const options = {
  style: {
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  activeTintColor: Theme.COLORS.PRIMARY,
  inactiveTintColor: Theme.COLORS.SECONDARY,
};

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={options}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Pilots') {
              iconName = 'account';
            } else if (route.name === 'Ships') {
              iconName = 'death-star';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Pilots" component={PilotsNav} />
        <Tab.Screen name="Ships" component={ShipsNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
