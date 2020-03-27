import * as React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import PeopleStore from './src/store/peopleStore';
import PeopleList1 from './src/components/PeopleList1';
import AppContainer1 from './src/container/AppContainer1'

function First({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',alignSelf:'stretch',backgroundColor:'#FFFF'}}>
      <Button title="GO TO DETAILS"  onPress={ () => {navigation.navigate('PEOPLESTORE')}}/>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FIRST" component={First} options={{
        title:"Employee Details",
        headerStyle: {
            backgroundColor: '#ADD8E6',
          },
          headerTintColor: '#000000',
          headerTitleStyle:
           {
            fontWeight: 'bold',
            alignSelf:'center',
              
        }, 
    }}/>
      <Stack.Screen name="PEOPLESTORE" component={PeopleStore} options={{
        title:"Employee ID and Employee name",
        headerStyle: {
            backgroundColor: '#ADD8E6',
          },
          headerTintColor: '#000000',
          headerTitleStyle:
           {
            fontWeight: 'bold',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center'   
        }, 
    }}/>
    <Stack.Screen name="APPCONTAINER1" component={AppContainer1} options={{
        title:"Employee ID and Employee name",
        headerStyle: {
            backgroundColor: '#ADD8E6',
          },
          headerTintColor: '#000000',
          headerTitleStyle:
           {
            fontWeight: 'bold',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center'   
        }, 
    }}/>
  
 </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


