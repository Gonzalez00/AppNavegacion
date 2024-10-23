import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';


import Home from './Screens/Home';
import Setting from './Screens/Setting';
import Users from './Screens/Users';


// Crear Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActivateTintColor: '#0092FF',
        headerStyle: {
          backgroundColor: '#00FFBC',
        },
      }}
      >

      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
          
        }}
      />
     
      <Tab.Screen
        name='Setting'
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Users'
        component= {Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

