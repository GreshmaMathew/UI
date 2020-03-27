import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import v from '../Image/v.png';
import fs from '../Image/fs.png';
import g from '../Image/g.png'
import v10 from '../Image/v10.png'
import k from '../Image/k.png'
import e2 from '../Image/e2.png'
import e3 from '../Image/e3.png'
import e4 from '../Image/e4.png'
import tt from '../Image/tt.png'
import v12 from '../Image/v12.png'
import v13 from '../Image/v13.png'
import one from '../Image/one.png'
import rect from '../Image/rect.png'
import heart from '../Image/heart.png'
import ec42 from '../Image/ec42.png'
import circlast from '../Image/circlast.png'
import addto from '../Image/addto.png'



export default class Four extends Component
{
    render(){
        return(
            <View style={{backgroundColor:'#F7F8FA',width:414,height:896}}>
                <View style={{backgroundColor:'#F7F8FA',flex:3,flexDirection:'row'}}>
                <Image source={require('../Image/ec42.png')} style={styles.shadow}/>
                <Image source={require('../Image/v10.png')} style={styles.images}/>
                <Image source={require('../Image/k.png')} style={styles.imagestyle2}/>
                <Image source={require('../Image/fs.png')} style={styles.imagestyle1}/>
                <Image source={require('../Image/tt.png')} style={styles.chair}/> 
                <Image source={require('../Image/e2.png')} style={styles.vec1}/>  
                <Image source={require('../Image/e3.png')} style={styles.vec2}/>  
                <Image source={require('../Image/e4.png')} style={styles.vec3}/>  
                

                </View>
                <View style={{backgroundColor:'white',width:414,height:440,borderRadius:60}}>
                <Text style={styles.textstyle}>Eames Chair</Text> 
                <Image source={require('../Image/v13.png')} style={styles.star}/> 
                <Image source={require('../Image/v13.png')} style={styles.star1}/> 
                <Image source={require('../Image/v13.png')} style={styles.star2}/> 
                <Image source={require('../Image/v13.png')} style={styles.star3}/> 
                <Image source={require('../Image/v12.png')} style={styles.star4}/> 
                <Text style={styles.text1}>125 reviews</Text>
                <Text style={styles.text2}>$280</Text>
                <Text style={styles.text3}>Upholster Stylish Restaurant Chair. Modern design and good-quality.
                 Steel frame inside, molded foam sponge. High quality solid wood base.</Text>
                 <View style={{flexDirection:'row'}}>
                    <Text style={styles.text4}>Quantity</Text>
                    <Image source={require('../Image/one.png')} style={styles.dot1}/>
                    <Image source={require('../Image/one.png')} style={styles.dot2}/>
                    <Image source={require('../Image/one.png')} style={styles.dot3}/>
                    <Text style={styles.minus}>-</Text>
                    <Text style={styles.num}>23</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
                <View style={{flexDirection:'row'}}> 
                <Image source={require('../Image/heart.png')} style={styles.circlaststyle} />
                <Image source={require('../Image/rect.png')}  style={styles.rectstyle}/> 
                <Image source={require('../Image/addto.png')}  style={styles.addtostyle}/>    
                </View>
                </View>
               
            </View>
        );

    }
}

const styles=StyleSheet.create({
    circlaststyle:
    {   
        position:'absolute',
        top:245,
        left:64,
        width:26,
        height:23,

    },
    rectstyle:
    {   
        position:'absolute',
        top:225,
        left:110,
        width:270,
        height:70,
    },
    addtostyle:{
        position:'absolute',
        top:247,
        left:160,
        width:170,
        height:17,

    },
    shadow:
    {
        position:'absolute',
        top:-151,
        left:160 ,
        height:430,
        width:430,
    },
    shop:{
        position:'absolute',
        top:570,
        left:140,

    },
    textstyle1:{
        position:'absolute',
        top:570,
        left:200,
        fontSize:15,
        color:'white'

    },

    heartstyle:{
        position:'absolute',
        top:575,
        left:45,
    },
    plus:{
        fontWeight:'600',
        top:210,
        left:300,
        fontSize:15
    },
    minus:{
        fontWeight:'600',
        top:210,
        left:266,
        fontSize:15
    },
    num:{
        fontWeight:'600',
        top:212,
        left:285,
        fontSize:12
    },
    dot1:
    {
        position:'absolute',
       height:110,
       width:100,
        top:170,
        left:218
    },
    dot2:
    {
        position:'absolute',
        height:150,
       width:150,
        top:152,
        left:222
    },
    dot3:
    {
        height:110,
       width:100,
        position:'absolute',
        top:170,
        left:275
    },
    text1:{
        fontSize:13,
        color:'#A9A9A9',
        position:'absolute',
        top:88,
        left:135

    },
    text2:{
        fontSize:15,
        color:'#000',
        position:'absolute',
        top:87,
        left:315,
        fontWeight:'700'

    },
    text3:{
        fontSize:15,
        position:'absolute',
        top:125,
        width:280,
        height:120,
        left:50
    },
    text4:{
        fontSize:15,
        position:'absolute',
        top:210,
        left:50,
        width:65,
        height:26,
        color:'#A9A9A9'
    },
    
    
    star:{
        position:'absolute',
        top:91.93,
        height:11.06,
        width:11.58,
        left:51.21
    },
    star1:{
        position:'absolute',
        top:91.93,
        height:11.06,
        width:11.58,   
        left:66.12
    },
    star2:{
        position:'absolute',
        top:91.93,
        height:11.06,
        width:11.58,  
        left:81.12
    },
    star3:{
        position:'absolute',
        top:91.93,
        height:11.06,
        width:11.58,  
        left:95.21
    },
    star4:{
        position:'absolute',
        top:91.93,
        height:11.06,
        width:11.58,  
       
        left:110.21
    },
    textstyle:{
        fontSize:30,
        fontWeight:'500',
        position: 'absolute',
        top:38,
        left:47,
        width:191,
        height:45,
        fontFamily:'poppins_ebi'
    },
    rec:{
        position: 'absolute',
        width: 415,
        height: 310,
        left: 5,
        top:355,    

    },
        conatiner:{
            backgroundColor:'#F7F8FA',
        },
        imagestyle2:
        {
            position: 'absolute',
            width: 15,
            height: 10,
            left: 360,
            top:72,           
        },
        imagestyle1:
        {
            position: 'absolute',
            width: 27,
            height: 25,
            left: 350,
            top:72,           
        },
        images:{
            position: 'absolute',
            width: 8,
            height: 16,
            top:72,
            left:51
        },
        chair:
        {
            position: 'absolute',
            width: 380,
            height: 320,
            top:114,
            left:30
        },
        vec1:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:170,
            left:57
        },
        vec2:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:190,
            left:57
        },
        vec3:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:210,
            left:57
        },
        

});