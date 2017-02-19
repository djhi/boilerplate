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
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="author" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => <span>Post {record ? `"${record.title}"` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="author" />
            <TextField source="image_url" />
            <TextField source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="author" />
            <TextInput source="image_url" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);
