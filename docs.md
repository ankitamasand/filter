### Libraries/Dependencies

* React and React-dom
* Material-ui for using some components like TextBox, Button, Simple select
* clone-deep for deep cloning nested objects
* react-select for multi select component

### Folder Structure

The `src` folder contains:

`components` that has presentation as well as smart components. The presentation components are TextBox, SimpleSelect and MultiSelect. There's only one smart component QueryBuilder that handles the state of the applied filters.

The `constants` folder contains various mappings betweene the components that are to be used for a particular selected value in `lhs`. For example, if `lhs` is Account, then the operator should be `SimpleSelect` and `rhs` should be `MultiSelect`. If the value of `lhs` is Campaign Name, then the operator should be `SimpleSelect` and `rhs` should be `TextBox`. These mappings are configurable and is easy to add/update any of these entries.

I have dumped in `countryCodes` JSON in country-codes.js file. Ideally, this should be an API call for an autocomplete field to get the list of matched countries. But for the sake of simplicity, I have put this in a JSON file. The object size is big and so you can feel a jarring effect while searching for countries. This is, however, hot a good user experience! But on the project level where we'll have the autocomplete API in place, this would look a lot smoother!

`styles` contains some SASS styles for some components.

`utils.js` contains some utilities for getting the appropriate component. So, `SimpleSelect` maps to the SimpleSelect component and the `getComponent` function in utilities will do the job for us! It helps us get the right component depending on the mappings.
