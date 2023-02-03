import PropTypes from 'prop-types';

import React, { useState } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { width } from '@mui/system';

function TopBarPublisher({ siteTitle }) {
  //const pages = ['Vine Verified', 'Marketplace', 'About', 'My NFTs'];

  const pages = [
    {
      title: 'Vine verified',
      slug: '/vine-verified',
    },
    {
      title: 'Marketplace',
      slug: '/marketplace',
    },
    {
      title: "My NFT's",
      slug: '/myNfts',
    },
    {
      title: 'About',
      slug: '/about',
    },

    {
      title: 'Timeline',
      slug: '/timeline',
    },
    {
      title: 'FAQ',
      slug: '/FAQ',
    } /* ,
        {
            "title": "Contact",
            "slug": "/contact"
        } */,
  ];

  const settings = ['Create account', 'Login'];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          backgroundColor: 'rgb(0, 8, 45)',
          color: 'rgb(9,74,155)',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 3,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <StaticImage
                  src="../images/DVLPLogo.png"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                  alt="Vine Investment"
                  style={{ marginBottom: 1, marginTop: 1 }}
                  height={55}
                />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  <MenuItem key={page.slug} onClick={handleCloseNavMenu} component={Link} to={page.slug}>
                    <Typography
                      textAlign="center"
                      style={{
                        color: 'rgb(9,74,120)',
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Link to="/">
                <StaticImage
                  src="../images/DVLPLogo.png"
                  quality={95}
                  formats={['auto', 'webp', 'avif']}
                  alt="Vine Investment"
                  style={{ marginBottom: 1, marginTop: 1 }}
                  height={45}
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
              {pages.map(page => (
                <Button key={page.slug} onClick={handleCloseNavMenu} component={Link} to={page.slug} sx={styles.button}>
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

TopBarPublisher.propTypes = {
  siteTitle: PropTypes.string,
};

TopBarPublisher.defaultProps = {
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
    // backgroundColor: 'rgb(9,74,120)',
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

export default TopBarPublisher;
