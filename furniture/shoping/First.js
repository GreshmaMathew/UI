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
import rectangle from '../Image/rectangle.png'
import plus from '../Image/plus.png'

import { ScrollView } from 'react-native-gesture-handler';


export default class First extends Component
{
    render(){
        const {navigate} = this.props.navigation;

        return(
            
                 <View style={styles.containerstyle}>
                     <View style={{flexDirection:'row'}}>
                         <Image source={require('../Image/v.png')} style={styles.imagestyle}/>
                        <Image source={require('../Image/g.png')} style={styles.imagestyle1}/>
                        <Image source={require('../Image/k.png')} style={styles.imagestyle2}/>
                     </View>
                        <View style={styles.containerstyle}>
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
                     <Image source={require('../Image/ff.png')} style={styles.chairbox2}/>
                     <Image source={require('../Image/e1.png')} style={styles.vector1}/>
                     <Image source={require('../Image/e2.png')} style={styles.vector2}/>
                     <Image source={require('../Image/e3.png')} style={styles.vector3}/>
                     <Image source={require('../Image/ec.png')} style={styles.circle1} />
                     <Text style={styles.plus1}>+</Text>
                     <Text style={styles.textstyle7}>Dining chair</Text>
                     <Text style={styles.textstyle8}>$280</Text>
                     <Image source={require('../Image/rec.png')} style={styles.recbox1}/>
                     <Image source={require('../Image/kk.png')} style={styles.chairbox1}/> 
                     <Image source={require('../Image/e4.png')} style={styles.vector4}/> 
                     <Image source={require('../Image/ec.png')} style={styles.circle2} />
                     <Text style={styles.plus2}>+</Text> 
                     <Text style={styles.textstyle9}>Dining chair</Text>
                     <Text style={styles.textstyle10}>$280</Text>  
                </View>

                <View style={{flexDirection:'row'}}>
                <Image source={require('../Image/rec.png')} style={styles.recbox2}/>
                <Image source={require('../Image/jj.png')} style={styles.chairbox3}/>
                <Image source={require('../Image/e2.png')} style={styles.vector22}/>
                <Image source={require('../Image/e3.png')} style={styles.vector33}/>
                <Image source={require('../Image/e1.png')} style={styles.vector11}/>
                <Image source={require('../Image/ec.png')} style={styles.circle3} />
                     <Text style={styles.plus3}>+</Text> 
              
                <Text style={styles.textstyle11}>Elegand Chair</Text>
                <Text style={styles.textstyle12}>$340</Text>
                <Image source={require('../Image/rec.png')} style={styles.recbox3}/>
                <TouchableOpacity onPress={()=>navigate('SECOND')}>
                <Image source={require('../Image/tt.png')} style={styles.chairbox4}/>
                </TouchableOpacity>
               
                <Image source={require('../Image/e4.png')} style={styles.vector44}/>
                <Image source={require('../Image/e3.png')} style={styles.vector333}/>
                <Image source={require('../Image/e2.png')} style={styles.vector222}/>
                <Image source={require('../Image/ec.png')} style={styles.circle4} />
                     <Text style={styles.plus4}>+</Text> 
                <Text style={styles.textstyle13}>Eames Chair</Text>
                <Text style={styles.textstyle14}>$340</Text>
                </View>
                <View >
                <Image source={require('../Image/home.png')} style={styles.tab} />
                <Image source={require('../Image/shop.png')} style={styles.tab2} />
                <Image source={require('../Image/account.png')} style={styles.tab3} />
                <Image source={require('../Image/home.png')} style={styles.tab4} />
                <Image source={require('../Image/ec.png')} style={styles.middle1} />
                <Image source={require('../Image/gp.png')}style={styles.middle2} />           
                </View>  
                </View>
                
            );

             };
}
const styles=StyleSheet.create({
    circle1:
    {
        position: 'absolute',
        width: 70,
        height:50 ,
        left:123,
        top: 350,  
    },
    plus1:
    {
        position: 'absolute',
        width: 40,
        height:40 ,
        left:150,
        top: 358,  
        color:'white'
    },
    circle2:
    {
        position: 'absolute',
        width: 70,
        height:50 ,
        left:315,
        top: 350,  
    },
    plus2:
    {
        position: 'absolute',
        width: 40,
        height:40 ,
        left:342,
        top: 358,  
        color:'white'
    },
    circle3:
    {
        position: 'absolute',
        width: 70,
        height:50 ,
        left:120,
        top: 540,  
    },
    plus3:
    {
        position: 'absolute',
        width: 40,
        height:40 ,
        left:147,
        top: 548,  
        color:'white'

    },
    circle4:
    {
        position: 'absolute',
        width: 70,
        height:50 ,
        left:315,
        top: 540,  
    },
    plus4:
    {
        position: 'absolute',
        width: 40,
        height:40 ,
        left:342,
        top: 548,  
        color:'white'

    },
   

    middle1:{
        position: 'absolute',
        width: 70,
        height:150 ,
        left:180,
        top: 570,  
    },
    middle2:{
        position: 'absolute',
        width: 20,
        height:20 ,
        left:195,
        top: 620,  
    },
     tab:{
        position: 'absolute',
        width: 20,
        height:20 ,
        left:30,
        top: 620,  

     },
     tab2:{
        position: 'absolute',
        width: 20,
        height:20 ,
        left:120,
        top: 620,  

     },
     tab3:{
        position: 'absolute',
        width: 20,
        height:25 ,
        left:270,
        top: 618,  

     },
     tab4:{
        position: 'absolute',
        width: 20,
        height:20 ,
        left:360,
        top: 620,  

     },
    container:
    {
        flex:1,
        backgroundColor:'#E5E5E5',
    },
    imagestyle:
    {
        position: 'absolute',
        width: 24,
        height: 11,
        left: 52,
        top: 60,           
    },
    imagestyle1:
    {
        position: 'absolute',
        width: 27,
        height: 20,
        left: 350,
        top:60,           
    },
    imagestyle2:
    {
        position: 'absolute',
        width: 15,
        height: 10,
        left: 360,
        top:60,           
    },
    textstyle1:
    {
        position: 'absolute',
        width: 186,
        height: 42,
        left:49,
        top:110, 
        fontSize:28,   
        fontWeight:'bold'       
    },
    textstyle2:
    {
        position: 'absolute',
        width: 25,
        height: 21,
        left:50,
        top:170, 
        fontSize:14,   
        fontWeight:"500" ,
        color:'#A1A3A5'      
    },
    textstyle3:
    {
        position: 'absolute',
        width: 74,
        height: 21,
        left:98,
        top:170, 
        fontSize:14,   
        fontWeight:"500" ,
        color:'#FF9938'      
    },
    textstyle4:
    {
        position: 'absolute',
        width: 46,
        height: 21,
        left:197,
        top:170, 
        fontSize:14,   
        fontWeight:"500" ,
        color:'#A1A3A5'      
    },
    textstyle5:
    {
        position: 'absolute',
        width: 52,
        height: 21,
        left:268,
        top:170, 
        fontSize:14,   
        fontWeight:"500" ,
        color:'#A1A3A5'      
    },
    textstyle6:
    {
        position: 'absolute',
        width: 96,
        height: 21,
        left:345,
        top:170, 
        fontSize:14,   
        fontWeight:"500" ,
        color:'#A1A3A5'      
    },
    recbox:
    {
        position: 'absolute',
        width: 180,
        height: 255,
        top:200,    
        left:21
    },

    recbox2:
    {
        position: 'absolute',
        width: 180,
        height: 252,
        left:21,
        top:405,    
    },
    recbox3:
    {
        position: 'absolute',
        width: 180,
        height: 252,
        top:405,    
        left:217
    },
    recbox1:
    {
        position: 'absolute',
        width: 180,
        height: 255,
        left:217,
        top:200,      
    },
   chairbox1:
   {
    position: 'absolute',
    width: 150,
    height: 150,
    top:190,
    left:212
   },
   chairbox4:
   {
    position: 'absolute',
    width: 150,
    height: 130,
    top:400,
    left:220
   },
   chairbox2:
   {
    position: 'absolute',
    width: 150,
    height: 152,
    top:190,
    left:25
   },
   chairbox3:
   {
    position: 'absolute',
    width: 150,
    height: 110,
    top:410,
    left:20
   },
   vector1:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:340,
    left:40

   },
   vector11:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:535,
    left:40

   },
   vector22:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:535,
    left:60

   },
   vector222:
   {
    position: 'absolute',
    width: 13,
    height: 13,
    top:535,
    left:283

   },
   vector2:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:340,
    left:60

   },
   vector33:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:535,
    left:80

   },
   vector3:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:341,
    left:80

   },
   vector4:
   {
    position: 'absolute',
    width: 12,
    height: 12,
    top:340,
    left:240

   },
   vector44:
   {
    position: 'absolute',
    width: 13,
    height: 13,
    top:535,
    left:240

   },
   vector333:
   {
    position: 'absolute',
    width: 13,
    height: 13,
    top:535,
    left:260

   },
   textstyle7:
   {
    position: 'absolute',
    top:360,
    left:43,
    fontWeight:'600',
    fontSize:15,
    height:23,
    width:95,
    color:'#6D6C6C'
     },
     textstyle8:
     {
      position: 'absolute',
      top:379,
      left:43,
      fontWeight:'bold',
      fontSize:13,
      height:23,
      width:38,
       },
       textstyle9:
       {
        position: 'absolute',
        top:360,
        left:237,
        fontWeight:'500',
        fontSize:15,
        color:'#6D6C6C',
         },
         textstyle10:
         {
          position: 'absolute',
          top:379,
          left:242,
          fontWeight:'bold',
          fontSize:13
           },
           textstyle11:
       {
        position: 'absolute',
        top:555,
        left:45,
        fontWeight:'500',
        fontSize:13,
        color:'#6D6C6C',
         },
         textstyle12:
       {
        position: 'absolute',
        top:575,
        left:45,
        fontWeight:'bold',
        fontSize:13
         },
         textstyle13:
       {
        position: 'absolute',
        top:555,
        left:245,
        fontSize:13,
        color:'#6D6C6C',
         },
         textstyle14:
       {
        position: 'absolute',
        top:575,
        left:245,
        fontWeight:'bold',
        fontSize:13
         },



});