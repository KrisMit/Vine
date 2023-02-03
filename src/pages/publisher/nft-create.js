import React from 'react';

import { Link } from 'gatsby';

import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';

import DropDown from '../../components/dropDown';
import Search from '../../components/search';
import Seo from '../../components/seo';
import VineLayoutPublisher from '../../components/vineLayoutPublisher';

const NftCreatePage = () => {
  return (
    <>
      <VineLayoutPublisher>
        <Seo title="Vine investments - publisher NFT create" />
        <Box style={styles.header}>
          <h1 style={{ color: 'white' }}>NFT Create</h1>
        </Box>

        <h1 style={styles.subtitle}>Create NFT</h1>
        <Search />

        <DropDown
          dropOptions={['Collectible', 'Clip Rights', 'Movie', 'TV Show']}
          sx={{
            display: 'flex',
            marginLeft: '40%',
            marginRight: '40%',
            backgroundColor: 'primary',
            paddingTop: 30,
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 25,
          }}
        />

        {/* <p style={{ display: 'flex', flexGrow: 1,  alignItems: "center", justifyContent: "center", marginTop: '3%', marginBottom: '1%', marginLeft: '38%', marginRight: '35%', marginBottom:'1%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p> */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgb(9,74,120)',
            marginTop: '3%',
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical primary outlined button group"
            variant="contained"
            sx={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'rgb(9,74,120)',
              boxShadow: '0 0 0 #fff',
            }}
          >
            <Button
              sx={{ margin: 1, width: 213, backgroundColor: 'rgb(9,74,120)' }}
              variant="contained"
              component={Link}
              to="/publisher/nft-create-media"
            >
              MEDIA
            </Button>
            <Button
              sx={{ margin: 1, width: 213, backgroundColor: 'rgb(9,74,120)' }}
              variant="contained"
              component={Link}
              to="/publisher/nft-create-rights"
            >
              RIGHT OWNERSHIP
            </Button>
            <Button
              sx={{ margin: 1, width: 213, backgroundColor: 'rgb(9,74,120)' }}
              variant="contained"
              component={Link}
              to="/publisher/nft-create-clearing"
            >
              CLEARING
            </Button>
            <Button
              sx={{ margin: 1, width: 213, backgroundColor: 'rgb(9,74,120)' }}
              variant="contained"
              component={Link}
              to="/publisher/nft-create-participants"
            >
              PARTICIPANTS
            </Button>
          </ButtonGroup>
        </Box>

        <ButtonGroup variant="outlined" aria-label="outlined button group" style={styles.buttonGroupAction}>
          <Button sx={{ margin: 1, width: 113, fontColor: 'rgb(9,74,120)' }} variant="outlined">
            PUBLISH
          </Button>
        </ButtonGroup>
      </VineLayoutPublisher>
    </>
  );
};

export default NftCreatePage;

const styles = {
  header: {
    display: 'flex',
    flexGrow: 1,
    color: 'white',
    height: 100,
    backgroundColor: 'rgb(9,74,120)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    fontWeight: '300',
    margin: 20,
    marginLeft: '10%',
    flexGrow: 1,
  },

  buttonGroupAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
};
