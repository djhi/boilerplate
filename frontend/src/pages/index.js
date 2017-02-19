import React from 'react';
import Head from 'next/head';
import Layout from '../app/public/PublicLayout';

export default () => (
    <Layout>
        <Head>
            <title>The Application</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <h1>Welcome !</h1>
    </Layout>
);
