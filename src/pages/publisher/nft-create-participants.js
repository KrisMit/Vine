import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

import Seo from '../../components/seo';
import XDataGrid from '../../components/xDataGrid';
//import { getData, getOne, deleteOne, editOne } from '../services/participant';
import ServiceClient from '../../services/serviceClient';

const ariaLabel = { 'aria-label': 'description' };

const NftCreateParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);

  //console.log("participants: ", participants);

  const getParticipants = async () => {
    const response = await ServiceClient.get('/participants').catch(err => console.log(err));
    if (response && response.data) {
      setParticipants(response.data);
    }
  };

  useEffect(() => {
    getParticipants();
  }, []);

  const disableSelectionOnClick = false;
  const checkboxSelection = true;
  const autoHeight = false;

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, editable: false, flex: 0.1 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      width: 150,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'effective',
      headerName: 'Effective %',
      editable: true,
      flex: 0.2,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 250,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      type: 'phone',
      width: 150,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'payment_method',
      headerName: 'Payment Method',
      width: 150,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'payment_details',
      headerName: 'Payment Details',
      width: 240,
      editable: true,
      flex: 0.4,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      flex: 0.2,
    },
  ];

  return (
    <>
      <Seo title="Vine investments - publisher NFT create Participants" />
      <Box style={styles.header}>
        <h1>NFT Create - Participants</h1>
      </Box>
      <h1 style={styles.subtitle}>Participants</h1>
    </>
  );
};

export default NftCreateParticipantsPage;

const styles = {
  buttonGroupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
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
  input: {
    display: 'block',
    width: 300,
    margin: 'auto',
    paddingTop: 10,
  },
};
