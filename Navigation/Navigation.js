import react from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ConferenceScreen from '../screens/ConferenceScreen';

import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options= {{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options= {{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MyTab} 
        options= {{headerShown: false}}
      />
      <Stack.Screen
        name="Conference"
        component={ConferenceScreen}
        options= {{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{tabBarActiveTintColor: '#ef6c00'}}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options= {{
          tabBarLabel:'Ubicación',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map-marker" size={24} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options= {{
          tabBarLabel:'Inicio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="beer" size={24} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen} 
        options= {{
          tabBarLabel:'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
};
