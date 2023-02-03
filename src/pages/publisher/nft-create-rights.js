import axios from 'axios';

import React, { useState } from 'react';

import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Seo from '../../components/seo';
import UploadButtons from '../../components/uploadButtons';
import XDataGrid from '../../components/xDataGrid';
import ServiceClient from '../../services/serviceClient';

const ariaLabel = { 'aria-label': 'description' };

const NftCreateRightsPage = () => {
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

    setValue({
      name: '',
      description: '',
      file_type: '',
      role: '',
    });
  };

  const disableSelectionOnClick = false;
  const checkboxSelection = true;
  const autoHeight = false;

  const columns = [
    { field: 'id', headerName: 'ID', editable: false, flex: 0.1 },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'description',
      headerName: 'Description',
      editable: true,
      width: 250,
      flex: 0.4,
    },
    { field: 'fileName', headerName: 'File Name', editable: true, flex: 0.3 },
    { field: 'fileType', headerName: 'File Type', editable: false, flex: 0.2 },
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
    //   name: 'Name1',
    //   description: 'File 1',
    //   fileName: 'file_new1.jpg',
    //   fileType: 'jpg',
    //   role: 'role1'
    // },
    // {
    //   id: 2,
    //   name: 'Name2',
    //   description: 'File 2',
    //   fileName: 'file_new2.avi',
    //   fileType: 'avi',
    //   role: 'role2'
    // },
    // {
    //   id: 3,
    //   name: 'Name3',
    //   description: 'File 3',
    //   fileName: 'file_new3.avi',
    //   fileType: 'avi',
    //   role: 'role3'
    // },
  ];

  return (
    <>
      <>
        <Seo title="Vine investments - publisher NFT create Rights" />
        <Box style={styles.header}>
          <h1>NFT Create - Rights</h1>
        </Box>
        <h1 style={styles.subtitle}>Rights ownership</h1>
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

        {/* <DropDown dropOptions={["Gold", "Silver", "Bronze"]} sx={{
          display: "flex",
          marginLeft: "40%",
          marginRight: "40%",
          backgroundColor: 'primary',
          marginTop: 4,
          marginBottom: 15,
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 25,
          position: 'absolute',
        }} /> */}

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
      </>
    </>
  );
};
export default NftCreateRightsPage;

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
};
