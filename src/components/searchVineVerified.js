import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom: '1%',
        marginLeft: 2,
        fontSize: '1vw',
      }}
    >
      <InputBase
        sx={{
          display: 'flex',
          flex: 1,
          fontSize: 18,
          marginLeft: 5,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        placeholder="Vine Verified"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
