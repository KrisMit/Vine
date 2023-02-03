import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';

import backgroundJoin from '../images/BGjoin.png';
import backgroundTeaser from '../images/Teaser.png';
import discord from '../images/discord.png';
import twitter from '../images/twitter-sign.png';
import youtube from '../images/youtube.png';

export function JoinCommunity() {
  return (
    <div style={styles.containerJoin}>
      <Box sx={{ width: { xs: 1, md: 1 / 2 }, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Typography style={styles.innerWrapperJoin} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              color: 'white',
              margin: 5,
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            {'JOIN THE COMMUNITY '}
          </Typography>
          Have any questions about the project? <br /> Join the discord for more information.
        </Typography>

        <Typography style={styles.innerWrapperJoin1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Montserrat',
              alignItems: 'left',
              justifyContent: 'left',
              fontWeight: 'bold',
              color: 'white',
              margin: 5,
            }}
          >
            {'JOIN THE COMMUNITY '}
          </Typography>{' '}
          Have any questions about the project? <br /> Join the discord for more information.
        </Typography>

        <Box style={styles.buttonDiscord} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            size="small"
            sx={styles.buttonD}
            noWrap
            href="https://discord.com/invite/WeE5HWhUyT"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'JOIN DISCORD'}
          </Button>
        </Box>

        <Box style={styles.buttonDiscord1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Button
            size="small"
            sx={styles.buttonD1}
            noWrap
            href="https://discord.com/invite/WeE5HWhUyT"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'JOIN DISCORD'}
          </Button>
        </Box>

        <Box style={styles.container1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div style={styles.innerWrapper12}>
            <a href="https://twitter.com/dVLP_NFTs" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />
            </a>
          </div>

          <div style={styles.innerWrapper12}>
            <a href="https://discord.com/invite/WeE5HWhUyT" target="_blank" rel="noopener noreferrer">
              <img src={discord} />
            </a>
          </div>

          <div style={styles.innerWrapper12}>
            <a
              href="https://www.youtube.com/channel/UCeUOhAJfpmE39Mvv-l8wdCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} />
            </a>
          </div>
        </Box>

        <Box style={styles.containerSocial} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <div style={styles.innerWrapperSocial}>
            <a href="https://twitter.com/dVLP_NFTs" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />
            </a>
          </div>
          <div style={styles.innerWrapperSocial}>
            <a href="https://discord.com/invite/WeE5HWhUyT" target="_blank" rel="noopener noreferrer">
              <img src={discord} />
            </a>
          </div>

          <div style={styles.innerWrapperSocial}>
            <a
              href="https://www.youtube.com/channel/UCeUOhAJfpmE39Mvv-l8wdCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} />
            </a>
          </div>
        </Box>
      </Box>
    </div>
  );
}
const styles = {
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  containerTeaser: {
    backgroundImage: `url(${backgroundTeaser})`,
    extend: 'background',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  containerJoin: {
    backgroundImage: `url(${backgroundJoin})`,
    extend: 'background',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  containerJoin1: {
    backgroundImage: `url(${backgroundJoin})`,
    extend: 'background',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    // marginRight: '50%',
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'Montserrat',
  },

  containerSocial: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    display: { xs: 'flex', md: 'none' },
    fontFamily: 'Montserrat',
  },
  innerWrapperJoin: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: '3%',
    marginTop: '3%',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    color: 'white',
    // marginRight: '50%',
    fontFamily: 'Montserrat',
    display: { xs: 'none', md: 'flex' },
  },

  innerWrapperJoin1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: '3%',
    marginTop: '3%',
    textAlign: 'center',
    fontSize: 14,
    display: { xs: 'flex', md: 'none' },
    color: 'white',
    fontFamily: 'Montserrat',
  },

  innerWrapper12: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: '1%',
    marginLeft: '1%',
    justifyContent: 'space-between',
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'Montserrat',
  },

  innerWrapperSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: '1%',
    marginLeft: '1%',
    justifyContent: 'space-between',
    display: { xs: 'flex', md: 'none' },
    fontFamily: 'Montserrat',
  },

  title: {
    fontWeight: '800',
    fontSize: 32,
  },

  paragraph: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 22,
  },

  text: {
    fontFamily: 'Montserrat',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },

  text1: {
    extend: 'text',
    fontSize: '1.5vw',
    marginTop: '3%',
  },

  text2: {
    extend: 'text',
    fontSize: 10,
    flexWrap: 'wrap',
  },

  date: {
    extend: 'text',
    marginTop: 2,
    fontSize: '4vw',
  },

  coming: {
    extend: 'text',
    marginRight: '44%',
    marginTop: '2%',
    fontSize: '1.1vw',
    flexWrap: 'nowrap',
  },

  days: {
    extend: 'text',
    marginTop: 3,
    fontSize: '1vw',
  },

  buttonDiscord: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
    // marginRight: '50%',
    fontFamily: 'Montserrat',
  },

  buttonDiscord1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    fontFamily: 'Montserrat',
  },

  button: {
    display: 'block',
    width: 200,
    hieght: 150,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    color: 'rgb(0, 246, 254)',
    borderRadius: 18,
    flexWrap: 'noWrap',
    marginRight: 3,
    marginLeft: 3,
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },

  buttonD: {
    width: 350,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    color: 'rgb(0, 246, 254)',
    borderRadius: 18,
    flexWrap: 'noWrap',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    fontFamily: 'Montserrat',
    // marginLeft:'14%',
    display: { xs: 'none', md: 'flex' },
  },

  buttonD1: {
    width: 350,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    color: 'rgb(0, 246, 254)',
    borderRadius: 18,
    flexWrap: 'noWrap',
    marginRight: 3,
    marginLeft: 3,
    borderColor: 'rgb(0, 246, 254) !important',
    border: 2,
    display: { xs: 'flex', md: 'none' },
    fontFamily: 'Montserrat',
  },

  aboutParagraph: {
    marginBottom: 20,
    '@media (maxWidth: 767px)': {
      marginBottom: 0,
      fontFamily: 'Montserrat',
    },
  },
  headText: {
    position: 'relative',
  },
  textOnImage: {
    position: 'absolute',
    right: '50%',
    left: '50%',
    bottom: '15%',
  },
};
