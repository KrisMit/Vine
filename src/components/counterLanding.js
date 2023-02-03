import React, { useState } from 'react';

import { AnchorLink } from 'gatsby-plugin-anchor-links';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

import Countdown from '../components/countdown';
import vineVerified from '../images/Vine Verify-LOGO-transparent.png';
import bg from '../images/video/landing-bg.gif';

function CounterLanding(props) {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box style={styles.container}>
      <Box>
        <Countdown date={`${year}-06-30T11:00:00`} />
        <Typography
          component="div"
          sx={{
            position: { md: 'relative' },
            fontFamily: 'Lobster',
            fontSize: { xs: '1.5rem', md: '4.125rem' },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // fontWeight: 'bold',
            color: 'white',
            marginTop: 5,
          }}
        >
          {/* Change text on 23rd to 'The Stuff is Here!' */}
          The Stuff is Launching Soon!
        </Typography>
        <Typography
          component="div"
          sx={{
            position: { md: 'relative' },
            fontFamily: 'Montserrat',
            fontSize: { xs: 12, md: 20 },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            margin: 2,
          }}
        >
          {/* Change text on 23rd to 'Iconic 80s campy horror classic THE STUFF from prolific filmmaker Larry Cohen is a high-end NFT collection of licensed characters based on its unique universe.' */}
          Iconic 80s campy horror classic THE STUFF from prolific filmmaker Larry Cohen is coming to market <br /> with
          a high-end NFT collection of licensed characters based on its unique universe.{' '}
          <div style={{ marginBottom: 25 }} />
          Presale Begins June 28 <br /> Public Sale Begins June 30{' '}
        </Typography>
        <Box style={styles.buttonGroupAction} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            size="small"
            sx={styles.button}
            noWrap
            // change link on 23rd to href="/marketplace"
            href="/#signUp"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {/* change text on 23rd to 'Visit the Marketplace' */}
            {'SIGN UP FOR PRESALE'}
          </Button>

          <Button
            size="small"
            sx={styles.button}
            noWrap
            // href="https://discord.com/invite/WeE5HWhUyT"
            href="/#teaser"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {'WATCH TRAILER'}
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }} style={styles.buttonGroupActionSmall}>
          <Box>
            <Button
              size="small"
              sx={styles.button}
              noWrap
              // change link on 23rd to href="/marketplace"
              href="/#signUp"
              // target="_blank"
              rel="noopener noreferrer"
            >
              {/* change text on 23rd to 'Visit the Marketplace' */}
              {'SIGN UP FOR PRESALE'}
            </Button>
            <Button
              size="small"
              sx={styles.button}
              noWrap
              // href="https://discord.com/invite/WeE5HWhUyT"
              href="/#teaser"
              // target="_blank"
              rel="noopener noreferrer"
            >
              {'WATCH TRAILER'}
            </Button>
          </Box>
        </Box>
      </Box>{' '}
      <div>
        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'WATCH TEASER'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">COMING SOON.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} autoFocus>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
        <AnchorLink to="/#verified" onAnchorLinkClick={() => props.ExpPanelChange('panel2')}>
          {' '}
          <img src={vineVerified} alt="" height="70" width="160" />
        </AnchorLink>
        {/* <a href="/#verified">
          {' '}
          <img src={vineVerified} alt="" height="70" width="160" />
        </a> */}
      </div>
    </Box>
  );
}

export default CounterLanding;

const styles = {
  button: {
    display: 'block',
    width: 250,
    hieght: 150,
    backgroundColor: 'rgb(0, 246, 254)',
    color: 'rgb(0, 8, 45)',
    borderRadius: 18,
    flexWrap: 'noWrap',
    marginRight: 3,
    marginLeft: 3,
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    marginBottom: { xs: 2, md: 3 },
    marginTop: { xs: 5, md: 0 },
    textAlign: 'center',
    fontFamily: 'Montserrat',
    // '&:hover': {
    //   backgroundColor: 'rgb(0, 246, 254)',
    //   color: 'rgb(0, 8, 45)',
    // },
    '&:hover': {
      boxShadow: '0 0 15px rgba(0, 246, 254, 0.9)',
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
  },
  buttonGroupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    display: { xs: 'none', md: 'flex' },
  },
  buttonGroupActionSmall: {
    display: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    display: { xs: 'flex', md: 'none' },
  },
  container: {
    backgroundImage: `url(${bg})`,
    height: '100%',
    // extend: 'background',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};
