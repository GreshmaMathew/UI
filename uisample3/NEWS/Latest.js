import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView,Image} from 'react-native';
import kk from '../Image/kk.png'
import download from '../Image/download.png'
import data from '../NEWS/data'

export default class Latest extends Component{
    state={
        data:data
    }

    latestMembers = () => {
        return this.state.data.map(data => {
            return  <View key={data.id} style={{alignItems:'center', padding:5}}  >
                        <Image source={{uri:data.user_avatar}} style={{height:50, width:50, borderRadius: 25, marginHorizontal:22 }} />
                        <Text style={{padding:5,fontWeight:'bold'}} >{data.username}</Text>
                    </View>
        })
    }
    render(){
        return(
            <View>
            <View style={styles.container}>
                <Text style={styles.textinputstyle}>Latest Members</Text>
            </View>
             <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} >
             {this.latestMembers()}
        </ScrollView>
        </View>
        );
    }
}

const styles=StyleSheet.create({

    container:
    {
        alignSelf:'stretch',
        paddingVertical:5,
        marginVertical:8,
        borderRadius:7
       
    },
    textinputstyle:
    {
        fontSize:22,
        paddingTop:10,
        fontWeight:'bold'
        
    },
});