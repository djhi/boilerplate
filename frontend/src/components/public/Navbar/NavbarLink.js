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

const NavbarLink = ({ children, isActive, path, styles }) => (
    <Link
        href={path}
    >
        <a
            className={classnames(styles.default, {
                [styles.active]: isActive,
            })}
        >
            {children}
        </a>
    </Link>
);

export default fela(classes)(NavbarLink);
