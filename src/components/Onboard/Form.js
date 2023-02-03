import React, { forwardRef, useEffect, useState } from 'react';

import { Box, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material/';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import ServiceClient from '../../services/serviceClient';
import { validateEmail, validateName, validatePhone } from '../../utils/validation';
import { GetWalletAddress } from '../useMetaMaskWallet';

export default function OnBoardForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [id, setId] = useState('');

  const [loaded, setLoaded] = useState(false);

  const address = GetWalletAddress();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => e => {
    setFormData({ ...formData, [prop]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formRequest = JSON.stringify({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
    });

    if (validateName(formData.name) && validateEmail(formData.email) && validatePhone(formData.phone)) {
      const formResponse = await ServiceClient.post('/web-users', formRequest).catch(err => console.log(err));
      if (formResponse && formResponse.data && formResponse.status === 200) {
        setLoaded(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
        });
      }
    }
    const getId = await ServiceClient.get(`/web-users`).catch(err => console.log(err));
    const userId = getId.data.data.map(item => {
      return item.id;
    });

    const walletRequest = JSON.stringify({
      data: {
        wallet_address: address[0],
        web_user: userId[userId.length - 1],
      },
    });
    const walletResponse = await ServiceClient.post('/meta-wallets', walletRequest).catch(err => console.log(err));

    window.location.reload();
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 3, mb: 2, backgroundColor: '#fff' }}>
      <div>
        <Typography color="#00082D" variant="h6" gutterBottom>
          Register Your Account
        </Typography>
        <FormControl sx={{ display: 'flex', justifyContent: 'center' }}>
          <FormControl sx={{ mt: 1, mb: 1 }}>
            <TextField
              placeholder="Name"
              defaultValue="Name"
              helperText={!validateName(formData.name) && formData.name ? 'Please enter a valid name' : ''}
              variant="outlined"
              required
              error={!validateName(formData.name) && formData.name}
              id="name"
              value={formData.name}
              onChange={handleChange('name')}
              label="Name"
            />
          </FormControl>
          <FormControl sx={{ mt: 1, mb: 1 }}>
            <TextField
              placeholder="Email"
              helperText={!validateEmail(formData.email) && formData.email ? 'Please enter a valid email' : ''}
              variant="outlined"
              required
              error={!validateEmail(formData.email) && formData.email}
              id="email"
              value={formData.email}
              onChange={handleChange('email')}
              label="Email"
            />
          </FormControl>
          <FormControl sx={{ mt: 1, mb: 1 }}>
            <TextField
              placeholder="Phone Number"
              helperText={!validatePhone(formData.phone) && formData.phone ? 'Please enter a valid phone' : ''}
              variant="outlined"
              error={!validatePhone(formData.phone)}
              id="phone"
              value={formData.phone && formData.phone.replace(/\D/g, '')}
              onChange={handleChange('phone')}
              label="Phone"
            />
          </FormControl>
          <FormControl sx={{ mt: 1, mb: 1 }}>
            <Button onClick={handleSubmit} style={{ marginTop: 5 }} variant="contained" color="primary">
              Submit
            </Button>
          </FormControl>
        </FormControl>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you for registering.
        </Alert>
      </Snackbar>
    </Box>
  );
}
