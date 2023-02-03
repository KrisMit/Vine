import React from 'react';
import { CookiesProvider } from 'react-cookie';

import { Typography } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';

import AlternateTimeline from '../components/alternateTimeline';
import BasicCard from '../components/basicCard';
import SearchVineVerified from '../components/searchVineVerified';
import Seo from '../components/seo';
import SimpleAccordion from '../components/simpleAccordion';
import VineLayout from '../components/vineLayout';
import background from '../images/Blurred-Background-Light.jpg';

const VineVerifiedPage = () => {
  return (
    <CookiesProvider>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - Vine verified explained" />
        <Box style={styles.container}>
          <Typography style={styles.text}>NFT UNDERWORLD PROJECT IS LAUNCHING 2022 </Typography>
          <Typography style={styles.date}>15 | 01 | 56 | 26 </Typography>
          <Typography style={styles.days}>DAYS | HOURS | MINUTES | SECONDS </Typography>
          <BasicCard />

          <Box style={styles.buttonGroupAction}>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              style={{
                width: '45vw',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 1,
              }}
            >
              <Typography style={styles.coming}>COMING SOON: </Typography>
              <SearchVineVerified style={{ marginLeft: '10%' }} />
            </ButtonGroup>
          </Box>

          <div style={styles.container1}>
            <div style={styles.innerWrapper1}>
              <img
                src="https://i.postimg.cc/HLf3YhZ7/Vine-Homepage-timeline.png"
                alt="KILLER TOMATOES"
                height={'250vh'}
                width={'250vw'}
              />
              <Typography style={styles.text2}> Author name</Typography>
            </div>
            <div style={styles.innerWrapper1}>
              <img src="https://i.postimg.cc/1RTWJ4cK/tomato.png" alt="TOMATO" height={250} width={250} />
              <Typography style={styles.text2}> Author name</Typography>
            </div>
            <div style={styles.innerWrapper1}>
              <img src="https://i.postimg.cc/3rnyTDbg/NFT.png" alt="NFT" height={250} width={250} />
              <Typography style={styles.text2}> Author name</Typography>
            </div>
          </div>
          <Typography style={styles.innerWrapper}>
            {' '}
            <h1 style={{ fontSize: '2vw' }}>ABOUT VINE VERIFIED </h1> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in
            libero. Sed dignissim lacinia nunc. Curabitur tortor.
          </Typography>
          <Typography style={styles.innerWrapper}>
            {' '}
            <h1 style={{ fontSize: '2vw', marginTop: '5%' }}>ROADMAP </h1> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in
            libero. Sed dignissim lacinia nunc. Curabitur tortor.
          </Typography>
          <AlternateTimeline style={{ marginTop: '10%' }} />
          <Typography style={styles.text}>FREQUENTLY ASKED QUESTIONS </Typography>
          <SimpleAccordion></SimpleAccordion>
        </Box>
      </VineLayout>
    </CookiesProvider>
  );
};

export default VineVerifiedPage;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '650vh',
    width: '100vw',
  },

  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: '3%',
    marginTop: '3%',
    textAlign: 'center',
    fontWeight: '400',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: '0.9vw',
  },

  box: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: '30%',
    height: 250,
  },
  title: {
    fontWeight: '800',
    fontSize: 32,
  },
  paragraph: {
    fontWeight: '400',
    width: '60%',
    textAlign: 'center',
    fontSize: 22,
  },

  innerWrapper1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginRight: '0.1rem',
    marginTop: 55,
    margin: '2%',
  },

  container1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },

  date: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontWeight: 'bold',
    fontSize: '4vw',
  },

  text: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontWeight: 'bold',
    fontSize: '2vw',
  },

  text2: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontSize: '1vw',
  },

  coming: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '44%',
    marginTop: '2%',
    display: 'flex',
    color: 'rgb(0, 8, 45)',
    fontWeight: 'bold',
    fontSize: '1.3vw',
  },

  days: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 3,
    color: 'rgb(0, 8, 45)',
    fontSize: '1vw',
  },

  buttonGroupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
};
