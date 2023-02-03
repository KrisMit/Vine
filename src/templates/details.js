import * as React from 'react';
import { Box } from '@mui/system';
import { navigate } from 'gatsby';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import VineLayout from '../components/vineLayout';
import bg from '../images/bg-1920-v2.jpg';

const goBack = () => {
  navigate('/marketplace');
};

const Details = ({ nft }) => {
  const {
    contractAddress,
    image,
    lic_agr,
    listingId,
    name,
    price,
    seller,
    title,
    tokenId,
    weiPrice,
    description,
    external_url,
  } = nft;
  return (
    <VineLayout>
      <Box style={styles.background}>
        <div onClick={goBack}>
          <ArrowBackIcon style={{ position: 'relative', top: '70' }}></ArrowBackIcon>
        </div>
        <Container sx={{ display: 'grid', placeItems: 'center', marginTop: '2.5rem' }}>
          <Card key={tokenId} sx={{ width: { xs: '100%', md: 350 } }}>
            <CardMedia
              component="img"
              hsx={{
                height: {
                  xs: '200px',
                  md: '200px',
                },
              }}
              image={image}
              alt={title}
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body4" component="div" color="text.secondary">
                  {name}
                </Typography>
                <Typography variant="body5" component="div" color="text.secondary">
                  {description}
                </Typography>
                <Typography variant="body5" component="div" color="text.secondary">
                  {external_url}
                </Typography>
                <Typography variant="body5" component="a" color="text.secondary">
                  {lic_agr}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body4" component="div" color="text.secondary">
                  {name}
                </Typography>
                <Typography variant="body5" component="div" color="text.secondary">
                  {description}
                </Typography>
                <Typography variant="body5" component="div" color="text.secondary">
                  {external_url}
                </Typography>
                <Typography variant="body5" component="a" color="text.secondary">
                  {lic_agr}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                Price: ${price}
              </Typography>
              <Button sx={{ marginLeft: 'auto' }} size="small" color="primary">
                Buy
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </VineLayout>
  );
};

export default Details;

const styles = {
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '100%',
    padding: '8%',
  },

  text: {
    fontSize: {
      xl: 14,
      lg: 14,
      md: 14,
      xs: 11,
    },
    marginLeft: { xs: 0, md: '10%' },
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'text.secondary',
  },
};
