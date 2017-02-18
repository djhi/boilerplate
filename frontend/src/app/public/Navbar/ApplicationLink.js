import React, { PropTypes } from 'react';
import fela from 'fela-styles-connector';
import classnames from 'classnames';
import Link from 'next/link';

const classes = {
    default: {
        fontFamily: 'boycottregular',
    },
};

const ApplicationLink = ({ children, styles }) => (
    <Link href="/">
        <a className={classnames('title', styles.default)}>
            {children}
        </a>
    </Link>
);

ApplicationLink.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object.isRequired, // eslint-disable-line
};

export default fela(classes)(ApplicationLink);
