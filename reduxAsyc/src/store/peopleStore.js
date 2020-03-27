import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import AppContainer from '../container/AppContainer';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import peopleReducer from '../redux/reducers/peopleReducers';

const createstorewithmiddleware = applyMiddleware(thunk)(createStore)
const store = createstorewithmiddleware(peopleReducer);
class PeopleStore extends Component{    
    render(){
      return(  <Provider store={store}>
            <AppContainer/>    
            </Provider>
        )
      };
};
const styles=StyleSheet.create({})
export default PeopleStore;