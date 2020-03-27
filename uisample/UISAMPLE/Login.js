import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import kk from '../Image/kk.png'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
export default class Login extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
        <View style={styles.Imagebcontainer}>
            <Text style={styles.textstyle}>Welcome to login page</Text>
            <View style={styles.container}>
            <TextInput
            style={styles.textinputstyle}
            placeholder='Username'
             />  
             </View>
             <View style={styles.container}>
             <TextInput
            style={styles.textinputstyle}
            placeholder='Password'
            secureTextEntry
             />  
            </View>
            
             <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnstyle} onPress={()=>navigate('TRAVEL')}>  
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity >
                        <TouchableOpacity style={styles.btnstyle} onPress={()=>navigate('REGISTRATION')}>  
                             <Text style={styles.buttontext}>New User</Text>
                        </TouchableOpacity>
             </View>
        </View>
        );
    }

}
const styles=StyleSheet.create({
    Imagebcontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1e90ff'
    },
    container:
    {
        alignItems:'center',
        justifyContent:'space-between',
    },
    textstyle:{
        fontSize:35,
        textAlign:'center',
        margin:10,
        color:'#fff',
        fontWeight:'bold'
    },
    textinputstyle:
    {
        width:250,
        height:45,
        backgroundColor:'#fff',
        fontSize:20,
        marginHorizontal:40,
        paddingLeft:20,
        borderRadius:25,   
        marginVertical:30,  
    },
    buttonContainer:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%',
    },
    btnstyle:
    {
        backgroundColor:'yellow',
        padding:15,
        width:120,
        height:40,
        borderRadius:25,
        alignItems:'center'

    },
    buttontext:
    {
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',

    },


});