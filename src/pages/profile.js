import React, { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import UserProfile from '../components/Profile/UserProfile';
import VineLayout from '../components/vineLayout';
import bg from '../images/bg-1920-v2.jpg';

const Profile = () => {
  return (
    <VineLayout>
      <Container style={styles.background} maxWidth="xl">
        <UserProfile />
      </Container>
    </VineLayout>
  );
};

const styles = {
  background: {
    // backgroundImage: `url(${bg})`,
    background: 'linear-gradient( #00F5FF, #001830)',
    // backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    paddingTop: 20,
  },
};

export default Profile;
