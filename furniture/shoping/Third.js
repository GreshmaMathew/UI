import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import v from '../Image/v.png';
import g from '../Image/g.png'
import k from '../Image/k.png'
import o from '../Image/o.png'
import rec from '../Image/rec.png'
import kk from '../Image/kk.png'
import ff from '../Image/ff.png'
import e1 from '../Image/e1.png'
import e2 from '../Image/e2.png'
import e3 from '../Image/e3.png'
import e4 from '../Image/e4.png'
import tt from '../Image/tt.png'
import jj from '../Image/jj.png'
import home from '../Image/home.png'
import account from '../Image/account.png'
import shop from '../Image/shop.png'
import ec from '../Image/shop.png'
import gp from '../Image/shop.png'
import plus from '../Image/plus.png'
import fs from '../Image/fs.png'


export default class Third extends Component
{
    render(){
        return(  
            <View style={{backgroundColor:'#E5E5E5',flex:1}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../Image/v.png')} style={styles.imagestyle}/>
                <Image source={require('../Image/fs.png')} style={styles.imagestyle1}/>
                <Image source={require('../Image/k.png')} style={styles.imagestyle2}/>
                </View>
                <View>
                <Text style={styles.textstyle1}>Our Products</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                         <Text style={styles.textstyle2}>ALL</Text>
                         <Text style={styles.textstyle3}>FURNITURE</Text>
                         <Text style={styles.textstyle4}>SHOES</Text> 
                         <Text style={styles.textstyle5}>HODDIE</Text>
                         <Text style={styles.textstyle6}>ACCESORIES</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                     <Image source={require('../Image/rec.png')} style={styles.recbox}/>
                     <Image source={require('../Image/ff.png')} style={styles.chairbox}/>
                     <Image source={require('../Image/e1.png')} style={styles.vector1}/>
                     <Image source={require('../Image/e2.png')} style={styles.vector2}/>
                     <Image source={require('../Image/e3.png')} style={styles.vector3}/>
                     <Image source={require('../Image/ec.png')} style={styles.circle1} />
                     <Text style={styles.plus1}>+</Text>
                     <Text style={styles.textstyle7}>Dining Chair</Text>
                     <Text style={styles.textstyle11}>$280</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                     <Image source={require('../Image/rec.png')} style={styles.recbox1}/>
                     <Image source={require('../Image/kk.png')} style={styles.chairbox1}/> 
                     <Image source={require('../Image/e4.png')} style={styles.vector4}/> 
                     <Text style={styles.textstyle8}>Dining Chair</Text>
                     <Text style={styles.textstyle12}>$280</Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                     <Image source={require('../Image/rec.png')} style={styles.recbox2}/>
                     <Image source={require('../Image/jj.png')} style={styles.chairbox2}/>
                     <Image source={require('../Image/e2.png')} style={styles.vector22}/>
                    <Image source={require('../Image/e3.png')} style={styles.vector33}/>
                     <Image source={require('../Image/e1.png')} style={styles.vector11}/>
                     <Image source={require('../Image/ec.png')} style={styles.circle2} />
                     <Text style={styles.plus2}>+</Text>
                     <Text style={styles.textstyle9}>Elegand Chair</Text>
                     <Text style={styles.textstyle13}>$280</Text>
            
                     <Image source={require('../Image/rec.png')} style={styles.recbox3}/> 
                     <Image source={require('../Image/tt.png')} style={styles.chairbox3}/>
                     
                <Image source={require('../Image/e4.png')} style={styles.vector44}/>
                <Image source={require('../Image/e3.png')} style={styles.vector333}/>
                <Image source={require('../Image/e2.png')} style={styles.vector222}/> 
                <Image source={require('../Image/ec.png')} style={styles.circle3} />
                     <Text style={styles.plus3}>+</Text>
                <Text style={styles.textstyle10}>Eames Chair</Text>
                <Text style={styles.textstyle14}>$280</Text> 
                <Image source={require('../Image/ec.png')} style={styles.circle4} />
                     <Text style={styles.plus4}>+</Text> 
                 
                     </View>
                     <View>
                     <Image source={require('../Image/tab.png')} style={styles.tabstyle}/>       
                     </View>
            </View>
        );
    };
}
const styles=StyleSheet.create({

    tabstyle:{
        position:'absolute',
        height:101,
        width:414,
        top:670,
        left:0,

    },
    imagestyle:{
        position:'absolute',
        height:11,
        width:24,
        top:77,
        left:52,
    },
    imagestyle1:{
        position:'absolute',
        height:24,
        width:24,
        top:70,
        left:333,
    },
    imagestyle2:{
        position:'absolute',
        height:12,
        width:12,
        top:69,
        left:350,
    },
    textstyle1:{
        position:'absolute',
        height:42,
        width:186,
        top:120,
        left:49,
        fontWeight:'bold',
        fontSize:28,
        
    },
    textstyle2:{
        position:'absolute',
        height:21,
        width:25,
        top:186,
        left:50,
        fontWeight:'500',
        fontSize:14,
        color:'#A1A3A5'
    },
    textstyle3:{
        position:'absolute',
        height:21,
        width:74,
        top:186,
        left:98,
        fontWeight:'500',
        fontSize:14,
        color:'#FF9938'
    },
    textstyle4:{
        position:'absolute',
        height:21,
        width:46,
        top:186,
        left:197,
        fontWeight:'500',
        fontSize:14,
        color:'#A1A3A5'
    },
    textstyle5:{
        position:'absolute',
        height:21,
        width:52,
        top:186,
        left:268,
        fontWeight:'500',
        fontSize:14,
        color:'#A1A3A5'
    },
    textstyle6:{
        position:'absolute',
        height:21,
        width:96,
        top:186,
        left:345,
        fontWeight:'500',
        fontSize:14,
        color:'#A1A3A5'
    },
    recbox:
    {   position:'absolute',
        height:260,
        width:216,
        left:10,
        top:220,
    },
    recbox1:
    {
        position:'absolute',
        height:260,
        width:216,
        top:220,
        left:210,

    },
    chairbox: {
        position:'absolute',
        height:150,
        width:158,
        top:210,
        left:18,
      
    },
    chairbox1: {
        position:'absolute',
        height:150,
        width:158,
        top:210,
        left:230,
      
    },
    chairbox2: {
        position:'absolute',
        height:118,
        width:118,
        top:450,
        left:50,
      
    },
    chairbox3: {
        position:'absolute',
        height:144,
        width:144,
        top:450,
        left:230,
      
    },
    recbox2:{
        position:'absolute',
        height:260,
        width:216,
        top:465,
        left:10,
    },
    recbox3:{
        position:'absolute',
        height:260,
        width:216,
        top:465,
        left:210,
    },
    vector1:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:372,
     left:48
 
    },
    vector11:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:610,
     left:64
 
    },
    vector22:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:610,
     left:80
 
    },
    vector222:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:615,
     left:286
 
    },
    vector2:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:372,
     left:65
 
    },
    vector33:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:610,
     left:48
 
    },
    vector3:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:372,
     left:82
 
    },
    vector4:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:372,
     left:250
 
    },
    vector44:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:615,
     left:250
 
    },
    vector333:
    {
     position: 'absolute',
     width: 12,
     height: 12,
     top:615,
     left:268
 
    },
    textstyle7:
    {
     position: 'absolute',
     top:387,
     left:47,
     fontWeight:'600',
     fontSize:15,
     height:23,
     width:95,
     color:'#6D6C6C'
      },
      textstyle8:
    {
     position: 'absolute',
     top:387,
     left:250,
     fontWeight:'600',
     fontSize:15,
     height:23,
     width:95,
     color:'#6D6C6C'
      },
      textstyle9:
      {
       position: 'absolute',
       top:624,
       left:47,
       fontWeight:'600',
       fontSize:15,
       height:23,
       width:95,
       color:'#6D6C6C'
        },textstyle10:
        {
         position: 'absolute',
         top:629,
         left:249,
         fontWeight:'600',
         fontSize:15,
         height:23,
         width:95,
         color:'#6D6C6C'
          },
          textstyle11:{
            position: 'absolute',
            top:406,
            left:47,
            fontWeight:'bold',
            fontSize:15,
            height:23,
            width:95,
            color:'#202329'
          },
          textstyle12:{
            position: 'absolute',
            top:407,
            left:250,
            fontWeight:'bold',
            fontSize:15,
            height:23,
            width:95,
            color:'#202329'
          },
          textstyle13:{
            position: 'absolute',
            top:643,
            left:47,
            fontWeight:'bold',
            fontSize:15,
            height:23,
            width:95,
            color:'#202329'
          },
          textstyle14:{
            position: 'absolute',
            top:648,
            left:249,
            fontWeight:'bold',
            fontSize:15,
            height:23,
            width:95,
            color:'#202329'
          },
          circle1:
          {
              position: 'absolute',
              width: 70,
              height:50 ,
              left:123,
              top: 390,  
          },
          plus1:
          {
              position: 'absolute',
              width: 40,
              height:40 ,
              left:150,
              top: 398,  
              color:'white'
            
          },
          circle2:
          {
              position: 'absolute',
              width: 70,
              height:50 ,
              left:330,
              top: 390,  
          },
          plus2:
          {
              position: 'absolute',
              width: 40,
              height:40 ,
              left:356,
              top: 398,  
              color:'white'
              
          },
          circle3:
          {
              position: 'absolute',
              width: 70,
              height:50 ,
              left:123,
              top: 627,  
          },
          plus3:
          {
              position: 'absolute',
              width: 40,
              height:40 ,
              left:149,
              top: 635, 
              color:'white' 
              
      
          },
          circle4:
          {
              position: 'absolute',
              width: 70,
              height:50 ,
              left:328,
              top: 628,  
          },
          plus4:
          {
              position: 'absolute',
              width: 40,
              height:40 ,
              left:355,
              top: 636,  
              color:'white'
            
      
          },
         




});