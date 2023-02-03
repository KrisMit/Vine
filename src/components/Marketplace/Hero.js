import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import heroBanner from './image/heroBanner.gif';

export function Hero({ setOpen, open, selectedCollection }) {
  return (
    <Container
      // maxWidth="xl"
      no-gutters
      maxWidth="100%"
      style={styles.hero}
    >
      <Typography
        sx={{
          fontFamily: 'Lobster',
          textalign: 'center',
          color: 'white',
          // fontSize: { xs: 34, sm: 34, md: 40, lg: 42, xl: 44 },
          fontSize: { xs: '1.5rem', md: '4.125rem' },

          flexWrap: 'wrap',
          display: 'grid',
          textAlign: 'center',
        }}
      >
        The Stuff is Here!
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Montserrat',
          color: 'white',
          // margin: '2% !important',
          fontSize: { xs: 12, sm: 14, md: 16, lg: 20, xl: 20 },
          flexWrap: 'wrap',
          display: 'grid',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginLeft: { xs: '10%', md: '22%' },
          marginRight: { xs: '10%', md: '22%' },
          marginTop: '2%',
        }}
      >
        Welcome to THE STUFF marketplace featuring a high-end NFT collection of licensed characters based on the iconic
        80s campy horror classic THE STUFF from prolific filmmaker Larry Cohen.
        {/* <ArrowBackIcon
          style={open ? styles.backButton : styles.hidden}
          onClick={() => {
            setOpen(false);
          }}
        >
          Go Back
        </ArrowBackIcon> */}
      </Typography>
    </Container>
  );
}

const styles = {
  button: {
    backgroundColor: 'rgb(0, 8, 45)',
    width: 100,
    color: 'white',
    marginTop: 10,
    marginLeft: 42,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    height: 30,
    elevation: 0,
  },

  hero: {
    backgroundImage: `url(${heroBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    maxWidth: '100%',
    paddingTop: '100px',
    paddingBottom: '20px',
    fontWeight: 'bold',
    color: 'white',
    padding: 'auto 0',
  },
};
