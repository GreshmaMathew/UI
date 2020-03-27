

import {FETCHING_PEOPLE_REQUEST} from '../actions/types'
import {FETCHING_PEOPLE_SUCCESS} from '../actions/types'
import {FETCHING_PEOPLE_FAILURE} from '../actions/types'

const initialState = {
    isfetching:false,
    errormessage:'',
    people:[]
};
 const peopleReducer = (state = initialState,action) => {
     switch(action.type){
         case FETCHING_PEOPLE_REQUEST:
             return {
                 ...state,
                 isfetching:true
             }
             case FETCHING_PEOPLE_SUCCESS:
                 return {
                     ...state,
                     isfetching:false,
                     people:action.payload

                 }
                 case FETCHING_PEOPLE_FAILURE:
                     return{
                         ...state,
                         isfetching:false,
                         errormessage:action.payload
                     }
                     default:
                         return state;
     }
 };
 export default peopleReducer;