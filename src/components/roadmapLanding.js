import React from 'react';

import { Box, Typography } from '@mui/material';

import AlternateTimeline from '../components/alternateTimeline';
import SignUpForm from '../components/signUpForm';
import aqua from '../images/Aqua.png';
import cinamon from '../images/Cinamon.png';
import jelly from '../images/Jelly.png';
import backgroundRoadmap from '../images/bg-1920-v2.jpg';

const RoadmapLanding = () => {
  return (
    <Box id="timeline" style={styles.containerRoadmap}>
      <Typography
        noWrap
        component="div"
        sx={{
          display: 'flex',
          fontFamily: 'Lobster',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: { xs: 38, md: 55 },
          paddingTop: { xs: 1, md: 5 },
          paddingBottom: { xs: 1, md: 2 },
        }}
      >
        Roadmap
      </Typography>
      {/* <Typography style={styles.innerWrapperRoad} sx={{ display: { xs: 'none', md: 'flex' } }}>
        Iconic 80s campy horror classic THE STUFF from prolific filmmaker Larry Cohen is coming to market <br /> with a
        high-end NFT collection of licensed characters based on its unique universe.
      </Typography>

      <Typography style={styles.innerWrapperRoad11} sx={{ display: { xs: 'flex', md: 'none' } }}>
        Iconic 80s campy horror classic THE STUFF from prolific filmmaker Larry Cohen is coming to market with a
        high-end NFT collection of licensed characters based on its unique universe.
      </Typography> */}
      <AlternateTimeline />

      <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <Box sx={{ ...styles.box1 }}>
            <Box style={{ marginTop: '6%' }}>
              <Typography
                sx={{
                  fontFamily: 'Lobster',
                  color: 'rgb(0, 8, 45)',
                  marginTop: '2%',
                  fontSize: { xs: 24, sm: 24, md: 30, lg: 32, xl: 34 },
                  flexWrap: 'wrap',
                  display: 'grid',
                  textAlign: 'left',
                  marginLeft: '5%',
                }}
              >
                Inception
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  color: 'rgb(0, 8, 45)',
                  marginTop: '2% !important',
                  fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 18 },
                  margin: '5%',
                  flexWrap: 'wrap',
                  display: 'grid',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                This is your chance to enter the Stuff universe. NFTs will be minted on May 3, 2022, with a revealing
                process for each of the 2,109 NFTs. This limited supply release (111 Tier 1 NFTs and 333 NFTs subsequent
                Tiers) will be immediately available for trading on OpenSea.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src={jelly}
          height="50%"
          width="30%"
          style={{
            marginTop: -20,
            marginLeft: '35%',
          }}
        ></img>

        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ ...styles.box }}>
            <Box style={{ marginTop: '6%' }}>
              <Typography
                sx={{
                  fontFamily: 'Lobster',
                  textalign: 'center',
                  color: 'rgb(0, 8, 45)',
                  marginLeft: '5%',
                  fontSize: { xs: 24, sm: 24, md: 30, lg: 32, xl: 34 },
                  flexWrap: 'wrap',
                  display: 'grid',
                  textAlign: 'left',
                }}
              >
                Existence
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  color: 'rgb(0, 8, 45)',
                  marginTop: '2% !important',
                  fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 18 },
                  margin: '5%',
                  flexWrap: 'wrap',
                  display: 'grid',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                Those who take ownership of the Stuff collection will start receiving exclusive benefits in return.
                Owners of each related Tier will have access to private sales of future launches, private channels,
                exclusive giveaways, and airdrops.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src={aqua}
          height="50%"
          width="30%"
          style={{
            marginTop: -20,
            marginLeft: '35%',
          }}
        ></img>

        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            height: '14%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ ...styles.box2 }}>
            <Box style={{ marginTop: '6%' }}>
              <Typography
                sx={{
                  fontFamily: 'Lobster',
                  textalign: 'center',
                  color: 'rgb(0, 8, 45)',
                  marginLeft: '5%',
                  fontSize: { xs: 24, sm: 24, md: 30, lg: 32, xl: 34 },
                  flexWrap: 'wrap',
                  display: 'grid',
                  textAlign: 'left',
                }}
              >
                Domination
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  color: 'rgb(0, 8, 45)',
                  marginTop: '2% !important',
                  fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 18 },
                  margin: '5%',
                  flexWrap: 'wrap',
                  display: 'grid',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                Breakthrough commercial licensing and B2C2B opportunities will be unlocked as The Stuff collection is
                rolled out. Functional utilities will include royalty participations, on-chain environment
                interoperability, gaming, and metaverse integration for discrete form factor usage. Domination means
                that all Stuff stakeholders will have the off-chain to on-chain content licensing and IP management
                tools to experience NFTs in a new way.
              </Typography>
            </Box>
          </Box>
        </Box>
        <img
          src={cinamon}
          height="50%"
          width="30%"
          style={{
            marginTop: -20,
            marginLeft: '35%',
          }}
        ></img>
      </Box>

      <SignUpForm />
    </Box>
  );
};

export default RoadmapLanding;

const styles = {
  containerRoadmap: {
    backgroundImage: `url(${backgroundRoadmap})`,
    extend: 'background',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
  // innerWrapperRoad: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flex: 1,
  //   textAlign: 'center',
  //   fontWeight: '400',
  //   fontSize: 20,
  //   color: 'white',
  //   fontFamily: 'Montserrat',
  // },

  // innerWrapperRoad11: {
  //   extend: 'innerWrapper',
  //   fontSize: 12,
  //   display: { xs: 'flex', md: 'none' },
  //   color: 'white',
  //   textAlign: 'center',
  //   fontFamily: 'Montserrat',
  //   margin: 20,
  // },

  box: {
    backgroundColor: 'rgb(0, 246, 254, 0.8)',
    borderRadius: 10,
    width: { xs: '80%', sm: '60%' },
    height: { xs: 200, sm: 200 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: 'rgb(221, 221, 221, 0.8)',
    borderRadius: 10,
    width: { xs: '80%', sm: '60%' },
    height: { xs: 200, sm: 200 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    backgroundColor: 'rgb(221, 221, 221, 0.8)',
    borderRadius: 10,
    width: { xs: '80%', sm: '60%' },
    height: { xs: 290, sm: 270 },
    justifyContent: 'center',
    alignItems: 'center',
  },
};
