
import React,{Component} from 'react';
import {StyleSheet,FlatList,Text,View} from 'react-native';


export default class PeopleList extends Component{
_keyExtractor = item => item.id;
_renderItem = ({item}) => {
    const {id,employee_name,employee_salary} =item;
    return(
        <View>
            <Text style={{fontWeight:'bold',paddingLeft:150}}> {id}{"\n"}{employee_name}{"\n"}{employee_salary}{"\n"}</Text>
        </View>
    );
};
render(){
    return(<>
        <FlatList  
        style={{flex:1}}
        data={this.props.people}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}   
        />
        </>
    )
}

}
const style=StyleSheet.create({})