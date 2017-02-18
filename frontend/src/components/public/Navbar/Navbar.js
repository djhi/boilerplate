import React, { PropTypes } from 'react';
import classnames from 'classnames';
import fela from 'fela-styles-connector';
import ApplicationLink from './ApplicationLink';
import NavbarLink from './NavbarLink';

const classes = {
    header: {
        fontSize: '2rem',
    },
};

const Navbar = ({ pathname, styles }) => (
    <header className={classnames('navbar', styles.header)}>
        <ApplicationLink>The Application</ApplicationLink>
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
    pathname: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired, // eslint-disable-line
};

export default fela(classes)(Navbar);
