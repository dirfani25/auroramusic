import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import splashscreen from 'react-native-splash-screen';

import OnboardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();


const App = ()=> {

  
  React.useEffect(() => {
    splashscreen.hide()
  }, [])

    return (
      
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"           
            >
                <Stack.Screen name ="Onboarding" component ={OnboardingScreen}/>
                <Stack.Screen name ="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;