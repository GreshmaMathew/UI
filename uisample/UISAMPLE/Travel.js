import  React,{Component} from 'react';
import { View, Text ,Button,StyleSheet,Image,ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar,Header } from 'react-native-elements';
import home from '../Image/home.png'
import food from '../Image/food.png'
import transport from '../Image/transport.png'
import kk from '../Image/kk.png'
import flight from '../Image/flight.png'
import beach from '../Image/beach.png'
import forest from '../Image/forest.png'
import mountain from '../Image/mountain.png'
import aaa from '../Image/aaa.png'


export default class Travel extends Component{
    render(){
  
        const {navigate} = this.props.navigation;
        return(
          <View>
            <View>
            <Header
            leftComponent={{ icon: 'menu', color: 'white' }}
            centerComponent={{ text: 'HOME PAGE', style: { color: 'white',fontWeight:'bold',fontSize:40 } }}
            rightComponent={{ icon: 'home', color: 'white' }}
            />
            
          
          </View>
          <View>
            <Text style={{color:'blue',fontSize:30,paddingVertical:20}}>Hello! Miss Rosy hacks</Text>
            <Text style={{fontSize:20,fontWeight:'bold',paddingVertical:20}}>What are you looking for?</Text>
          </View>
          <View>
          <SearchBar
    inputStyle={{backgroundColor: 'white'}}
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
    placeholderTextColor={'black'}
    placeholder={'Search here....'}
/>
          </View>
           <Text style={{fontSize:18,fontWeight:'bold',paddingVertical:20}}>Quick Actions</Text>
              <View style={styles.iconcontainer}>
                   <View>
                   <Image
                    source={require('../Image/home.png')} style={styles.ImageStyle} />
                    <Text style={styles.textstyle}>HOME</Text>
                  </View>
                  <View>
                  <Image
                    source={require('../Image/food.png')} style={styles.ImageStyle} />
                    <Text style={styles.textstyle}>FOOD</Text>
                  </View>
                  <View>
                  <Image
                    source={require('../Image/transport.png')} style={styles.ImageStyle} />
                    <Text style={styles.textstyle}>TRANSPORT</Text>
                  </View>
                  <View>
                  <Image
                    source={require('../Image/flight.png')} style={styles.ImageStyle} />
                    <Text style={styles.textstyle}>FLIGHT</Text>
                  </View>
                 
                  
               </View>
               <View>
                  <Text style={{fontSize:25,fontWeight:'bold',paddingTop:20}}>Destinations</Text>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                  <Image source={require('../Image/beach.png')} style={styles.Imagestyle1} />
                  <Image source={require('../Image/mountain.png')} style={styles.Imagestyle1} />
                  <Image source={require('../Image/forest.png')} style={styles.Imagestyle1} />
                  <Image source={require('../Image/beach.png')} style={styles.Imagestyle1} />
                  <Image source={require('../Image/mountain.png')} style={styles.Imagestyle1} />
                  <Image source={require('../Image/aaa.png')} style={styles.Imagestyle1} />
                     
                </ScrollView>
        
            </View>
            
        );
    }
}
const styles=StyleSheet.create({
  iconcontainer:
  {
    flexDirection:'row',
  },
  ImageStyle: {
    paddingVertical: 25,
    paddingHorizontal:25,
    margin: 5,
    height: 60,
    width: 60,
    alignItems: 'center',

  },
  textstyle:
  {
    fontWeight:'bold',
    fontSize:13,
    alignSelf:'center'
  },
  Imagestyle1:
  {
    paddingVertical: 70,
    paddingHorizontal:70,
    margin: 5,
    height: 50,
    width: 50,
    alignItems: 'center',
    paddingBottom:30
  },


});