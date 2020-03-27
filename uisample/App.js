import * as React from 'react';
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './UISAMPLE/Travel'
import Second from './UISAMPLE/Second'
import Login from './UISAMPLE/Login'
import Registration from './UISAMPLE/Registration'
import Travel from './UISAMPLE/Travel'

const Stack = createStackNavigator();
function First1({navigation}) {
  return (
    <View style={styles.container}>
        <View>
            <ImageBackground source={require('./Image/abc.png')} style={styles.imagestyle}>
                    <Text style={styles.textstyle}>EXPLORE THE WORLD</Text>
                       <Text style={styles.textstyle1}>We will help you to find the best adventures </Text>
                          <TouchableOpacity onPress = {() => {navigation.navigate('LOGIN')}}>
                              <View style = {styles.buttonstyle} >
                                  <Text style = {styles.textstyle2}>Let's get started</Text>
                               </View>
                        </TouchableOpacity>
            </ImageBackground>  
      </View>
     
       
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='FIRST1' component={First1} />
        <Stack.Screen name="FIRST" component={First} />
        <Stack.Screen name="TRAVEL" component={Travel} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="REGISTRATION" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,  
    justifyContent:'space-between',
  },
  textstyle: {
    fontSize:25,
    alignSelf:'center',
    color:'#9932CC',
    marginTop:500,
    fontWeight:'bold',
  },
  textstyle1: {
    fontWeight:'bold',
    color:'#9932CC',
    fontSize:20,
    paddingLeft:5,
    paddingBottom:30,
  },
  imagestyle:
  {
    width: '100%',
     height: '100%'
  },
  buttonstyle:
  {
    backgroundColor: '#9932CC', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 15

  },
  textstyle2:
  {
    color: 'black',
    fontWeight:'bold',
    fontSize:23

  }

});
export default App;