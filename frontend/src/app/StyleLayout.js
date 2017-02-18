import React, { PropTypes } from 'react';
import { Provider } from 'react-fela';
import { getRenderer, getMountNode } from '../lib/fela';

const StyleLayout = ({ children }) => (
    <Provider renderer={getRenderer()} mountNode={getMountNode()}>
        {children}
    </Provider>
);

StyleLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StyleLayout;
