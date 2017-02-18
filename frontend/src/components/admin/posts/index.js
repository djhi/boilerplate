import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EditButton,
    DisabledInput,
    SimpleForm,
    TextInput,
} from 'admin-on-rest/lib/mui';

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="reference" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => <span>Post {record ? `"${record.reference}"` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="reference" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="reference" />
        </SimpleForm>
    </Create>
);
