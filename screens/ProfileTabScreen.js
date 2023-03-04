import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const ProfileTabScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Tài khoản của tôi',
          headerTintColor: '#1FB7B7',
        }}
      />
    </Stack.Navigator>

  );
};

export default ProfileTabScreen;