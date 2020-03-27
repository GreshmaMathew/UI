import React,{Component} from 'react';
import {Text,View,StyleSheet,ActivityIndicator} from 'react-native';
import {fetchpeople} from '../redux/actions/peopleActions';
import {connect} from 'react-redux'
import App from '../../App';
import PropTypes from 'prop-types';
import PeopleList from '../components/PeopleList'

class AppContainer extends Component{
componentDidMount(){
  //  this.fetchemployess();
  this.props.fetchpeople();
}
render(){
    let content=<PeopleList people={this.props.randompeople.people}/>;
    if(this.props.randompeople.isfetching){
        content=<ActivityIndicator size='large'/>
    }
    return (
    <View style={styles.container}>{content}
     </View>
     );
    }
}
AppContainer.propTypes={
    
    fetchpeople:PropTypes.func.isRequired,
    randompeople:PropTypes.object.isRequired
};
 const styles=StyleSheet.create({
     container:{
         flex:1
     }

 });
 const mapStateToProps = state => {
     return{
         randompeople:state
     };

 };
 export default connect(mapStateToProps,{fetchpeople})(AppContainer);