import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView,ImageBackground} from 'react-native';
import data from '../NEWS/data'


export default class Music extends Component{
    state={
        data:data
    }

    music = () =>{
        return this.state.data.map(singleData => {
            return (         
                    <View  key={singleData.id} style={{height:250, margin:3,  padding:5, flexBasis:'48%' }} >
                            <ImageBackground source={{uri: singleData.image_link}}   style={{position:'absolute', right:0, bottom:0, left:0, top:0 }} imageStyle={{borderRadius:20,}} >
                            </ImageBackground>
                    </View> 
             
            )
        })
    }
    render(){
        return(
        <View style={styles.conatiner}>{this.music()}</View>
        );
    }
   


}
const styles=StyleSheet.create({
    conatiner:
    {
        height:800,
        overflow:'hidden',
        flexWrap:'wrap',
        flexDirection:'row' , 
        justifyContent:'space-between',
        elevation:8
 

    }


});