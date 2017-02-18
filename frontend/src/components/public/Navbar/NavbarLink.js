import React, { PropTypes } from 'react';
import fela from 'fela-styles-connector';
import classnames from 'classnames';
import Link from 'next/link';

const classes = {
    default: {
        fontFamily: 'boycottregular',
    },
    active: {
        fontWeight: 'bold',
    },
};

const NavbarLink = ({ children, className, isActive, path, styles }) => (
    <Link
        href={path}
    >
        <a
            className={classnames(className, styles.default, {
                [styles.active]: isActive,
            })}
        >
            {children}
        </a>
    </Link>
);

NavbarLink.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired, // eslint-disable-line
};

NavbarLink.defaultProps = {
    className: null,
};

export default fela(classes)(NavbarLink);
