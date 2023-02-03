import * as React from 'react';
import { useEffect, useState } from 'react';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import {ArrowRightIcon, AddIcon } from '@mui/icons-material';
import { AccordionDetails, Box, Typography, styled } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

import dvlp from '../images/DVLPLogoDark.png';
import lakeshoreLogo from '../images/lakeshoreLogo.jpg';
import vineDigital from '../images/VineDigital.png';
import chart from '../images/chart.png';
import lakeshore from '../images/lakeshore.png';

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    backgroundColor: 'pink',
    display: 'none',
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<ArrowRightIcon sx={{ fontSize: '48px', color: '#040301' }} />} {...props} />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '&:after': {
    backgroundColor: 'pink',
    display: 'none',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

function Content() {
  const [expanded, setExpanded] = useState('');

  const handleChange = panel => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion style={styles.container} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={styles.textTitle}>Who is making this happen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>
            Platform Partners: <br />
            <img src={dvlp} alt="" height="70" width="240" style={{ margin: 20 }} />
            <img src={vineDigital} alt="" height="70" width="220" style={{ margin: 20, marginBottom: 15 }} />
            <br />
            {/* Project Originators: <br />
            <img src={lakeshore} alt="" height="100" width="140" style={{ margin: 20 }} />
            <img src={lakeshoreLogo} alt="" height="100" width="140" style={{ margin: 20 }} /> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.container} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography sx={styles.textTitle} id="verified">
            What is Vine Verify?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>
            This project has been cleared by Vine Verified. Powered by the Vine Digital Platform, Vine Verified is an
            off-chain to on-chain rights verification and tracking tool for IP-based NFT products. Vine Verified
            protects NFT buyers from participating in utility-based form factors that are predicated on unauthorized use
            of intellectual property and distribution licenses. By providing rights owners and publishers with tools to
            verify, clear, memorialize, and track copyright and its utility use in on-chain environments, NFT buyers
            will now be able to purchase and use NFTs with confidence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.container} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography sx={styles.textTitle}>How is each Tier different?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text} style={{ textAlign: 'center' }}>
            Each Tier provides access to different levels of utility. Tier 1 provides access to all utilities. <br />
            <img src={chart} alt="" textAlign="center !important" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.container} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4a-content" id="panel4a-header">
          <Typography sx={styles.textTitle}>{'How much does it cost to mint an NFT? '}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>
            The mint price will be 0.0999 ETH for Tier 1 and 0.0333 ETH for Tiers 2 through 7.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={styles.container} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5a-content" id="panel5a-header">
          <Typography sx={styles.textTitle}>How many NFTs can I mint to my wallet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>Each user can mint a total of 3 NFTs.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles.container} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6a-content" id="panel6a-header">
          <Typography sx={styles.textTitle}>Is the reveal instant?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>No, there will be a revealing process.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={styles.container} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7a-content" id="panel7a-header">
          <Typography sx={styles.textTitle}>
            {'Can I display, sell or purchase my NFTs on secondary marketplaces?  '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>The collection will be available to trade on OpenSea.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={styles.container} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8a-content" id="panel8a-header">
          <Typography sx={styles.textTitle}>How can I contact someone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={styles.text}>Please visit our Discord server for general help and tech support.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function SimpleAccordion(props) {
  let expandedPanel = props.expandedPanel;

  useEffect(() => {
    if (expandedPanel) {
      this.Content.setExpanded(expandedPanel);
    }
  }, [expandedPanel]);

  return (
    <Box id="faq" style={{ backgroundColor: 'rgb(0, 24, 48)' }}>
      <Typography
        noWrap
        component="div"
        sx={{
          // mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'Lobster',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: 'white',
          marginTop: 2,
          fontSize: 55,
        }}
      >
        Frequently Asked Questions{' '}
      </Typography>
      <Typography
        component="div"
        sx={{
          // mr: 2,
          textAlign: 'center',
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'Lobster',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: 'white',
          flexWrap: 'wrap',
          marginTop: 2,
          fontSize: 38,
        }}
      >
        Frequently Asked Questions{' '}
      </Typography>
      <Content />
    </Box>
  );
}

const styles = {
  container: {
    width: '80%',
    borderRadius: 13,
    color: 'rgb(0, 24, 48)',
    backgroundColor: 'white',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    // display: "flex",
    fontWeight: 'bold',
    marginLeft: '9%',
    marginRight: '9%',
    marginTop: '2%',
    '&:active': {
      backgroundColor: 'rgb(0, 246, 254) !important',
      color: 'rgb(0, 24, 48)',
    },
  },

  text: {
    '@media (max-width: 767px)': {
      fontSize: 12,
    },
    fontSize: 16,
    fontFamily: 'Montserrat',
  },

  textTitle: {
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
};
