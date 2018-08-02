## Adding a language:
first value in json object is "language".  value must match file name.  For example, en.json, "language": "en", spanish.json, "language": "spanish"

add option to select in language_toggle component.  Option value = language.  example, <option value="en">ENGLISH</option>

import flag into language_toggle component, and add it to the switch statement in the get_flag function.

I think that's it.

## Adding a partner

If it's a short, wide logo, resize image to 250px wide.  If it's pretty tall, you want it to be smaller.  150px tall seems to work most of the time.

Import image into front_page.js component, add image, url, and name to partnersArr array.  The name will be used as the alt attribute in the image.  If there is no image, it will display the name as a link.  If there is no url, it will display just the image or text.  There must be a name, or there will be an error.
