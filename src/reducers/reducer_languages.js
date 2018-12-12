import {SELECT_LANGUAGE} from '../actions';

export default function(state=null, action){
	switch(action.type){
		case SELECT_LANGUAGE:
			if(!action.payload.data){
				console.log('no language');
				return state;
			}
			return action.payload.data;
		default:
			return state;
	}
}