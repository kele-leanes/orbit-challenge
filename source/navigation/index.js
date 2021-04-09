import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pilots, Ships, PilotDetails, ShipDetails } from '../screens';
import { Theme } from '../constants';

import { PilotState } from '../contexts/Pilot/PilotState';
import { ShipState } from '../contexts/Ship/ShipState';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 130 }}
      source={require('../assets/images/logo.png')}
      resizeMode={'contain'}
    />
  );
}

const options = {
  headerTitle: props => <LogoTitle {...props} />,
  headerStyle: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    height: 220,
    shadowOffset: { height: 0, width: 0 },
  },
};

const detailsOptions = {
  headerStyle: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    shadowOffset: { height: 0, width: 0 },
  },
  headerTintColor: Theme.COLORS.PRIMARY,
};

export const PilotsNav = () => {
  return (
    <PilotState>
      <Stack.Navigator mode={'modal'}>
        <Stack.Screen name="Pilots" component={Pilots} options={options} />
        <Stack.Screen
          name="Pilot Details"
          component={PilotDetails}
          options={detailsOptions}
        />
      </Stack.Navigator>
    </PilotState>
  );
};

export const ShipsNav = () => {
  return (
    <ShipState>
      <Stack.Navigator mode={'modal'}>
        <Stack.Screen name="Ships" component={Ships} options={options} />
        <Stack.Screen
          name="Ship Details"
          component={ShipDetails}
          options={detailsOptions}
        />
      </Stack.Navigator>
    </ShipState>
  );
};
