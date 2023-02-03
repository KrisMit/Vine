import React from 'react';

import Box from '@mui/material/Box';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';
import background from '../images/Blurred-Background-Light.jpg';

const VineVerifiedPage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - Vine verified explained" />
        <Box style={styles.container}></Box>
      </VineLayout>
    </>
  );
};

export default VineVerifiedPage;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
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
