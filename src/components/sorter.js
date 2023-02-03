import React from 'react';

import { FormControl, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,
    borderRadius: 10,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'Montserrat',
  },
  '& .MuiFormControl-root': {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
}));

function Sorter({ handleFilter, selectedItem }) {
  return (
    <div>
      <FormControl sx={styles.sorter}>
        <InputLabel id="sort-input" fontFamily="Montserrat">
          Sort
        </InputLabel>
        <Select
          labelId="sort-input"
          id="sort-select"
          value={selectedItem}
          onChange={handleFilter}
          autoWidth
          // label="sort"
          input={<BootstrapInput />}
        >
          <MenuItem value="SortByIdAscending" fontFamily="Montserrat">
            Id Increasing
          </MenuItem>
          <MenuItem value="SortByIdDescending" fontFamily="Montserrat">
            Id Decreasing
          </MenuItem>
          <MenuItem value="SortByPriceAscending" fontFamily="Montserrat">
            Price Increasing
          </MenuItem>
          <MenuItem value="SortByPriceDescending" fontFamily="Montserrat">
            Price Decreasing
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sorter;

const styles = {
  sorter: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 80,
    width: '100%',
    marginTop: { xs: 'none', sm: '1.25rem', md: '0.4rem' },
    marginBottom: '1rem',
  },
};
