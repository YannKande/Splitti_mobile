import { createContext, useContext } from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen1 from '../screens/ChatScreen1';
import RegisterScreen from '../screens/RegisterScreen';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
          <Stack.Screen
            name="Splash Screen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
      
          <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          <>
            <Stack.Screen
              name="ChatScreen1"
              component={ChatScreen1}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
