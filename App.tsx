// In App.js in a new project

import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather, MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';

import TopBarNavigation from './navigation/TopBarNavigation';
import ChatRoom from './screens/Tabs/ChatRoom';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="TopBar"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#34B7F1',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: 'bold',
      }}
      
      >
        <Stack.Screen 
          name="TopBar" 
          component={TopBarNavigation}
          options={{
            title: 'WhatsApp',
            headerRight: () => (
              <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 80,
                paddingRight: 10,
              }}
              >
                <Feather name="search" size={24} color="white" />                
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
              </View>
            )
          }} 
          />
        <Stack.Screen 
          name="ChatRoom" 
          component={ChatRoom}
          options={({ route }) => ({ title: route.params.name, 
          
            headerRight: () => (
              <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 140,
                paddingRight: 10,
              }}
              >
                <Feather name="video" size={24} color="white" />
                <MaterialIcons name="call" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
              </View>
            )
          
          })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;