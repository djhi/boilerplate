import React, { Component } from 'react';
import createRestClient from '../lib/createAdminOnRestclient';

class AdminPage extends Component {
    constructor() {
        super();
        this.state = { AdminComponent: null };
    }

    componentDidMount() {
        createRestClient().then((restClient) => {
            // This is needed because otherwise next would try to load the quill WYSIWYG editor on server
            // and fail as quill needs document.
            const Admin = require('../app/admin').default; // eslint-disable-line

            this.setState({
                AdminComponent: (<Admin restClient={restClient} />),
            });
        });
    }

    render() {
        const { AdminComponent } = this.state;

        if (!AdminComponent) {
            return <div>Loading</div>;
        }

        return AdminComponent;
    }
}

export default AdminPage;
