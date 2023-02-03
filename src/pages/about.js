import * as React from 'react';

import Box from '@mui/material/Box';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';
import background from '../images/DVLP-NFT-Landing-Page-B-BG.gif';
import logo from '../images/DVLPblue.png';
import instagram from '../images/InstagramBlue.png';
import greenStuff from '../images/green_stuff_transparent.png';
import greenStuffSmall from '../images/green_stuff_transparent_small.png';
import mute from '../images/muteBlue.png';
import reddit from '../images/redditBlue.png';
import twitter from '../images/twitterBlue.png';
import youtube from '../images/youtubeBlue.png';

const AboutPage = () => (
  <Box>
    <Seo title="DVLPNFT Powered by Vine Digital" />

    <Box style={styles.container}>
      <img
        // src={mute}
        //        backgroundRepeat={'no-repeat'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 60,
          marginLeft: '65%',
          position: 'relative',
        }}
      />
      <Box>
        <Box sx={styles.containerLogo} margin=" 0px auto">
          <img src={logo} style={{ display: 'flex' }} />
        </Box>

        <Box style={styles.containerSocial}>
          <div style={styles.wrapperSocial}>
            <a href="https://twitter.com/dVLP_NFTs" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />
            </a>
          </div>

          <div style={styles.wrapperSocial}>
            <a href="https://www.instagram.com/dvlp_nfts/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} />
            </a>
          </div>

          <div style={styles.wrapperSocial}>
            <a href="https://www.reddit.com/r/dVLP_NFTs/" target="_blank" rel="noopener noreferrer">
              <img src={reddit} />
            </a>
          </div>

          <div style={styles.wrapperSocial}>
            <a
              href="https://www.youtube.com/channel/UCeUOhAJfpmE39Mvv-l8wdCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} />
            </a>
          </div>
        </Box>
        <Box sx={styles.containerStuff}>
          <div style={styles.greenStuff}>
            <a href="https://www.dvlpnft.io/">
              <img src={greenStuff} height=" 300" weight="300" />
            </a>
          </div>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default AboutPage;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  containerSocial: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  containerLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: { xs: '40%', sm: '25%', md: '10%' },
  },

  wrapperSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: '1%',
    marginLeft: '1%',
    justifyContent: 'space-between',
  },

  greenStuff: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: '1%',
    marginLeft: '1%',
  },

  containerStuff: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: { xs: 'none', sm: 'none', md: 75 },
    marginTop: 7,
  },
};
