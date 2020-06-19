import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  Create
} from "react-admin";

const AgentTypeListTitle = () => {
  return <span>Agent Types</span>;
};

export const AgenttypeList = props => (
  <List title={<AgentTypeListTitle />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="Identifier" />
      <TextField source="Description" />
      <EditButton />
    </Datagrid>
  </List>
);

// you need to create all the urls before i can continue
export const AgenttypeEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="Identifier" />
      <TextInput source="Description" />
    </SimpleForm>
  </Edit>
);

export const AgenttypeCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput disabled source="id" />
      <TextInput source="Identifier" />
      <TextInput source="Description" />
    </SimpleForm>
  </Create>
);
