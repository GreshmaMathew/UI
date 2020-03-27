import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import kk from '../Image/kk.png'

export default class Welcome extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textinputstyle}>News updates</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:
    {
        backgroundColor:'#00FFFF',
        borderRadius:20,
    },
    textinputstyle:
    {
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
});