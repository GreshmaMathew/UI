import  React,{Component} from 'react';
import { View, Text ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class Second extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
        <Text>hiiiii</Text>
       </View>
        );
    }
}