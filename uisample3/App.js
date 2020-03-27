import  React from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Welcome from './NEWS/Welcome'
import Imageback from './NEWS/Imageback'
import Latest from './NEWS/Latest'
import Music from './NEWS/Music'
import { ScrollView } from 'react-native-gesture-handler';
import Newsfile from './NEWS/Newsfile'; 
function App() {
  return (
  <ScrollView>
    <View style={{flex:1,padding:5}}>
      <View>
      <Welcome/>
      <Imageback/>
      <Latest/>
      </View>  
      <View>
        <Text style={{paddingTop:10,fontWeight:'bold',fontSize:25}}>Monday</Text>
      </View>
      <Music/>
      <Newsfile/>

    </View>
    </ScrollView>
    
  );
}
export default App;


