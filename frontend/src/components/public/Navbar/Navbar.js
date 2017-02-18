import React, { PropTypes } from 'react';
import fela from 'fela-styles-connector';
import NavbarLink from './NavbarLink';

const classes = {
    header: {
        fontFamily: 'boycottregular',
        fontSize: '2rem',
    },
};

const Navbar = ({ pathname, styles }) => (
    <header className={styles.header}>
        <NavbarLink path="/">The Application</NavbarLink>
        {' - '}
        <NavbarLink
            isActive={pathname === '/articles'}
            path="/articles"
        >
            Articles
        </NavbarLink>
    </header>
);

Navbar.propTypes = {
    styles: PropTypes.object.isRequired, // eslint-disable-line
};

export default fela(classes)(Navbar);
