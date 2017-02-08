import React, { PropTypes } from 'react';
import { ThemeProvider } from 'react-fela';
import { Box } from 'kilvin';

import theme from './theme';
import Layout from '../Layout';
import Navbar from './Navbar';

const PublicLayout = ({ children }) => (
    <Layout>
        <ThemeProvider theme={theme}>
            <Box flex>
                <div>
                    <Navbar />
                </div>
                <Box grow={1}>
                    {children}
                </Box>
                <div>
                    Footer
                </div>
            </Box>
        </ThemeProvider>
    </Layout>
);

PublicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicLayout;
