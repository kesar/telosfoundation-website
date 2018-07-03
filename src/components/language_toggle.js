import React from 'react';

const LanguageToggle = () => {

	return (
		<li className='language_toggle'>
			<form>
				<select>
					<option selected='selected'>English</option>
					<option>German</option>
				</select>
			</form>
		</li>
	);
};

export default LanguageToggle;