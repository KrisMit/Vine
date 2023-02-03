import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

function Search({ submit, change, keyPress }) {
  return (
    <Paper
      component="form"
      onChange={submit}
      onKeyPress={keyPress}
      sx={{
        xs: {
          display: 'block',
        },
        borderRadius: 2,
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: { xs: '1.65rem', md: '0.85rem' },
        width: '100%',
      }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase onChange={change} placeholder="ID, Traits, Name" inputProps={{ 'aria-label': 'search' }} />
    </Paper>
  );
}

export default Search;
