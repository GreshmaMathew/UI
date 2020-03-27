import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Headerfile from './UIsam/Headerfile'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="HEADERFILE" component={Headerfile}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
