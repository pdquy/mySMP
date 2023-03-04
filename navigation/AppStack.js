import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeTabScreen from '../screens/HomeTabScreen';
import ProfileTabScreen from '../screens/ProfileTabScreen';

const Tab = createMaterialBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            activeColor="#ffffff"
            inactiveColor="#000066"
            barStyle={{ backgroundColor: '#1FB7B7' }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={HomeTabScreen} 
                options={{
                    tabBarLabel: 'My SMP',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="ProfileTab" 
                component={ProfileTabScreen} 
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppStack;