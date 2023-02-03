// import {Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle  }from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Box, flex } from '@mui/system';
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
  styled,
} from '@mui/material';
import ServiceClient from '../services/serviceClient';
import { validateEmail, validateName, validatePhone } from '../utils/validation';

import '@fontsource/lobster';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 12,
    marginBottom: 25,
    width: {
      xs: 180,
      sm: 180,
      md: 250,
      lg: 250,
      xl: 250,
    },

    '&:hover': {
      backgroundColor: 'white',
    },
    '&:blur': {
      backgroundColor: 'white',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
    },
    '& .MuiFormHelperText-root': {
      backgroundColor: '#fff',
    },
  },
  '& #inputEmail-helper-text': {
    position: 'absolute',
    bottom: 3,
    color: 'rgb(0, 246, 254)',
  },
  '& #inputPhone-helper-text': {
    position: 'absolute',
    bottom: 3,
    color: 'rgb(0, 246, 254)',
  },
  '& #inputName-helper-text': {
    position: 'absolute',
    bottom: 3,
    color: 'rgb(0, 246, 254)',
  },
});

const SignUpForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    discord_fl: false,
    app_fl: false,
    proccessed_fl: false,
  });

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const [formValid, setFormValid] = useState(false);

  const handleChange = prop => e => {
    setFormData({ ...formData, [prop]: e.target.value });
  };

  const addInterest = async e => {
    e.preventDefault();
    const data = JSON.stringify({
      data: {
        name: formData.name,
        surname: formData.surname,
        phone: formData.phone,
        email: formData.email,
        discord_fl: false,
        app_fl: false,
        proccessed_fl: false,
      },
    });

    const response = await ServiceClient.post('/marketing-interests', data).catch(err => console.log(err));
    if (response && response.data) {
      setOpenDialog(true);
      setFormData({
        name: '',
        surname: '',
        phone: '',
        email: '',
        discord_fl: false,
        app_fl: false,
        proccessed_fl: false,
      });
    }
  };

  useEffect(() => {
    if (validateEmail(formData.email) && validateName(formData.name)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [validateEmail(formData.email) && validateName(formData.name)]);

  return (
    <Box id="signUp" style={styles.containerSignUp}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            width: {
              xs: 350,
              sm: 400,
              md: 600,
              lg: 650,
              xl: 650,
            },
            height: {
              xs: 400,
              sm: 400,
              md: 430,
              lg: 430,
              xl: 430,
            },
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            // marginTop: 5,
            marginBottom: 5,
            backgroundColor: 'rgb(0, 24, 48, 0.7)',
            fontFamily: 'Montserrat',
            boxShadow: '0 1px 22px #FFFF',
            '&:hover': {
              boxShadow: '0 2px 32px #74CFFE',
            },
          }}
        >
          <CardContent style={{ height: 1 }}>
            <Typography
              sx={{
                fontSize: {
                  md: 48,
                  xs: 28,
                },
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexWrap: 'nowrap',
                // fontWeight: 'bold',
                marginTop: '2%',
                marginBottom: '2%',
                fontFamily: 'Lobster',
              }}
            >
              {'Enough is Never Enough '}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: 17,
                  xs: 12,
                },
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexWrap: 'nowrap',
                // fontWeight: 'bold',
                marginTop: '2%',
                marginBottom: '8%',
                fontFamily: 'Montserrat',
              }}
            >
              {'Stay informed about future drops and updates.'}
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'column',
                  lg: 'column',
                  xl: 'column',
                },
                justifyContent: 'center',
                alignItems: 'center',
              }}
              noValidate
              autoComplete="off"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: {
                    xs: 220,
                    sm: 240,
                    md: 390,
                    lg: 400,
                    xl: 400,
                  },
                }}
              >
                <CssTextField
                  id="inputName"
                  required
                  placeholder="Name (required)"
                  error={!validateName(formData.name) && formData.name}
                  size="small"
                  name="name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  defaultValue="Name"
                  helperText={!validateName(formData.name) && formData.name ? 'Please enter a valid name' : ''}
                  // sx={styles.inputField}
                />

                <CssTextField
                  id="inputEmail"
                  required
                  error={!validateEmail(formData.email) && formData.email}
                  size="small"
                  placeholder="Email (required)"
                  name="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  defaultValue="Email"
                  helperText={!validateEmail(formData.email) && formData.email ? 'Please enter a valid email' : ''}
                  // sx={styles.inputField}
                />

                <CssTextField
                  id="inputPhone"
                  // required
                  size="small"
                  error={!validatePhone(formData.phone) && formData.phone}
                  placeholder="Phone (optional)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  defaultValue="+439395232"
                  helperText={
                    !validatePhone(formData.phone) && formData.phone ? 'Please enter a valid phone number' : ''
                  }
                  // sx={styles.inputField}
                />
              </Box>
              <Box
                sx={{
                  width: {
                    xs: 200,
                    sm: 200,
                    md: 390,
                    lg: 350,
                    xl: 350,
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button size="small" sx={styles.button} onClick={addInterest} disabled={!formValid}>
                  {'Sign Up for Presale'}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'SIGN UP'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you for signing up. We'll keep you updated on future drops and other news.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

//blah
export default SignUpForm;

const styles = {
  containerSignUp: {
    // backgroundImage: `url(${backgroundSignUp})`,
    extend: 'background',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
  button: {
    display: flex,
    // marginLeft: {
    //   xs: 0,
    //   sm: 0,
    //   md: 0,
    //   lg: 0,
    //   xl: 0,
    // },
    // marginTop: {
    //   xs: 0,
    //   sm: 0,
    //   md: 0,
    //   lg: 0,
    //   xl: 0,
    // },
    width: {
      xs: 220,
      sm: 240,
      md: 390,
      lg: 350,
      xl: 350,
    },
    // height: {
    //   xs: 28,
    //   md: 32,
    // },
    backgroundColor: 'rgb(0, 246, 254)',
    color: 'rgb(0, 8, 45)',
    '&:hover': {
      boxShadow: '0 0 15px rgba(0, 246, 254, 0.9)',
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    '&:disabled': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
      // borderColor: 'rgba(0, 246, 254, 0.3) !important',
    },
    borderRadius: 18,
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    fontFamily: 'Montserrat',
  },
  inputField: {
    display: flex,
    backgroundColor: 'white',
    width: {
      xs: 200,
      sm: 200,
      md: 250,
      lg: 250,
      xl: 250,
    },
    height: {
      xs: 28,
      md: 32,
    },
    fontSize: {
      xs: 12,
      md: 16,
    },
    marginTop: 1,
    marginBottom: 1,
    borderRadius: {
      xs: 15,
      md: 18,
      lg: 18,
    },
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
};
