import React from 'react';

import Box from '@mui/material/Box';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';
import background from '../images/Blurred-Background-Light.jpg';

// import { Accordion, Typography } from "@mui/material";
// import SimpleAccordion from '../components/simpleAccordion';

const FAQ = () => {
  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - about" />
        <Box style={styles.container}>
          {/* <Typography style={styles.text}>FREQUENTLY ASKED QUESTIONS </Typography>
        <SimpleAccordion></SimpleAccordion> */}
        </Box>
      </VineLayout>
    </>
  );
};

export default FAQ;

const styles = {
  container: {
    // backgroundImage: `url(${"./Blurred-Background-Light.jpg"})`,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  },
  text: {
    fontFamily: 'sans-serif',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    display: 'flex',
    color: 'rgb(0, 24, 48)',
    fontWeight: 'bold',
    fontSize: '2vw',
  },
};
