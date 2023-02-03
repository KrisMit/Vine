import axios from 'axios';

import React, { useState } from 'react';

import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Seo from '../../components/seo';
import UploadButtons from '../../components/uploadButtons';
import XDataGrid from '../../components/xDataGrid';

const ariaLabel = { 'aria-label': 'description' };

const NftCreateMediaPage = () => {
  const [value, setValue] = useState({
    name: '',
    description: '',
    file_type: '',
    role: '',
  });

  const handleChange = e => setValue({ ...value, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({
      data: {
        name: value.name,
        description: value.description,
        file_type: value.file_type,
        role: value.role,
      },
    });

    const baseUrl = process.env.GATSBY_API_URL || 'http://localhost:1337/api';
    const config = {
      method: 'post',
      url: `${baseUrl}/medias/`,
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
    //clears form after submit
    setValue({
      name: '',
      description: '',
      file_type: '',
      role: '',
    });
  };

  const columns = [
    { field: 'id', headerName: 'ID', editable: false },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'desc',
      headerName: 'Description',
      editable: true,
      width: 250,
      flex: 0.5,
    },
    {
      field: 'file_type',
      headerName: 'File Type',
      editable: false,
      width: 150,
    },
    {
      field: 'role',
      headerName: 'Role',
      editable: true,
      width: 140,
      flex: 0.2,
    },
  ];

  const rows = [
    // {
    //   id: 1,
    //   name: "Name1",
    //   desc: "This is test 1",
    //   file_type: "jpg",
    //   role: "role1",
    // },
    // {
    //   id: 2,
    //   name: "Name2",
    //   desc: "This is test 2",
    //   file_type: "jpg",
    //   role: "role2",
    // },
    // {
    //   id: 3,
    //   name: "Name3",
    //   desc: "This is test 3",
    //   file_type: "avi",
    //   role: "role3",
    // },
  ];

  const disableSelectionOnClick = false;
  const checkboxSelection = true;
  const autoHeight = false;

  const handleUpload = e => {
    console.log('radi');
  };

  return (
    <>
      <>
        <Seo title="Vine investments - publisher NFT create Rights" />
        <Box style={styles.header}>
          <h1>NFT Create - Media</h1>
        </Box>
        <h1 style={styles.subtitle}>Media</h1>
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
            placeholder="Description"
            name="description"
            value={value.description}
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
        </Box>
        <div style={styles.buttonGroupAction}>
          {/* <UploadButtons
            onClick={handleUpload}
          
          >
            Upload
          </UploadButtons> */}
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
        </div>

        <Box style={styles.tableContainer}>
          <XDataGrid
            paramRows={rows}
            paramColumns={columns}
            paramCheckboxSelection={checkboxSelection}
            paramAutoHeight={autoHeight}
            paramDisableSelectionOnClick={disableSelectionOnClick}
          />

          {/* <DataGrid checkboxSelection disableSelectionOnClick autoHeight style={styles.tableGrid}
          rows={rows}
          columns={columns}>
        </DataGrid> */}
        </Box>

        <Box style={styles.buttonGroupAction}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Download</Button>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </ButtonGroup>
        </Box>

        {/* <TableMedia /> */}
      </>
    </>
  );
};

export default NftCreateMediaPage;

const styles = {
  buttonGroupAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
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
  input: {
    display: 'block',
    width: 300,
    margin: 'auto',
    paddingTop: 10,
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
  tableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableGrid: {
    height: '100%',
    width: '100%',
  },
};
