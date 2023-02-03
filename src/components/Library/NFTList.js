import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useMarketplaceNFTs } from '../../hooks/useMarketplaceNFTs';
import Search from '../search';
import Sorter from '../sorter';
import Card from './Card';

const NFTList = ({ setRefresh, items, setItems }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [selectedItem, setSelectedItem] = useState('');

  const handleChange = e => {
    setSearchLength(e.target.value.length);
    setSearch(e.target.value);
  };

  //disable enter key submit
  const handleKeyPress = e => {
    e.key === 'Enter' && e.preventDefault();
  };

  useEffect(() => {
    if (searchLength > 0) {
      setFilteredItems(
        items.filter(item => {
          if (item && item.name && item.price)
            return (
              item.name.toString().toLowerCase().includes(search.toLowerCase()) ||
              item.price.toString().toLowerCase().includes(search.toLowerCase())
            );
        })
      );
    } else {
      setFilteredItems(items);
    }
  }, [search]);

  const sortBy = isAsc => {
    setItems([
      ...items.sort((a, b) => {
        if (isAsc === 'SortByPriceAscending') {
          return a.price - b.price;
        } else if (isAsc === 'SortByPriceDescending') {
          return b.price - a.price;
        } else if (isAsc === 'SortByIdAscending') {
          return a.tokenId - b.tokenId;
        } else {
          return b.tokenId - a.tokenId;
        }
      }),
    ]);
  };

  const handleFilter = e => {
    setSelectedItem(e.target.value);
  };

  useEffect(() => {
    sortBy(selectedItem);
  }, [selectedItem]);

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 4, md: 4 }}
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 4, md: 4 }}
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          display: { xs: 'none', sm: 'flex', md: 'flex' },
        }}
      >
        <Grid item xs={3}>
          <Sorter selectedItem={selectedItem} handleFilter={handleFilter} />
        </Grid>
        <Grid item xs={3}>
          <Search keyPress={handleKeyPress} change={handleChange} />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Search keyPress={handleKeyPress} change={handleChange} />
        <Sorter selectedItem={selectedItem} handleFilter={handleFilter} />
      </Box>

      {items && searchLength > 0
        ? filteredItems.map(item => {
            return (
              item && (
                <Grid key={item.listingId} item p={2} xs={12} sm={6} md={6} lg={6}>
                  <div>
                    <Card item={item} />
                  </div>
                </Grid>
              )
            );
          })
        : items.map(item => {
            return (
              item && (
                <Grid key={item.listingId} item p={3} xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div>
                    <Card item={item} />
                  </div>
                </Grid>
              )
            );
          })}
    </Grid>
  );
};

export default NFTList;
