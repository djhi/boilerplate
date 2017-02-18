import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import StyleLayout from '../app/StyleLayout';

export default (componentName, module, title = componentName) =>
    storiesOf('Navbar', module)
        .addDecorator(story => (
            <StyleLayout>
                {story()}
            </StyleLayout>
        ))
        .addDecorator(host({
            title,
        }));
