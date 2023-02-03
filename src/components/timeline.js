import * as React from 'react';

import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Box, Typography } from '@mui/material';

export default function AlternateTimeline() {
  return (
    <Timeline>
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ ...styles.box1 }} sx={{ display: { xs: 'flex', md: 'none' } }} position="left">
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              height: '40%',
              alignItems: 'left',
              justifyContent: 'left',
              marginTop: 3.5,
            }}
          >
            <Box>
              <Box style={{ marginTop: 10 }}>
                {/* <h2 style={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize:'1.5vw', display: 'flex' , alignItems: "center", justifyContent: "center"}}>Title here</h2> */}
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    textalign: 'left',
                    color: 'rgb(0, 8, 45)',
                    marginTop: 35,
                    fontSize: 24,
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  {' '}
                  Inception
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'left',
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 15,
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Inception{' '}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    textalign: 'left',
                    color: 'rgb(0, 8, 45)',
                    marginTop: '2%',
                    fontSize: '24wv',
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Your chance to get into the universe. The total supply is limited to 2109 (111 NFTs for Tier 1 and 333
                  NFTs for the remaining tiers). NFTs will be minted on May 3, 2022, with a revealing process. The
                  collection will be available for trade on OpenSea.
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'left',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 10,
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Your chance to get into the universe. The total supply is limited to 2109 (111 NFTs for Tier 1 and 333
                  NFTs for the remaining tiers). NFTs will be minted on May 3, 2022, with a revealing process. The
                  collection will be available for trade on OpenSea.{' '}
                </Typography>
              </Box>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ ...styles.box }} sx={{ display: { xs: 'flex', md: 'none' } }} position="left">
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              height: '40%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3.5,
            }}
          >
            <Box>
              <Box style={{ marginTop: 10 }}>
                {/* <h2 style={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize:'1.5vw', display: 'flex' , alignItems: "center", justifyContent: "center"}}>Title here</h2> */}
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    textalign: 'left',
                    color: 'rgb(0, 8, 45)',
                    marginTop: 35,
                    fontSize: 24,
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Existence
                </Typography>
                <Typography
                  sx={{
                    mr: 1,
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 15,
                    marginLeft: '5%',
                    marginTop: '2%',
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Existence{' '}
                </Typography>
                <Typography
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    textalign: 'center',
                    color: 'rgb(0, 8, 45)',
                    marginTop: '2%',
                    marginLeft: '5%',
                    fontSize: '24wv',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Those who take ownership of the Stuff collection will start receiving exclusive benefits in return.
                  The related tier owners will have access to the private sales of future launches, giveaways, airdrops,
                  and private channels.
                </Typography>
                <Typography
                  sx={{
                    mr: 1,
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'center',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 10,
                    marginLeft: '5%',
                    marginTop: '2%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Those who take ownership of the Stuff collection will start receiving exclusive benefits in return.
                  The related tier owners will have access to the private sales of future launches, giveaways, airdrops,
                  and private channels.{' '}
                </Typography>
              </Box>
            </Box>
          </Box>
        </TimelineContent>{' '}
      </TimelineItem>
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent style={{ ...styles.box1 }} sx={{ display: { xs: 'flex', md: 'none' } }} position="left">
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              height: '40%',
              alignItems: 'left',
              justifyContent: 'left',
              marginTop: 3.5,
            }}
          >
            <Box>
              <Box style={{ marginTop: 10 }}>
                {/* <h2 style={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontSize:'1.5vw', display: 'flex' , alignItems: "center", justifyContent: "center"}}>Title here</h2> */}
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    textalign: 'left',
                    color: 'rgb(0, 8, 45)',
                    marginTop: 35,
                    fontSize: 24,
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Domination
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'left',
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 15,
                    marginTop: '2%',
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Domination{' '}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat',
                    textalign: 'left',
                    color: 'rgb(0, 8, 45)',
                    marginTop: '2%',
                    fontSize: '24wv',
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  {' '}
                  Unique profit opportunities, gaming, metaverse, and brand-new unlocks that allow the utilization of
                  your existing library are rolled out. We are in a position to provide opportunities with high-end
                  entertainment properties that are not available from other platforms or offerings.
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textalign: 'left',
                    fontFamily: 'Montserrat',
                    color: 'rgb(0, 8, 45)',
                    fontSize: 10,
                    marginTop: '2%',
                    alignItems: 'left',
                    justifyContent: 'left',
                  }}
                >
                  Unique profit opportunities, gaming, metaverse, and brand-new unlocks that allow the utilization of
                  your existing library are rolled out. We are in a position to provide opportunities with high-end
                  entertainment properties that are not available from other platforms or offerings.
                </Typography>
              </Box>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const styles = {
  box: {
    backgroundColor: 'rgb(0, 246, 254, 0.4)',
    borderRadius: 20,
    width: '70%',
    height: 250,
    justifyContent: 'left',
    alignItems: 'left',
    textalign: 'left',
  },
  box1: {
    backgroundColor: 'rgb(221, 221, 221, 0.4)',
    borderRadius: 20,
    width: '80%',
    height: 250,
    justifyContent: 'left',
    alignItems: 'left',
    textalign: 'left',
  },
};
