import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import StyleLayout from '../components/StyleLayout';

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
