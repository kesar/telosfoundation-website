import {SELECT_LANGUAGE} from '../actions/index';

export default function(state={}, action){
	switch(action.type){
		case SELECT_LANGUAGE:
			return action.payload.data;
	}

	return state;
}