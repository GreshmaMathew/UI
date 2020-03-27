
import React, { Component } from 'react';
import AppContainer from './src/container/AppContainer'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import peopleReducer from './src/redux/reducers/peopleReducers';

const createstorewithmiddleware = applyMiddleware(thunk)(createStore)
const store = createstorewithmiddleware(peopleReducer);
class App extends Component {
    render() {    
        return( 
             <Provider store={store}>
            <AppContainer/></Provider>
        ) ;
        
    };
}
export default App;





// /*import 'react-native-gesture-handler';
//  import * as React from 'react';
//  import {Provider} from 'react-redux'
// import { View, Text ,Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Container from './reduxsample/Container';
// import store from './redux/Store'
// const Stack = createStackNavigator();
// function App() {
//   return (
//     <Provider store={store}>
//       <Container/>
//     </Provider>
    
//   );
// }
// export default App;*/
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text
// } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as pageActions from './actions/pageList';

// class App extends Component {

//   incrementCount() {
//     let { actions } = this.props;
//     actions.getPageList();
//   }
//   render() {
//     const { pageList } = this.props;
//     console.log(pageList);
//     return (
//       <View styles={styles.container}>
//         <Button
//           title="Get Employee"
//           onPress={() => this.incrementCount()}
//         />
//         {pageList.map((employee) => (
//           <Text style={styles.textCenter}>{employee.employee_name}</Text>
//         ))}


//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textCenter: {
//     textAlign: 'center'
//   }
// });

// const mapStateToProps = state => ({
//   pageList: state.pageList.pageList,
// });

// const ActionCreators = Object.assign(
//   {},
//   pageActions,
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)

