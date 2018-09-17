## Adding a language:
first value in json object is "language".  value must match file name.  For example, en.json, "language": "en", spanish.json, "language": "spanish"

#### Mobile

add option to select in `src/components/language_toggle_mobile.js` component.  Option value = language.  example:

``` html
<option value='en'>ENGLISH</option>
```

Get a flag icon and put it in `/src/img/flags/`.  I use [iconfinder](https://www.iconfinder.com/iconsets/142-mini-country-flags-16x16px) to get the flags.  I have mostly been naming the flag png after the country, such as `china.png`.  There's no naming requirement like in the json file, though.

Import flag into language_toggle component, and add it to the switch statement in the get_flag function.


``` javascript
import english_flag from '../img/flags/en.png';

...

const get_flag = () => {
	let flag;
	switch(this.props.site_content.language){
		case 'en':
			flag = english_flag;
			break;
			...
```

#### Desktop

In the `language_toggle_desktop.js` component, import the flag.  Add the language and flag to the languageOptions array:

``` javascript
{
	value: 'en',
	name: 'ENGLISH',
	flag: english_flag
}
```

where 'ENGLISH' is what will be displayed in the language options menu, and 'en' is the name of the language/json file.

I think that's it.

## Adding a partner

If it's a short, wide logo, resize image to 250px wide.  If it's pretty tall, you want it to be smaller.  150px tall seems to work most of the time.

Import image into front_page.js component, add image, url, and name to partnersArr array.  The name will be used as the alt attribute in the image.  If there is no image, it will display the name as a link.  If there is no url, it will display just the image or text.  There must be a name, or there will be an error.

## Updating the white paper

The white paper goes in `/public/resources/wp_master`.  Filename must be `telos_white_paper_<language>.pdf`, like `telos_white_paper_english.pdf` for example.  If you add a translated version, add the full path to `/src/config/constants.js`: 

``` javascript
const wp_version_code = 'v1.2_8152018';

export const WHITE_PAPER_NEWLANGUAGE = `http://resources.telosfoundation.io/wp_master/telos_white_paper_new_language.pdf?${wp_version_code}`;
```

You should update the version code as well.  I've been following the convention of v{version number}_{date}.  The only thing it's used for is to prevent browsers from pulling up the cached version after we update it; if you give out the link directly, omit the version: `http://resources.telosfoundation.io/wp_master/telos_white_paper_new_language.pdf`

Then, add it to `/src/components/pages/front_page.js`:

``` javascript
//white papers
import {WHITE_PAPER_ENGLISH, WHITE_PAPER_KOREAN, WHITE_PAPER_NEWLANGUAGE} from '../../config/constants';

...

const WhitePaper = ({white_paper_heading, white_paper_content, github_text, language}) => {

	let wp_url;
	switch(language){
		case 'en':
			wp_url = WHITE_PAPER_ENGLISH;
			break;
		case 'korean':
			wp_url = WHITE_PAPER_KOREAN;
			break;
		case 'newlanguage':
			wp_url = WHITE_PAPER_NEWLANGUAGE;
			break;
			...
```

Also update the downloads page at `/src/components/pages/download.js`:

``` javascript
import {WHITE_PAPER_ENGLISH, WHITE_PAPER_KOREAN, WHITE_PAPER_NEWLANGUAGE} from '../../config/constants';

...

const Documents = ({language}) => {
	let wp_url;
	switch(language){
		case 'en':
			wp_url = WHITE_PAPER_ENGLISH;
			break;
		case 'korean':
			wp_url = WHITE_PAPER_KOREAN;
			break;
		case 'newlanguage':
			wp_url = WHITE_PAPER_NEWLANGUAGE;
			break;
			...
```

Since we use the full path of the file, the link won't work, even locally, before you deploy the site.

## Building

Commands are same as create-react-app, build with:

```
npm run build
```

Then just copy the build folder to the website.