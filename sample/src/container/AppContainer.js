import React, { Component } from 'react';
import {Text,View,StyleSheet,ActivityIndicator} from 'react-native'
import PeopleList from '../components/PeopleList'
import {fetchpeople} from '../redux/actions/peopleActions';
import {connect} from 'react-redux'
import App from '../../App';
import PropTypes from 'prop-types';

class AppContainer extends Component{
  /*  constructor(props){
        super(props);
        this.state = {
            people:[],
            errormessage:"",
            isfetching:true
        };
    }


async fetchemployess(){
    try {
let response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
let json = await response.json();
this.setState({people:json.data,isfetching:false});
    }
    catch(error)
    {
this.setState({errormessage:error});
    }
}*/
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

