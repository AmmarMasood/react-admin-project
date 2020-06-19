import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  Create,
  Show,
  SimpleShowLayout,
  ReferenceField,
  ReferenceArrayField,
  Filter,
  ReferenceInput
} from "react-admin";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const AgentListTitle = () => {
  return <span>Agent Overview</span>;
};

export const AgentList = props => (
  <List title={<AgentListTitle />} sort={{ order: "AESC" }} {...props}>
    <Datagrid rowClick="show">
      <TextField source="Identifier" />
      <ReferenceField source="agenttypeId" reference="agenttypes">
        <TextField source="Identifier" />
      </ReferenceField>
      <TextField source="Description" />
      <TextField source="Status" />
      <EditButton />
    </Datagrid>
  </List>
);

const PropertiesFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label="PropertyTypes"
      source="propertytypeId"
      reference="propertytypes"
      allowEmpty
      alwaysOn
    >
      <SelectInput optionText="Identifier" />
    </ReferenceInput>
  </Filter>
);

export const AgentShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="Identifier" />
      <TextField source="Description" />
      <TextField source="Status" />
      <ReferenceArrayField source="propertyIds" reference="property">
        <List
          filters={<PropertiesFilter />}
          filterDefaultValues={{ agentId: props.id }}
          {...props}
        >
          <Datagrid>
            <TextField source="id" />
            <ReferenceField source="propertytypeId" reference="propertytypes">
              <TextField source="Identifier" />
            </ReferenceField>
            <TextField source="Identifier" />
            <TextField source="value" />
            <TextField source="valueType" />
            <TextField source="lastEdited" />
            <EditButton />
          </Datagrid>
        </List>
      </ReferenceArrayField>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/AgentCopy",
          state: { agentId: props.id }
        }}
      >
        <Button variant="contained" color="primary">
          Agent Copy
        </Button>
      </Link>
    </SimpleShowLayout>
  </Show>
);

const AgentTitle = ({ record }) => {
  return <span>User {record ? `"${record.Name}"` : ""}</span>;
};

export const AgentEdit = props => (
  <Edit title={<AgentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Identifier" />
      <TextInput source="Description" />
      <ReferenceInput
        key="agenttypeId"
        source="agenttypeId"
        reference="agenttypes"
      >
        <SelectInput optionText="Identifier" />
      </ReferenceInput>
      <SelectInput
        source="Status"
        choices={[
          { id: "ACTIVE", name: "ACTIVE" },
          { id: "INACTIVE", name: "INACTIVE" },
          { id: "DISABLED", name: "DISABLED" }
        ]}
      />
    </SimpleForm>
  </Edit>
);
// UserCreate;
export const AgentCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput disabled source="id" />
      <TextInput source="Identifier" />
      <TextInput source="Description" />
      <ReferenceInput source="agenttypeId" reference="agenttypes">
        <SelectInput optionText="Identifier" />
      </ReferenceInput>
      <SelectInput
        source="Status"
        choices={[
          { id: "ACTIVE", name: "ACTIVE" },
          { id: "INACTIVE", name: "INACTIVE" },
          { id: "DISABLED", name: "DISABLED" }
        ]}
      />
    </SimpleForm>
  </Create>
);
