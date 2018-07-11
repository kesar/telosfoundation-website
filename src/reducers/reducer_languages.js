import {SELECT_LANGUAGE} from '../actions';

export default function(state=null, action){
	switch(action.type){
		case SELECT_LANGUAGE:
			return action.payload.data;
	}
	return state;
}