import React from 'react';
import { text } from '@kadira/storybook-addon-knobs';
import storiesOf from '../../../lib/storiesOf';
import Navbar from './Navbar';

storiesOf('Navbar', module, 'The main public navbar')
    .add('basic', () => (
        <Navbar />
    ))
    .add('active link', () => (
        <Navbar pathname={text('pathname', '/articles')} />
    ));
