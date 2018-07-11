import axios from 'axios';

export const SELECT_LANGUAGE = 'select_language';

export function selectLanguage(language){
	const language_request = axios.get(`/resources/${language}.json`);

	return {
		type: SELECT_LANGUAGE,
		payload: language_request
	};
}