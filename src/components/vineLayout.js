import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { graphql, Link, useStaticQuery, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import TopBar from './topBar';
import './vineLayout.css';
import Swal from 'sweetalert2';

const VineLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  let pathName = typeof window !== 'undefined' ? window.location.pathname : '';
  //const pathName = window.location.pathname;
  const currentLink = `<a href="https://metamask.app.link/dapp/www.dvlpnft.io${pathName}">Open in Metamask</a>`;

  useEffect(() => {
    const deviceType = async () => {
      const ua = navigator.userAgent;
      if (
        /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) ||
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
      ) {
        const accounts = async () => {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });

          if (window.ethereum) {
            const accounts = await window.ethereum.request({
              method: 'eth_accounts',
            });

            if (accounts.length > 0) {
              const account = accounts[0];
              return account;
            }
          }

          return accounts;
        };

        const checkMetaMask = accounts().then(accounts => {
          return accounts;
        }); //hack to force if metamask is not connected it will force code to run the catch statement because we couldn't persist the user address as we wanted to. contact me if you have any questions.

        try {
          const userAddress = await accounts();
          if (userAddress.length <= 0) {
            Swal.fire({
              icon: 'question',
              title: 'Mobile Device Detected!',
              text: `In order to use the functionality fully please visit us from metamask application's browser.`,
              footer: currentLink,
            });
          } else {
            return;
          }
        } catch (error) {
          Swal.fire({
            icon: 'question',
            title: 'Mobile Device Detected!',
            text: `In order to use the functionality fully please visit us from metamask application's browser.`,
            footer: currentLink,
          });
        }
      }
    };
    deviceType();
  }, []);

  return (
    <div className="site">
      <TopBar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site-content">
        <main style={styles.main}>{children}</main>
      </div>

      {/* <Box
        sx={{
          display: 'flex',
          flexGrow:1,
          height: { xs: 200, md: 100 },
          backgroundColor: 'rgb(0, 24, 48)',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          paddingBottom: 4,
          color: 'white',
          textDecoration: 'none',
          fontFamily: 'Montserrat',
        }}
      > */}
      <footer
        style={{
          display: 'flex',
          flexGrow: 1,
          // marginTop: `1.5rem`,
          fontFamily: 'Montserrat',
          height: { xs: 200, sm: 200, md: 200 },
          backgroundColor: 'rgb(0, 24, 48)',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          paddingBottom: 4,
          color: 'white',
          textDecoration: 'none',
          fontFamily: 'Montserrat',
        }}
      >
        {/* <StaticImage sx={{ display: { xs: 'none', md: 'flex' } }}
            src="../images/DVLPLogo.png"
            quality={90}
            formats={['auto', 'webp', 'avif']}
            style={{ marginBottom: 1, marginTop: 1, marginLeft: 220}}
            height={40}
            display= {{ xs: 'none', md: 'flex' }}
          /> */}
        <Container maxWidth="xl">
          <Box
            variant="h6"
            noWrap
            component="div"
            style={{ marginBottom: 25, marginTop: 25 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
            }}
          >
            <StaticImage
              src="../images/DVLPLogo.png"
              quality={95}
              formats={['auto', 'webp', 'avif']}
              alt="DVLPNFT Powered by Vine Digital"
              style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 2 }}
              height={45}
            />
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginLeft: '10%',
              }}
            >
              <Link to="/tos/" style={styles.links}>
                {`Terms & Conditions`}{' '}
              </Link>{' '}
              <br />
              <p style={{ margin: 4 }}> {`|`} </p>
              <Link to="/privacy/" style={styles.links}>
                {' '}
                {`Privacy Policy`}
              </Link>{' '}
              <br />
            </div>

            <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
              Copyright {new Date().getFullYear()} {`. All rights reserved`}
            </div>
          </Box>

          <Box
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
            }}
          >
            <StaticImage
              src="../images/DVLPLogo.png"
              quality={90}
              formats={['auto', 'webp', 'avif']}
              alt="DVLPNFT Powered by Vine Digital"
              style={{ marginBottom: 20, marginTop: 20 }}
              height={45}
            />
            <Link to="/tos/" style={styles.links}>
              {`Terms & Conditions`}{' '}
            </Link>{' '}
            <br />
            <Link to="/privacy/" style={styles.links}>
              {' '}
              {`Privacy Policy`}
            </Link>{' '}
            <br />
            <div style={{ marginBottom: 10 }}></div> Copyright {new Date().getFullYear()}
            {`. All rights reserved`}
            <div style={{ marginBottom: 10 }}></div>
          </Box>
        </Container>{' '}
        {/* <a href="https://www.ideacompiler.com"> Vine Digital</a> */}
      </footer>
      {/* </Box> */}
    </div>
  );
};

VineLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VineLayout;

const styles = {
  main: {
    maxWidth: '100%',
    height: '100%',
  },

  links: {
    color: 'white',
    textDecoration: 'none',
  },
};
