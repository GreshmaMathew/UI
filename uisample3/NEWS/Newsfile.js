import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView,FlatList,Image} from 'react-native';
import data from '../NEWS/data'



export default class Newsfile extends Component{
    state={
        data:data,
      }
    render(){
        return(
        <View>
            <Text style={styles.textstyle}>News</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} ></ScrollView>
            <FlatList  style={{width:"100%"}} 
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
            <View style={styles.rowStyle}>
                    <View style={styles.imageContainer} >
                            <Image source={{uri: item.image_link}} style={styles.image} />
                    </View>
                    <View style={styles.rightSideContent}>
                             <Text style={{ width:'100%', paddingVertical:4, textAlign:'center',fontWeight:'bold'}} >{item.type}</Text>
                             <Text style={styles.headline} >{item.headline}</Text>
                     </View>
            </View>
                          )}/>       
                          <ScrollView/>       
        </View>
        );
    }
   


}
const styles=StyleSheet.create({
    textstyle:
    {
        fontWeight:'bold',
        fontSize:25,
    },
    imageContainer:{
        margin:3,
        height:120,
        width:90,      
  },
  image:{
     flex:1,
     width:null,
     alignSelf:'stretch',
     borderRadius: 10,
  },
  rowStyle:{
    flexDirection:'row',
    borderRadius:7,
    padding:5,
    margin:5
  },
  rightSideContent:{
    paddingLeft:10,
    width:'100%'
  },
  headline:{
    fontSize:19,
    fontWeight:'bold',
    paddingRight:100
  },
});