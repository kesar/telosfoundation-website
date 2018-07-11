import {combineReducers} from 'redux';
import LanguageReducer from './reducer_languages';

const rootReducer = combineReducers({
	site_content: LanguageReducer 
});

export default rootReducer;