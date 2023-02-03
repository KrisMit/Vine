import React from 'react';

import { Box, Typography } from '@mui/material';
import { style } from '@mui/system';

import backgroundTeaser from '../images/TeaserBackground.png';
import { ImportantDevices } from '@mui/icons-material';

const TeaserLanding = () => {
  return (
    <Box id="teaser" sx={styles.backgroundTeaser}>
      <Box style={styles.groupAction} sx={{ flexDirection: 'column' }}>
        <Box style={{ marginTop: 40 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <iframe
            // style={styles.video}
            src="https://www.youtube.com/embed/6Fn6PtHxCkM"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            title="video"
            width="860"
            height="515"
          />
        </Box>
        <Typography style={styles.innerWrapper} sx={{ display: { xs: 'none', md: 'flex' } }}>
          But you can help eliminate this alien threat by buying off as much as you can and incinerating it to oblivion,
          as obviously, eternal flames can kill them. But mind you, they’ve evolved into different varieties and have
          disguised themselves as legit ice cream flavors. Collect all, and you’ll be able to help destroy as much as
          15% of The Stuff on Earth.
          <br />
          Are you ready to take on this challenge? <br />
        </Typography>

        <Box style={{ marginTop: 20 }} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <iframe
            // style={styles.video}
            src="https://www.youtube.com/embed/6Fn6PtHxCkM"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            title="video"
            width="100%"
            height="250"
          />
        </Box>
        <Typography style={styles.innerWrapper11} sx={{ display: { xs: 'flex', md: 'none' } }}>
          {/* <p style={styles.aboutParagraph}>
          {' '} */}
          But you can help eliminate this alien threat by buying off as much as you can and incinerating it to oblivion,
          as obviously, eternal flames can kill them. But mind you, they’ve evolved into different varieties and have
          disguised themselves as legit ice cream flavors. Collect all, and you’ll be able to help destroy as much as
          15% of The Stuff on Earth.
          <br />
          Are you ready to take on this challenge? <br />
        </Typography>
      </Box>
    </Box>
  );
};

export default TeaserLanding;

const styles = {
  backgroundTeaser: {
    backgroundImage: `url(${backgroundTeaser})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },

  groupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerWrapper: {
    flexDirection: 'column',
    flex: 1,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 0,
    marginBottom: 30,
    marginLeft: '10%',
    marginRight: '10%',
    color: 'white',
    fontFamily: 'Montserrat',
  },
  innerWrapper11: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    // backgroundColor: 'rgb(0, 8, 45, 0.6)',
    fontFamily: 'Montserrat',
  },
  video: {
    width: { md: 560, xs: 360 },
    height: { md: 315, xs: 115 },
  },
};
