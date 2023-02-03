import * as React from 'react';

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import aqua from '../images/Aqua.png';
import cinamon from '../images/Cinamon.png';
import jelly from '../images/Jelly.png';

const useStyles = makeStyles({
  centerText: {
    textAlign: 'center',
  },
});

export default function AlternateTimeline() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 15 }}>
      <Timeline sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <TimelineItem position="left" sx={{ marginBottom: 0 }}>
          <TimelineOppositeContent>
            {' '}
            <img src={jelly} />{' '}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ m: 'auto 0' }} />
            <TimelineConnector sx={{ m: 'auto 0' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: { xs: '20%', sm: '3%', md: '3%', lg: '3%', xl: '3%' } }} position="left">
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                height: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
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
                      fontSize: { xs: 12, sm: 12, md: 14, lg: 15, xl: 18 },
                      margin: '5%',
                      flexWrap: 'wrap',
                      display: 'grid',
                      alignContent: 'center',
                      justifyContent: 'center',
                      textAlign: 'left',
                    }}
                  >
                    This is your chance to enter the Stuff universe. NFTs will be minted in June, with a revealing
                    process for each of the NFTs. This limited supply release will be immediately available for trading
                    on OpenSea.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem position="right" sx={{ marginBottom: 0 }}>
          <TimelineOppositeContent>
            {' '}
            <img src={aqua} />{' '}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ m: 'auto 0' }} />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ marginTop: { xs: '10%', sm: '3%', md: '3%', lg: '3%', xl: '3%' } }} position="right">
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
                      fontSize: { xs: 12, sm: 12, md: 14, lg: 15, xl: 18 },
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
          </TimelineContent>
        </TimelineItem>

        <TimelineItem position="left" sx={{ marginBottom: 0 }}>
          <TimelineOppositeContent>
            {' '}
            <img src={cinamon} />{' '}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ m: 'auto 0' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ marginTop: { xs: '20%', sm: '3%', md: '3%', lg: '3%', xl: '3%' } }} position="left">
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                height: '14%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: { xs: 0, sm: 0, md: 16, lg: 10, xl: 6 },
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
                      fontSize: { xs: 12, sm: 12, md: 14, lg: 15, xl: 18 },
                      margin: '5%',
                      flexWrap: 'wrap',
                      display: 'grid',
                      alignContent: 'center',
                      justifyContent: 'center',
                      textAlign: 'left',
                    }}
                  >
                    Breakthrough commercial licensing and B2C2B opportunities will be unlocked as The Stuff collection
                    is rolled out. Functional utilities will include royalty participations, on-chain environment
                    interoperability, gaming, and metaverse integration for discrete form factor usage. Domination means
                    that all Stuff stakeholders will have the off-chain to on-chain content licensing and IP management
                    tools to experience NFTs in a new way.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
const styles = {
  box: {
    backgroundColor: 'rgb(0, 246, 254, 0.8)',
    borderRadius: 10,
    width: { sm: '100%', md: '60%' },
    height: { sm: 200, md: 280 },
    marginRight: '35%',
  },
  box1: {
    backgroundColor: 'rgb(221, 221, 221, 0.8)',
    borderRadius: 10,
    width: { sm: '100%', md: '60%' },
    height: { sm: 200, md: 250 },
    marginLeft: '35%',
  },
  box2: {
    backgroundColor: 'rgb(221, 221, 221, 0.8)',
    borderRadius: 10,
    width: { sm: '100%', md: '60%' },
    height: { sm: 320, md: 450, lg: 430, xl: 430 },
    marginLeft: '35%',
    marginTop: '30%',
  },
};
