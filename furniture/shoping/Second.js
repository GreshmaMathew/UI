import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import v from '../Image/v.png';
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


export default class First extends Component
{
    render(){
        return(
            <View style={styles.conatiner}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../Image/v10.png')} style={styles.images}/>
                <Image source={require('../Image/k.png')} style={styles.imagestyle2}/>
                <Image source={require('../Image/g.png')} style={styles.imagestyle1}/>
                
                </View>
                <View>
                <Image source={require('../Image/tt.png')} style={styles.chair}/>  
                <Image source={require('../Image/e2.png')} style={styles.vec1}/>  
                <Image source={require('../Image/e3.png')} style={styles.vec2}/>  
                <Image source={require('../Image/e4.png')} style={styles.vec3}/>  
                </View>
                <View>
                <Image source={require('../Image/rec1.png')} style={styles.rec}/>  
                  
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.textstyle}>Eames chair</Text> 
                <Image source={require('../Image/v13.png')} style={styles.star}/> 
                <Image source={require('../Image/v13.png')} style={styles.star1}/> 
                <Image source={require('../Image/v13.png')} style={styles.star2}/> 
                <Image source={require('../Image/v13.png')} style={styles.star3}/> 
                <Image source={require('../Image/v12.png')} style={styles.star4}/> 
                <Text style={styles.text1}>125 reviews</Text>
                <Text style={styles.text2}>$ 280</Text>
                </View>
                <View>
                    <Text style={styles.text3}>Upholster Stylish Restaurant Chair. Modern design and good-quality. Steel frame inside, molded foam sponge. High quality solid wood base.</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text4}>Quantity</Text>
                    <Image source={require('../Image/one.png')} style={styles.dot1}/>
                    <Image source={require('../Image/one.png')} style={styles.dot2}/>
                    <Image source={require('../Image/one.png')} style={styles.dot3}/>
                    <Text style={styles.minus}>-</Text>
                    <Text style={styles.num}>28</Text>
                    <Text style={styles.plus}>+</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../Image/rect.png')} style={styles.rectstyle}/>
                <Image source={require('../Image/heart.png')} style={styles.heartstyle}/>
                <Text style={styles.textstyle1}>Add to my cart</Text>
                <Image source={require('../Image/g.png')} style={styles.shop}/>

                </View>
            </View>
        );
    };
}
const styles=StyleSheet.create({
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
    rectstyle:{
        position:'absolute',
        top:540,
        left:70,

    },
    heartstyle:{
        position:'absolute',
        top:575,
        left:45,
    },
    plus:{
        fontWeight:'900',
        top:540,
        left:230,
        fontSize:15
    },
    minus:{
        fontWeight:'900',
        top:540,
        left:345,
        fontSize:15
    },
    num:{
        fontWeight:'900',
        top:540,
        left:287,
        fontSize:15
    },
    dot1:
    {
        position:'absolute',
        top:480,
        left:180
    },
    dot2:
    {
        position:'absolute',
        top:480,
        left:225
    },
    dot3:
    {
        position:'absolute',
        top:480,
        left:270
    },
    text1:{
        fontSize:13,
        color:'#A9A9A9',
        position:'absolute',
        top:418,
        left:150

    },
    text2:{
        fontSize:20,
        color:'#000',
        position:'absolute',
        top:414,
        left:338,
        fontWeight:'700'

    },
    text3:{
        fontSize:15,
        position:'absolute',
        top:460,
        width:320,
        height:380,
        left:60
    },
    text4:{
        fontSize:15,
        position:'absolute',
        top:540,
        left:60,
        color:'#A9A9A9'
    },
    
    
    star:{
        position:'absolute',
        top:420,
        height:12,
        left:60
    },
    star1:{
        position:'absolute',
        top:420,
        height:12,
        left:75
    },
    star2:{
        position:'absolute',
        top:420,
        height:12,
        left:90
    },
    star3:{
        position:'absolute',
        top:420,
        height:12,
        left:105
    },
    star4:{
        position:'absolute',
        top:420,
        height:12,
        left:120
    },
    textstyle:{
        fontSize:30,
        fontWeight:'500',
        position: 'absolute',
        top:370,
        left:60
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
            top:40,           
        },
        imagestyle1:
        {
            position: 'absolute',
            width: 27,
            height: 20,
            left: 350,
            top:40,           
        },
        images:{
            position: 'absolute',
            width: 15,
            height: 15,
            top:40,
            left:40
        },
        chair:
        {
            position: 'absolute',
            width: 250,
            height: 250,
            top:80,
            left:60
        },
        vec1:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:170,
            left:50
        },
        vec2:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:190,
            left:50
        },
        vec3:{
            position: 'absolute',
            width: 13,
            height: 13,
            top:210,
            left:50
        },
        

});