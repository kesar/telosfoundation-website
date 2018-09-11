## Adding a language:
first value in json object is "language".  value must match file name.  For example, en.json, "language": "en", spanish.json, "language": "spanish"

add option to select in language_toggle component.  Option value = language.  example:

``` html
<option value='en'>ENGLISH</option>
```

import flag into language_toggle component, and add it to the switch statement in the get_flag function.


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

I think that's it.

## Adding a partner

If it's a short, wide logo, resize image to 250px wide.  If it's pretty tall, you want it to be smaller.  150px tall seems to work most of the time.

Import image into front_page.js component, add image, url, and name to partnersArr array.  The name will be used as the alt attribute in the image.  If there is no image, it will display the name as a link.  If there is no url, it will display just the image or text.  There must be a name, or there will be an error.

## Updating the white paper

The white paper goes in `/public/resources/wp_master`.  Filename must be `telos_white_paper_<language>.pdf`, `like telos_white_paper_english.pdf` for example.  If you add a translated version, add the full path to `/src/config/constants.js`: 

``` javascript
const wp\_version_code = 'v1.2\_8152018';

export const WHITE\_PAPER\_NEWLANGUAGE = \`http://resources.telosfoundation.io/wp\_master/telos\_white\_paper\_new\_language.pdf?${wp\_version\_code}\`;
```

You should update the version code as well.  I've been following the convention of v<version number>\_<date>.  The only thing it's used for is to prevent browsers from pulling up the cached version after we update it; if you give out the link directly, omit the version: `http://resources.telosfoundation.io/wp\_master/telos\_white_paper\_new_language.pdf`

Then, add it to `/src/components/pages/front_page.js`:

``` javascript
//white papers
import {WHITE\_PAPER\_ENGLISH, WHITE\_PAPER\_KOREAN, WHITE\_PAPER\_NEWLANGUAGE} from '../../config/constants';

...

const WhitePaper = ({white\_paper\_heading, white\_paper\_content, github_text, language}) => {

	let wp\_url;
	switch(language){
		case 'en':
			wp\_url = WHITE\_PAPER\_ENGLISH;
			break;
		case 'korean':
			wp\_url = WHITE\_PAPER\_KOREAN;
			break;
		case 'newlanguage':
			wp\_url = WHITE\_PAPER\_NEWLANGUAGE;
			break;
			...
```

Also update the downloads page at `/src/components/pages/download.js`:

``` javascript
import {WHITE\_PAPER\_ENGLISH, WHITE\_PAPER\_KOREAN, WHITE\_PAPER\_NEWLANGUAGE} from '../../config/constants';

...

const Documents = ({language}) => {
	let wp\_url;
	switch(language){
		case 'en':
			wp\_url = WHITE\_PAPER\_ENGLISH;
			break;
		case 'korean':
			wp\_url = WHITE\_PAPER\_KOREAN;
			break;
		case 'newlanguage':
			wp\_url = WHITE\_PAPER\_NEWLANGUAGE;
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