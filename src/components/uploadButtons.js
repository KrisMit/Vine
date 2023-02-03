import * as React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons({ children, onClick }) {
  return (
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
      <Button variant="contained" onClick={onClick} component="span" sx={{ backgroundColor: 'rgb(9,74,120)' }}>
        {children}
      </Button>
    </label>
  );
}
