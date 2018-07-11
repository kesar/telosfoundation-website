import axios from 'axios';

export const SELECT_LANGUAGE = 'select_language';

export function selectLanguage(language){
	const language_path = `/resources/${language}.json`;
	const language_request = axios.get(language_path);
	return {
		type: SELECT_LANGUAGE,
		payload: language_request
	};
}