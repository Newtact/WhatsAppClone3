import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import ChatScreen from '../screens/Tabs/ChatScreen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
  return (
   
      <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
          activeTintColor: "#fff",
          style: {
            backgroundColor: '#34B7F1',
          },
          indicatorStyle: {
              backgroundColor: "#fff",
              height: 4,
          },
          labelStyle: {
              fontWeight: 'bold',
          },
          showIcon: true,
          
      }}
      >
        <Tab.Screen name="Camera" component={HomeScreen} 
            options={{
                tabBarIcon: () => <Feather name="camera" size={24} color="white" />,
                tabBarLabel: () => null,
            }}
        />
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={SettingsScreen} />
        <Tab.Screen name="Calls" component={ProfileScreen} />
      </Tab.Navigator>
    
  );
}

