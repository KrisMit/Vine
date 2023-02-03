import React, { useEffect, useState } from 'react';

import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Checkbox, Container, FormControlLabel, FormGroup, Grid } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import Search from '../search';
import Sorter from '../sorter';
import MarketCard from './Card';

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      borderRadius: 20,
      width: 250,
      fontFamily: 'Montserrat',
    },
  })
);

const NFTList = ({ setRefresh, items, setItems }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchLength, setSearchLength] = useState(0);
  const [selectedItem, setSelectedItem] = useState('');
  const [showMysteryBoxes, setShowMysteryBoxes] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem('mystery');
    if (data !== null) setShowMysteryBoxes(JSON.parse(data));
  }, []);

  useEffect(() => {}, [showMysteryBoxes]);

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
      // TODO: Search breaks on random character that is not in the name
      setFilteredItems(
        items.filter(item => {
          const tokenAttributes = item.tokenAttributes.map(attribute => attribute.value);
          if (item && item.name && item.price)
            return (
              item.name.toString().toLowerCase().includes(search.toLowerCase()) ||
              item.weiPrice.toString().toLowerCase().includes(search.toLowerCase()) ||
              tokenAttributes.toString().toLowerCase().includes(search.toLowerCase())
            );
        })
      );
    } else {
      setFilteredItems(items);
    }
  }, [search]);

  useEffect(() => {
    if (!showMysteryBoxes) {
      setFilteredItems(
        items.filter(item => {
          if (item && item.name && item.price) {
            return item.name !== 'THE STUFF MYSTERY BOX';
          }
        })
      );
    }
  }, [showMysteryBoxes]);

  const sortBy = isAsc => {
    setItems([
      ...items.sort((a, b) => {
        if (isAsc === 'SortByPriceAscending') {
          return a.weiPrice - b.weiPrice;
        } else if (isAsc === 'SortByPriceDescending') {
          return b.weiPrice - a.weiPrice;
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
        flexGrow: 1,
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 4, md: 4 }}
        sx={{
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'center',
          display: { xs: 'none', sm: 'flex', md: 'flex' },
          backgroundColor: 'rgba(0,24,48,0.5)',
          marginTop: '1%',
          height: { xs: 150, sm: 100, md: 70 },
          padding: 'auto 0',
          gridColumn: 1,
        }}
      >
        <Grid item xs={3}>
          <Search keyPress={handleKeyPress} change={handleChange} />
        </Grid>
        <Grid item xs={3}>
          <Sorter selectedItem={selectedItem} handleFilter={handleFilter} />
        </Grid>

        <Grid item xs={2}>
          <FormGroup style={{ marginTop: 18, color: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!showMysteryBoxes}
                  sx={{
                    color: 'white',
                  }}
                  onChange={() => {
                    setShowMysteryBoxes(!showMysteryBoxes);
                    window.localStorage.setItem('mystery', JSON.stringify(!showMysteryBoxes));
                  }}
                />
              }
              label="Hide Mystery Boxes"
            />
          </FormGroup>
        </Grid>
        <Grid
          color="#00F5FF"
          marginTop={{ xs: '1.4rem', sm: '2.5rem', md: '1.5rem' }}
          marginLeft={{ xs: '1rem', sm: '1rem', md: '0.5rem' }}
        >
          <LightTooltip
            placement="top-start"
            describeChild
            position="top center"
            title="Mystery NFTs open different
utility depending on their Tier. More information on Tiers can be found  in the FAQ’s."
          >
            <HelpRoundedIcon />
          </LightTooltip>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Search keyPress={handleKeyPress} change={handleChange} />
        <Sorter selectedItem={selectedItem} handleFilter={handleFilter} />

        <FormGroup style={{ color: 'white', flexDirection: 'row', marginTop: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'white',
                }}
                onChange={() => setShowMysteryBoxes(!showMysteryBoxes)}
              />
            }
            label="Hide Mystery Boxes"
          />
          <Box color="#00F5FF" marginTop={{ xs: '0.5rem', sm: '2.5rem', md: '1.4rem' }}>
            <LightTooltip
              placement="top-start"
              describeChild
              position="top center"
              title="Mystery NFTs open different
utility depending on their Tier. More information on Tiers can be found  in the FAQ's."
            >
              <HelpRoundedIcon />
            </LightTooltip>
          </Box>
        </FormGroup>
      </Box>

      {items && (searchLength > 0 || !showMysteryBoxes)
        ? filteredItems.map(item => {
            return (
              item && (
                <Grid marginTop="2%" key={item.listingId} item p={2} xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div>
                    <MarketCard item={item} />
                  </div>
                </Grid>
              )
            );
          })
        : items.map(item => {
            return (
              item && (
                <Grid marginTop="2%" key={item.tokenId} item p={3} xs={12} sm={6} md={6} lg={4} xl={3}>
                  <div>
                    <MarketCard item={item} />
                  </div>
                </Grid>
              )
            );
          })}
    </Grid>
  );
};

export default NFTList;
