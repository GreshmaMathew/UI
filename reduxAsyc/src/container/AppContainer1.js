import React,{Component} from 'react';
import {Text,View,StyleSheet,ActivityIndicator} from 'react-native';
import {fetchpeople} from '../redux/actions/peopleActions';
import {connect} from 'react-redux'
import App from '../../App';
import PropTypes from 'prop-types';
import PeopleList1 from '../components/PeopleList1'

class AppContainer1 extends Component{
componentDidMount(){
  //  this.fetchemployess();
  this.props.fetchpeople();
}
render(){
    let content=<PeopleList1 people={this.props.randompeople.people}/>;
    if(this.props.randompeople.isfetching){
        content=<ActivityIndicator size='large'/>
    }
    return (
    <View style={styles.container}>{content}
     </View>
     );
    }
}
AppContainer1.propTypes={
    
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
 export default connect(mapStateToProps,{fetchpeople})(AppContainer1);