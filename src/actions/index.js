import axios from 'axios';

export const SELECT_LANGUAGE = 'select_language';
export const SIDE_NAV_OPEN = 'side_nav_open';

const validLanguages = [
	'en',
	'pt-br',
	'mandarin',
	'spanish',
	'korean',
	'russian',
	'french',
	'german',
	'italian',
	'turkish',
	'indonesian',
	'arabic'
];

export function selectLanguage(language){

	let lan = language.toLowerCase().trim();
	if(validLanguages.indexOf(lan) < 0) lan = 'en';

	const language_request = axios.get(`/resources/${lan}.json`);

	return {
		type: SELECT_LANGUAGE,
		payload: language_request
	};
}

export function toggleSideNav(sideNavStatus){
	return {
		type: SIDE_NAV_OPEN,
		payload: sideNavStatus
	};
}