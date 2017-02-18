import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { host } from 'storybook-host';
import { text } from '@kadira/storybook-addon-knobs';
import Navbar from './Navbar';
import StyleLayout from '../../StyleLayout';

storiesOf('Navbar', module)
    .addDecorator(story => (
        <StyleLayout>
            {story()}
        </StyleLayout>
    ))
    .addDecorator(host({
        title: 'The main public navbar',
    }))
    .add('basic', () => (
        <Navbar />
    ))
    .add('active link', () => (
        <Navbar pathname={text('pathname', '/articles')} />
    ));
