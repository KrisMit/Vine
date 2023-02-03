import * as React from 'react';

import { Box, Button, Card, CardActions, CardContent, Input, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import PhoneFormat from '../components/phoneFormat';

const useStyles = makeStyles({
  inputControl: {
    '&:focus': {
      marginLeft: '80 !important',
    },
  },
});

const ariaLabel = { 'aria-label': 'description' };

export default function BasicCard() {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: 'rgb(0, 8, 45, 0.6)',
          height: 300,
          width: 800,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'Montserrat',
        }}
      >
        <CardContent style={{ height: 1 }}>
          <Typography
            variant="body3"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontSize: 30,
              fontFamily: 'sans-serif',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexWrap: 'nowrap',
              fontWeight: 'bold',
              marginTop: '2%',
              fontFamily: 'Montserrat',
            }}
          >
            {' '}
            SIGN UP TODAY
          </Typography>
        </CardContent>
        {/* <Typography style={styles.text} color="text.secondary" gutterBottom>
                        THANKS FOR YOUR INTEREST!
                    </Typography > */}
        {/* <Typography
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(0, 8, 45)',
              flexWrap: 'nowrap',
              fontWeight: 'bold',
              marginTop: '2%',
              fontSize: 24,
            }}
          >
            THANKS FOR YOUR INTEREST!
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'sans-serif',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(0, 8, 45)',
              flexWrap: 'nowrap',
              fontWeight: 'bold',
              marginTop: '2%',
            }}
          >
            {' '}
            THANKS FOR YOUR INTEREST!
          </Typography> */}
        <div style={styles.buttonGroupAction}>
          <Box style={styles.container}>
            <Input sx={styles.input} placeholder=" Name" inputProps={ariaLabel} />
            <Input sx={styles.input} placeholder=" Email" inputProps={ariaLabel} />
            {/* <Input sx={styles.input} placeholder=" Phone Number" inputProps={ariaLabel} /> */}
            <PhoneFormat sx={styles.input}></PhoneFormat>
          </Box>
          <CardActions sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <Button size="small" sx={styles.button} noWrap>
            {" "}
            Sign up for our discord
          </Button> */}
          </CardActions>
          <CardActions sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button size="small" sx={styles.button}>
              I'm in
            </Button>
          </CardActions>

          <CardActions sx={{ display: { xs: 'flex', md: 'none' } }}>
            {/* <Button size="small" sx={styles.button1} wrap>
            {" "}
            Sign up for our discord
          </Button> */}
          </CardActions>
          <CardActions sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button size="small" sx={styles.button1}>
              I'm in
            </Button>
          </CardActions>

          <CardContent>
            {/* <Typography variant="body2" style={styles.text}>
                        Keep me posted with the latest info please!
                    </Typography> */}
          </CardContent>
        </div>
      </Card>

      {/* small screen */}
      <Card
        sx={{
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: 'rgb(0, 8, 45, 0.6)',
          height: 300,
          width: 300,
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'Montserrat',
        }}
      >
        <CardContent style={{ height: 1 }}>
          <Typography
            sx={{
              textAlign: 'center',
              display: { xs: 'flex', md: 'none' },
              fontSize: 16,
              fontFamily: 'Montserrat',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexWrap: 'nowrap',
              fontWeight: 'bold',
              marginTop: '2%',
              marginBottom: '2%',
              fontFamily: 'Montserrat',
            }}
          >
            {' '}
            SIGN UP TODAY
          </Typography>
        </CardContent>

        <Box marginTop={5}>
          <Input className={classes.inputControl} sx={styles.input1} placeholder=" Name" inputProps={ariaLabel} />
          <Input sx={styles.input1} placeholder=" Email" inputProps={ariaLabel} />
          {/* <Input sx={styles.input1} placeholder=" Phone Number" inputProps={ariaLabel} /> */}
          <PhoneFormat></PhoneFormat>
          {/* <Input style={styles.input1} type="text" name="name" placeholder='First Name' /> */}
        </Box>
        <CardActions sx={{ display: { xs: 'flex', md: 'none' } }}>
          {/* <Button size="small" sx={styles.button1} wrap>
            {" "}
            Sign up for our discord
          </Button> */}
        </CardActions>
        <CardActions sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Button size="small" sx={styles.button1}>
            I'm in
          </Button>
        </CardActions>
        <CardContent>
          {/* <Typography variant="body2" style={styles.text}>
                        Keep me posted with the latest info please!
                    </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
}

const styles = {
  buttonGroupAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  container: {
    extend: 'center',
    flex: 1,
    paddingTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  input: {
    width: 250,
    display: 'block',
    backgroundColor: 'white',
    fontSize: 16,
    // textAlign: 'center',
    extend: 'center',
    display: { xs: 'none', md: 'flex' },
    borderRadius: 18,
    marginBottom: 2,
    marginLeft: 4,
    fontFamily: 'Montserrat',
    '&:focus': {
      marginLeft: 40,
    },
    padding: 0.5,
  },

  input1: {
    width: 180,
    display: 'block',
    backgroundColor: 'white',
    // display: { xs: 'flex', md: 'none' },
    fontSize: 12,
    borderRadius: 15,
    marginBottom: 2,
    marginTop: 2,
    fontFamily: 'Montserrat',
    '&:focus': {
      marginLeft: '180 !important',
    },
    padding: 0.5,
  },

  button: {
    display: 'block',
    width: 250,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    color: 'rgb(0, 246, 254)',
    borderRadius: 18,
    flexWrap: 'noWrap',
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    fontFamily: 'Montserrat',
  },

  button1: {
    width: 180,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    color: 'rgb(0, 246, 254)',
    borderRadius: 20,
    // flexWrap: 'wrap',
    fontSize: 12,
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    fontFamily: 'Montserrat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontWeight: 'bold',
  },

  buttonGroupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    marginTop: 80,
  },
};
