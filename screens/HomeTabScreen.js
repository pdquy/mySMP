import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ClassroomManagementScreen from './ClassroomManagementScreen';
import WeekCalendarScreen from './WeekCalendarScreen';
import HomeScreen from './HomeScreen';
import LibraryPortScreen from './LibraryPortScreen';
import ElearningPortScreen from './ElearningPortScreen';
import TeacherPortScreen from './TeacherPortScreen';
import StudentPortScreen from './StudentPortScreen';

const Stack = createStackNavigator();

const HomeTabScreen = ({ navigation }) => {
  return (
    <Stack.Navigator

    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'SMP của tôi',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="ClassroomManagement" 
        component={ClassroomManagementScreen} 
        options={{
          title: 'QUẢN LÝ PHÒNG HỌC',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="WeekCalendar" 
        component={WeekCalendarScreen} 
        options={{
          title: 'LỊCH CÔNG TÁC',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="LibraryPort" 
        component={LibraryPortScreen} 
        options={{
          title: 'CỔNG THƯ VIỆN',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="ElearningPort" 
        component={ElearningPortScreen} 
        options={{
          title: 'CỔNG E-LEARNING',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="StudentPort" 
        component={StudentPortScreen} 
        options={{
          title: 'CỔNG SINH VIÊN',
          headerTintColor: '#1FB7B7',
        }}
      />
      <Stack.Screen 
        name="TeacherPort" 
        component={TeacherPortScreen} 
        options={{
          title: 'CỔNG GIẢNG VIÊN',
          headerTintColor: '#1FB7B7',
        }}
      />
    </Stack.Navigator>

  );
};

export default HomeTabScreen;