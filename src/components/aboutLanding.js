import React from 'react';

import { Box, Typography } from '@mui/material';

import backgroundAbout from '../images/about.png';

const AboutLanding = () => {
  return (
    <Box id="about">
      <Box style={styles.groupAction}>
        <Box
          sx={{
            // display: { xs: 'none', md: 'flex' },
            width: { xs: '130%', sd: '130%', md: '100%' },
          }}
        >
          <img
            src={backgroundAbout}
            height="100%"
            width="100%"
            backgroundRepeat={'no-repeat'}
            style={{ display: 'flex' }}
          />
        </Box>
        <Box
          style={{
            padding: 12,
            paddingLeft: 42,
          }}
        >
          {' '}
          <Typography
            noWrap
            component="div"
            style={styles.title}
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontSize: 55,
            }}
          >
            About The Stuff
          </Typography>
          <Typography
            style={styles.innerWrapper}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Sweet. Soft. Fluffy. Everyone who’s ever tasted it can’t get enough of it. And once you’ve had it, you’ll
            never be the same again. Ever.
            <div style={{ marginBottom: 25 }} />
            What is IT?
            <div style={{ marginBottom: 25 }} />
            Strange white liquid bubbles from the ground when a miner discovers it and decides the best thing to do is
            have a taste. Pressed by a coworker on his questionable decision, he shovels a handful of the viscous goo
            over and proclaims “who cares where it's from or how it's made when it tastes this good.” The men engorge
            themselves and easily sell their new discovery to a major corporation.
            <div style={{ marginBottom: 25 }} />
            Branded by a million-dollar marketing agency, THE STUFF is released to the world in a shiny package for the
            masses to mindlessly consume. And they can’t get enough. What’s alarming though, is that as people shovel
            case after case into their mouths, they start behaving erratically, violently, and not at all like
            themselves. Until they die off one by one.
            <div style={{ marginBottom: 25 }} />
            This is what The Stuff really is. Unbeknownst to all, it’s a parasitic organism that takes over its host,
            turns them into zombie-like creatures, and consumes them until they are… no more.
            {/* <br /> */}
          </Typography>
        </Box>
      </Box>

      <Box style={styles.groupAction}>
        <Box>
          <Typography style={styles.innerWrapper11} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography
              component="div"
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Lobster',
                color: 'white',
                marginBottom: 2,
                fontSize: 38,
              }}
            >
              About The Stuff
            </Typography>
            Sweet. Soft. Fluffy. Everyone who’s ever tasted it can’t get enough of it. And once you’ve had it, you’ll
            never be the same again. Ever.
            <div style={{ marginBottom: 15 }} />
            What is IT?
            <div style={{ marginBottom: 15 }} />
            Strange white liquid bubbles from the ground when a miner discovers it and decides the best thing to do is
            have a taste. Pressed by a coworker on his questionable decision, he shovels a handful of the viscous goo
            over and proclaims “who cares where it's from or how it's made when it tastes this good.” The men engorge
            themselves and easily sell their new discovery to a major corporation.
            <div style={{ marginBottom: 15 }} />
            Branded by a million-dollar marketing agency, THE STUFF is released to the world in a shiny package for the
            masses to mindlessly consume. And they can’t get enough. What’s alarming though, is that as people shovel
            case after case into their mouths, they start behaving erratically, violently, and not at all like
            themselves. Until they die off one by one.
            <div style={{ marginBottom: 15 }} />
            This is what The Stuff really is. Unbeknownst to all, it’s a parasitic organism that takes over its host,
            turns them into zombie-like creatures, and consumes them until they are… no more.
            <div style={{ marginBottom: 25 }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutLanding;

const styles = {
  title: {
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Lobster',
    alignItems: 'left',
    justifyContent: 'left',
    color: 'white',
  },
  groupAction: {
    backgroundColor: '#141C1E',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    flexDirection: 'column',
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    margin: 20,
    color: 'white',
    fontFamily: 'Montserrat',
  },
  innerWrapper11: {
    fontSize: 12,
    display: { xs: 'flex', md: 'none' },
    color: 'white',
    textAlign: 'left',
    margin: 20,
    flexDirection: 'column',
    fontFamily: 'Montserrat',
    alignItems: 'left',
    justifyContent: 'left',
  },
};
