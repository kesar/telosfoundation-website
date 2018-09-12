import {SIDE_NAV_OPEN} from '../actions';

export default function(state=null, action){
	switch(action.type){
		case SIDE_NAV_OPEN:
			return action.payload;
		default:
			return state;
	}
}