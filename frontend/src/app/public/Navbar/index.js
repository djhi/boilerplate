import withProps from 'recompose/withProps';
import Router from 'next/router';
import Navbar from './Navbar';

export default withProps(() => {
    if (process.browser) {
        const pathname = Router.pathname;
        return { pathname };
    }

    return '';
})(Navbar);
