import axios from 'axios';

import React, { useState } from 'react';

import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Seo from '../../components/seo';
import VineLayoutPublisher from '../../components/vineLayoutPublisher';
import XDataGrid from '../../components/xDataGrid';

const ariaLabel = { 'aria-label': 'description' };
const NftCreateClearingPage = () => {
  const [value, setValue] = useState({
    name: '',
    last_name: '',
    role: '',
    email: '',
    phone: '',
    status: '',
  });

  const handleChange = e => setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({
      data: {
        name: value.name,
        last_name: value.last_name,
        role: value.role,
        email: value.email,
        phone: value.phone,
        status: value.status,
      },
    });

    const baseUrl = process.env.GATSBY_API_URL || 'http://localhost:1337/api';
    const config = {
      method: 'post',
      url: `${baseUrl}/clearings/`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    setValue({
      name: '',
      last_name: '',
      role: '',
      email: '',
      phone: '',
      status: '',
    });
  };

  const disableSelectionOnClick = false;
  const checkboxSelection = true;
  const autoHeight = false;

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, editable: false, flex: 0.1 },
    { field: 'name', headerName: 'Name', width: 160, editable: true, flex: 0.4 },
    { field: 'lastName', headerName: 'Last Name', width: 160, editable: true, flex: 0.4 },
    { field: 'role', headerName: 'Role', width: 160, editable: true, flex: 0.2 },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 250,
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      type: 'phoneNumber',
      width: 160,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
  ];

  const rows = [
    // {
    //   id: 1,
    //   name: "Name 1",
    //   lastName: "Last Name 1",
    //   role: "role 1",
    //   email: "email1@mail.test",
    //   phoneNumber: "111-2222",
    //   status: "new",
    // },
    // {
    //   id: 2,
    //   name: "Name 2",
    //   lastName: "Last Name 2",
    //   role: "role 2",
    //   email: "email2@mail.test",
    //   phoneNumber: "333-4444",
    //   status: "unknown",
    // },
    // {
    //   id: 2,
    //   name: "Name 3",
    //   lastName: "Last Name 3",
    //   role: "role 3",
    //   email: "email3@mail.test",
    //   phoneNumber: "333-555",
    //   status: "unknown",
    // },
  ];

  return (
    <>
      <VineLayoutPublisher>
        <Seo title="Vine investments - publisher NFT create Clearing" />
        <Box style={styles.header}>
          <h1>NFT Create - Clearing</h1>
        </Box>
        <h1 style={styles.subtitle}>Clearing</h1>
        <Box style={styles.container}>
          <Input
            style={styles.input}
            placeholder="Name"
            name="name"
            value={value.name}
            inputProps={ariaLabel}
            onChange={handleChange}
          />

          <Input
            style={styles.input}
            placeholder="Last Name"
            name="last_name"
            value={value.last_name}
            inputProps={ariaLabel}
            onChange={handleChange}
          />

          <Input
            style={styles.input}
            placeholder="Role"
            name="role"
            value={value.role}
            inputProps={ariaLabel}
            onChange={handleChange}
          />
          <Input
            style={styles.input}
            placeholder="Email"
            name="email"
            value={value.email}
            inputProps={ariaLabel}
            onChange={handleChange}
          />
          <Input
            style={styles.input}
            placeholder="Phone Number"
            name="phone"
            value={value.phone}
            inputProps={ariaLabel}
            onChange={handleChange}
          />

          <Input style={styles.input} placeholder="Role" inputProps={ariaLabel} />
          <Input style={styles.input} placeholder="Email" inputProps={ariaLabel} />
          <Input style={styles.input} placeholder="Phone Number" inputProps={ariaLabel} />
        </Box>

        <ButtonGroup variant="outlined" aria-label="outlined button group" style={styles.buttonGroupAction}>
          <Button
            variant="contained"
            component="span"
            onClick={handleSubmit}
            sx={{
              display: 'flex',
              backgroundColor: 'rgb(9,74,120)',
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            ADD
          </Button>
        </ButtonGroup>

        <Box style={styles.tableContainer}>
          <XDataGrid
            paramRows={rows}
            paramColumns={columns}
            paramAutoHeight={autoHeight}
            paramCheckboxSelection={checkboxSelection}
            paramDisableSelectionOnClick={disableSelectionOnClick}
          />
        </Box>

        <Box style={styles.buttonGroupAction}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Download</Button>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </ButtonGroup>
        </Box>
      </VineLayoutPublisher>
    </>
  );
};

export default NftCreateClearingPage;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  subtitle: {
    fontWeight: '300',
    margin: 20,
    marginLeft: '10%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    flexGrow: 1,
    color: 'white',
    height: 100,
    backgroundColor: 'rgb(9,74,120)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableContainer: {},
  buttonGroupAction: {
    zIndex: -100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    display: 'block',
    width: 300,
    margin: 'auto',
    paddingTop: 10,
  },
};
