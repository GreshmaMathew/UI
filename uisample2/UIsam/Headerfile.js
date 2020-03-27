import React, { Component } from 'react';
import {Text,StyleSheet,View} from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Headerfile extends Component{
    Back = () => console.log('Went back');
  Search = () => console.log('Searching');
  handleMore = () => console.log('Shown more');
    render(){
        return(
            <Appbar.Header>
            <Appbar.BackAction
              onPress={this.Back}
            />
            <Appbar.Content
              title="Title"
              subtitle="Subtitle"
            />
            <Appbar.Action icon="magnify" onPress={this.Search} />
            <Appbar.Action icon="dots-vertical" onPress={this.handleMore} />
          </Appbar.Header>
        );     
    }

}

const styles=StyleSheet.create({});