import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { ThemeProvider } from 'react-fela';
import StyleLayout from '../app/StyleLayout';
import theme from '../app/public/theme';

export default (componentName, module, title = componentName) =>
    storiesOf(componentName, module)
        .addDecorator(story => (
            <StyleLayout>
                <ThemeProvider theme={theme}>
                    {story()}
                </ThemeProvider>
            </StyleLayout>
        ))
        .addDecorator(host({
            title,
        }));
