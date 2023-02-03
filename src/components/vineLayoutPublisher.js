import PropTypes from 'prop-types';

import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Box from '@mui/material/Box';

import TopBarPublisher from './topBarPublisher';
import './vineLayout.css';

const VineLayoutPublisher = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  const data = {
    site: {
      siteMetadata: 'naslov',
    },
  };

  return (
    <div className="site">
      <TopBarPublisher siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site-content">
        <main style={styles.main1}>{children}</main>
      </div>
      <Box
        sx={{
          display: 'flex',
          height: 28,
          backgroundColor: 'rgb(0, 8, 45)',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 4,
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Vine Digital
          {` `}
          {/*           <a href="https://www.ideacompiler.com"> Vine Digital</a> */}
        </footer>
      </Box>
    </div>
  );
};

VineLayoutPublisher.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VineLayoutPublisher;

const styles = {
  main1: {
    width: '100%',
    height: '100%',
  },
};
