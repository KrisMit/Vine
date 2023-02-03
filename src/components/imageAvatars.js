import * as React from 'react';

import { CenterFocusStrong } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import discord from '../images/discord.png';
import twitter from '../images/twitter-sign.png';
import youtube from '../images/youtube.png';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={3} marginLeft={52}>
      <Avatar src={twitter} sx={{ width: 96, height: 96 }} />
      <Avatar src={discord} sx={{ width: 96, height: 96 }} />
      <Avatar src={youtube} sx={{ width: 96, height: 96 }} />
    </Stack>
  );
}
