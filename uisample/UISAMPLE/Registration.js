import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import kk from '../Image/kk.png'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

export default class Registration extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
        <View style={styles.Imagebcontainer}>
            <Text style={styles.textstyle}>Registration details</Text>
            <Text style={styles.textstyle}>Enter details</Text>
            <View style={styles.textareastyle}>
            <TextInput
            style={styles.textinputstyle}
            placeholder='Username:'
             />
             <TextInput
            style={styles.textinputstyle}
            placeholder='EmailID:'
             />
              <TextInput
            style={styles.textinputstyle}
            placeholder='Password:'
            secureTextEntry
             />
                <TextInput
            style={styles.textinputstyle}
            placeholder='Confirm Password:'
            secureTextEntry
             />
             </View>
             <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnstyle}>  
                    <Text style={styles.buttontext}>Register</Text>
                </TouchableOpacity >
                        <TouchableOpacity style={styles.btnstyle} onPress={()=>navigate('LOGIN')}>  
                             <Text style={styles.buttontext}>Login</Text>
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
        width:300,
        height:45,
        backgroundColor:'#fff',
        fontSize:20,
        marginHorizontal:40,
        paddingLeft:20,
        borderRadius:25,
        marginVertical:20
    },
    buttonContainer:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
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
        fontWeight:'bold'
    },
    textareastyle:
    {
        justifyContent:'space-between'
    }


});