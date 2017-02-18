import React, { PropTypes } from 'react';
import classnames from 'classnames';
import fela from 'fela-styles-connector';

import Link from 'next/link';

const classes = {
    header: {
        fontFamily: 'boycottregular',
        fontSize: '3rem',
    },
    link: {
        fontFamily: 'boycottregular',
    },
};

const Navbar = ({ styles }) => (
    <header className={styles.header}>
        <Link href="/"><a className={classnames('title', styles.link)}>The Application</a></Link>
        {' - '}
        <Link href="/articles"><a className={styles.link}>Articles</a></Link>
    </header>
);

Navbar.propTypes = {
    styles: PropTypes.object.isRequired, // eslint-disable-line
};

export default fela(classes)(Navbar);
