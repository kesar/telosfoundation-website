import {combineReducers} from 'redux';
import LanguageReducer from './reducer_languages';
import SideNavReducer from './reducer_side_nav';

const rootReducer = combineReducers({
	site_content: LanguageReducer,
	side_nav_open: SideNavReducer
});

export default rootReducer;