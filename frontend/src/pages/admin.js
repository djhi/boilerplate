import React, { Component } from 'react';

import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

import createRestClient from '../lib/admin-on-rest/client';

import { PostCreate, PostEdit, PostList } from '../components/admin/posts';

class AdminPage extends Component {
    constructor() {
        super();
        this.state = { restClient: null };
    }

    componentDidMount() {
        createRestClient().then(restClient => this.setState({ restClient }));
    }

    render() {
        const { restClient } = this.state;

        if (!restClient) {
            return <div>Loading</div>;
        }

        return (
            <Admin restClient={restClient} customSagas={[restClient.saga()]}>
                <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
            </Admin>
        );
    }
}

export default AdminPage;
