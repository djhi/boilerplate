import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { getRenderer } from '../lib/fela';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const page = renderPage();
        const renderer = getRenderer();
        const css = renderer.renderToString();

        renderer.clear();

        return {
            ...page,
            css,
        };
    }

    render() {
        return (
            <html lang="fr-FR">
                <Head>
                    <title>My application</title>
                    <script src="https://use.fontawesome.com/b1e976d965.js" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
                    <style id="fela-stylesheet">{this.props.css}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
