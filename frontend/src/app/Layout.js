import React, { PropTypes } from 'react';
import { View } from 'kilvin';
import StyleLayout from './StyleLayout';

const Layout = ({ children }) => (
    <StyleLayout>
        <View>
            {children}
        </View>
    </StyleLayout>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
