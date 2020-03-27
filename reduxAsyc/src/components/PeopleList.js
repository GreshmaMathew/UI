import React,{Component} from 'react';
import {StyleSheet,FlatList,Text,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class PeopleList extends Component{
_keyExtractor = item => item.id;
_renderItem = ({item}) => {
    const {id,employee_name,employee_salary} =item;
    return(
    /*    <View>
            <Text style={{fontWeight:'bold',paddingLeft:150}}> {id}{"\n"}{employee_name}</Text>
        </View>*/
            
                 <View style={styles.Flatlistcontainer}>
                    <View  style={{  flex: 2, flexDirection: 'row'}}>
                        <Text style={{fontSize: 18,fontWeight:'bold',alignItems:'center'}}>{id }</Text>
                        <Text style={{fontSize: 18,fontWeight:'bold',paddingLeft:70}}>{employee_name}</Text>
                    </View>
               </View>         
          
    );
};
render(){
  const { navigate } = this.props.navigation;
    return(
 <View style={{flex:1}}>
        <View style={{flex:1}}>
            <FlatList  
            style={{flex:1}}
            data={this.props.people}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}  
                />   
        </View>
        <View style={{backgroundColor:'green'}}>
        <Button title="NEXT" onPress={ () => {navigation.navigate('APPCONTAINER1')}}></Button>     
        </View>       
  </View>       
    )
}

}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      Flatlistcontainer: {
        flex: 5,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: 'bold',
      },
      ai: {
        flex: 5,
        justifyContent: 'center',
        padding: 30,
        paddingTop: 30,
      },
      news: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#CD5C5C',
        justifyContent: 'center',
      },

});