import React, { PropTypes } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';
import { PostCreate, PostEdit, PostList } from './posts';

const AdminComponent = ({ restClient }) => (
    <Admin restClient={restClient} customSagas={[restClient.saga()]}>
        <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
    </Admin>
);

AdminComponent.propTypes = {
    restClient: PropTypes.func.isRequired,
};

export default AdminComponent;
