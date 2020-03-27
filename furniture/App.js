import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import First from '../furniture/shoping/First'
import Second from '../furniture/shoping/Second'
import Third from '../furniture/shoping/Third'
import Four from '../furniture/shoping/Four'
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="THIRD" component={Third}/>
        <Stack.Screen name="FOUR" component={Four}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;