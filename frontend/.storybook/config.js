const { configure, addDecorator } = require('@kadira/storybook');
const req = require.context('../src/app', true, /.stories.js$/)
const { withKnobs } = require('@kadira/storybook-addon-knobs');

addDecorator(withKnobs);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
