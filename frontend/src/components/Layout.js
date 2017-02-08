import React, { PropTypes } from 'react';
import { Provider } from 'react-fela';
import { View } from 'kilvin';
import { getRenderer, getMountNode } from '../lib/fela';

const Layout = ({ children }) => (
    <Provider renderer={getRenderer()} mountNode={getMountNode()}>
        <View>
            {children}
        </View>
    </Provider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
