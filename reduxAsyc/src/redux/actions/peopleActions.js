import {FETCHING_PEOPLE_REQUEST} from '../actions/types'
import {FETCHING_PEOPLE_SUCCESS} from '../actions/types'
import {FETCHING_PEOPLE_FAILURE} from '../actions/types'

export const fetchingpeoplerequest = () => {
    return {
    type: FETCHING_PEOPLE_REQUEST
    }
};

export const fetchingpeoplesuccess = json => {
    return {
    type: FETCHING_PEOPLE_SUCCESS,
    payload:json
}
};

export const fetchingpeoplefailure = error => {
    return{
    type: FETCHING_PEOPLE_FAILURE,
    payload:error
    }
};

export const fetchpeople = () => {
 return async dispatch =>{
     dispatch(fetchingpeoplerequest());
     try {
         let response= await fetch('http://dummy.restapiexample.com/api/v1/employees')
         let json = await response.json();
         dispatch(fetchingpeoplesuccess(json.data));
     }
     catch(error){

        dispatch(fetchingpeoplefailure(error));
     }
 };
};


