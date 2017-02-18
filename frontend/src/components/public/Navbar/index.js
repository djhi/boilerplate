import withProps from 'recompose/withProps';
import Router from 'next/router';
import Navbar from './Navbar';

export default withProps({
    pathname: () => Router.pathname,
})(Navbar);
