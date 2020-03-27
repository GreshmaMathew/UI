import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import aaa from '../Image/aaa.png'

export default class Imageback extends Component{
    render(){
        return(
            <View style={styles.container}>
                 <ImageBackground style={styles.imagestyle} source={require('../Image/aaa.png')}> 
                </ImageBackground>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:
    {
        paddingTop:20,
       
    },
    imagestyle:
    {
        height:300,
        width:400,
        borderRadius:20,
    }
});