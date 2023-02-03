import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from 'gatsby-plugin-image';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Swal from 'sweetalert2';
import { AppBar, Box, Button, Container, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import ServiceClient from '../services/serviceClient';
//import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { width } from '@mui/system';

function TopBar({ siteTitle }) {
  const [configParam, setConfigParam] = useState([]);

  const handlePopup = () => {
    Swal.fire({
      icon: 'question',
      title: 'Mobile Device Detected!',
      text: `In order to use the functionality fully please visit us from metamask application's browser.`,
      footer: '<a href="https://metamask.app.link/dapp/www.dvlpnft.io/">Open in Metamask</a>',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await ServiceClient.get(`/config-params?filters[param_name]=navigation`).catch(err =>
        console.log(err)
      );
      if (response && response.data && response.status === 200) {
        setConfigParam(response.data.data);
      }
    };
    fetchData();
  }, []);

  const configParamValue = configParam.map(config => {
    return config.attributes.param_value;
  });

  const pages = [
    {
      title: 'Roadmap',
      slug: '/#timeline',
    },
    {
      title: 'Marketplace',
      slug: '/marketplace',
    },
    {
      title: 'Passport',
      slug: '/myNfts',
    },
    {
      title: 'Profile',
      slug: '/profile',
    },
    // {
    //   title: 'About',
    //   slug: '/#about',
    // },
    // {
    //   title: 'FAQ',
    //   slug: '/#faq',
    // },

    // {
    //   title: 'Contact',
    //   slug: '/contact',
    // },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      {/* <Box sx={{ display: 'flex', flexGrow: 1, height: 28, backgroundColor: "rgb(9,74,120)" , alignItems: "center", justifyContent: "flex-end", paddingRight: 3 }}>
                <LinkedInIcon sx={{ color: "white" }}/>
                <FacebookIcon sx={{ color: "white" }}/>
            </Box> */}

      <AppBar
        position="fixed"
        style={{
          display: 'flex',
          flexGrow: 1,
          backgroundColor: 'rgb(0, 24, 48)',
          color: 'rgb(9,74,155)',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 3,
          fontFamily: 'Montserrat',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/about">
                <StaticImage
                  src="../images/DVLPLogo.png"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                  alt="DVLPNFT Powered by Vine Digital"
                  style={{ marginBottom: 1, marginTop: 1 }}
                  height={45}
                />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu burger"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem
                    key={page.slug}
                    onClick={handleCloseNavMenu}
                    component={AnchorLink}
                    onAnchorLinkClick={handleCloseNavMenu}
                    to={page.slug}
                  >
                    <Typography
                      textAlign="center"
                      style={{
                        color: 'rgb(9,74,120)',
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        fontFamily: 'Montserrat',
                      }}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handlePopup}>
                  <Typography
                    textAlign="center"
                    style={{
                      color: 'rgb(9,74,120)',
                      display: 'flex',
                      flexGrow: 1,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      fontFamily: 'Montserrat',
                    }}
                  >
                    Mobile
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Link to="/about">
                <StaticImage
                  src="../images/DVLPLogo.png"
                  quality={90}
                  formats={['auto', 'webp', 'avif']}
                  alt="DVLPNFT Powered by Vine Digital"
                  style={{ marginBottom: 1, marginTop: 3 }}
                  height={35}
                />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: 10,
              }}
            >
              {configParamValue == '1' &&
                pages.map(page => (
                  <Button
                    key={page.slug}
                    onClick={handleCloseNavMenu}
                    component={AnchorLink}
                    onAnchorLinkClick={handleCloseNavMenu}
                    to={page.slug}
                    sx={styles.button}
                  >
                    {page.title}
                  </Button>
                ))}
            </Box>

            {/*             <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <ManageAccountsIcon sx={{ color: 'rgb(9,74,120)' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  siteTitle: PropTypes.string,
};

TopBar.defaultProps = {
  siteTitle: ``,
};

const styles = {
  dugme: {
    color: 'white',
    backgroundColor: 'rgb(9,74,120)',
  },

  hover: {
    background: 'rgb(0, 243, 254)',
  },

  button: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    justifyContent: 'flex-end',
    my: 2,
    color: 'white',
    '&:hover': {
      color: '#00F5FF',
    },
    borderRadius: 20,
    // backgroundColor: 'rgb(7, 40, 77)',
    // '&:hover': {
    //   backgroundColor: 'rgb(0, 246, 254)',
    //   color: 'rgb(0, 24, 48)',
    // },
    // display: 'block',
    height: '10%',
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 1,
    marginRight: 1,
    textAlign: 'center',
    maxHeight: '10%',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
};

export default TopBar;
