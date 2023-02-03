import React from 'react';

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import backgroundJoin from '../images/BGjoin.png';
import blue from '../images/blue.png';
import discord from '../images/discord.png';
import instagram from '../images/instagram.png';
import joinSecond from '../images/joinSecondHalf.png';
import pink from '../images/pink.png';
import reddit from '../images/reddit.png';
import telegram from '../images/telegram.png';
import twitter from '../images/twitter-sign.png';
import youtube from '../images/youtube.png';

const JoinCommunityLanding = () => {
  return (
    <Box style={styles.containerJoin}>
      <Box
        sx={{
          // display: { xs: 'flex', md: 'none' },
          display: 'flex',
          flexDirection: 'row',
          margin: '2%',
          width: { xs: '40%', sm: '70%', md: '90%', lg: '50%', xl: '50%' },
        }}
      >
        <img
          src={pink}
          backgroundRepeat={'no-repeat'}
          style={{ marginTop: '5%', marginLeft: '5%', marginRight: '15%' }}
        />
        <img
          src={blue}
          backgroundRepeat={'no-repeat'}
          style={{ marginTop: '5%', marginRight: '5%', marginLeft: '15%' }}
        />
      </Box>
      <Box sx={{ width: { xs: 1, md: 1, lg: 1 / 2, xl: 1 / 2 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginBottom: '3%',
            textAlign: 'center',
          }}
        >
          <Typography
            component="div"
            sx={{
              display: 'flex',
              fontFamily: 'Lobster',
              fontSize: { xs: 38, md: 55 },
              fontWeight: 'bold',
              color: 'white',
              margin: 3,
              alignContent: 'center',
              alignItems: 'center',
              // marginTop: 35,
            }}
          >
            Join The Stuff Invasion
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginBottom: '3%',
              // marginTop: '3%',
              textAlign: 'center',
              fontWeight: '400',
              fontSize: { xs: 14, md: 16, lg: 20, xl: 20 },
              color: 'white',
              // marginRight: '50%',
              fontFamily: 'Montserrat',
            }}
          >
            Have any questions about the project? <br /> Join the discord for more information.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 2,
            marginTop: '30px',
            fontFamily: 'Montserrat',
          }}
        >
          <Button
            id="discordthestuff"
            size="small"
            noWrap
            href="https://discord.com/invite/WeE5HWhUyT"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              width: 350,
              backgroundColor: 'rgb(0, 246, 254)',
              color: 'rgb(0, 8, 45)',
              '&:hover': {
                boxShadow: '0 0 15px rgba(0, 246, 254, 0.9)',
                backgroundColor: 'rgb(0, 246, 254)',
                color: 'rgb(0, 8, 45)',
              },
              borderRadius: 18,
              flexWrap: 'noWrap',
              marginBottom: { xs: 5, sm: 5, md: 10 },
              marginRight: 3,
              marginLeft: 3,
              borderColor: 'rgb(0, 246, 254) !important',
              border: 2,
              fontFamily: 'Montserrat',
            }}
          >
            Join Discord Group
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            justifyContent: 'center',
            fontFamily: 'Montserrat',
            alignItems: 'center',
            // marginTop: 2,
            paddingBottom: { xs: 1, sm: 2, md: 6 },
            // marginBottom: 3,
          }}
        >
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
          <div style={styles.innerWrapperSocial}>
            <a href="https://www.instagram.com/dvlp_nfts/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} />
            </a>
          </div>
          <div style={styles.innerWrapperSocial}>
            <a href="https://www.reddit.com/r/dVLP_NFTs/" target="_blank" rel="noopener noreferrer">
              <img src={reddit} />
            </a>
          </div>
          <div style={styles.innerWrapperSocial}>
            <a href="https://t.me/+B_qQYq1ZazplNGI8" target="_blank" rel="noopener noreferrer">
              <img src={telegram} />
            </a>
          </div>
        </Box>

        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // paddingBottom: {xs:1, sm:2, md:6},
            fontFamily: 'Montserrat',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Montserrat',
            }}
          >
            <div style={styles.innerWrapperSocial}>
              <a href="https://twitter.com/dVLP_NFTs" target="_blank" rel="noopener noreferrer">
                <img src={twitter} margin={2} />
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Montserrat',
              marginBottom: 3,
            }}
          >
            <div style={styles.innerWrapperSocial}>
              <a href="https://www.instagram.com/dvlp_nfts/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} />
              </a>
            </div>
            <div style={styles.innerWrapperSocial}>
              <a href="https://www.reddit.com/r/dVLP_NFTs/" target="_blank" rel="noopener noreferrer">
                <img src={reddit} />
              </a>
            </div>
            <div style={styles.innerWrapperSocial}>
              <a href="https://t.me/+B_qQYq1ZazplNGI8" target="_blank" rel="noopener noreferrer">
                <img src={telegram} />
              </a>
            </div>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          width: '100%',
        }}
      >
        <img src={joinSecond} height="100%" width="100%" backgroundRepeat={'no-repeat'} />
      </Box>
    </Box>
  );
};

export default JoinCommunityLanding;

const styles = {
  containerJoin: {
    backgroundImage: `url(${backgroundJoin})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: { xs: '50%', sm: '50%', md: 'cover' },
  },
  innerWrapperSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: '1%',
    marginLeft: '1%',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat',
  },
};
