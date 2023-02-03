import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Button, ButtonGroup, Icon } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import background from '../images/KillerTomato.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://i.postimg.cc/HLf3YhZ7/Vine-Homepage-timeline.png',
    label: 'KILLER TOMATOES',
  },
  {
    imgPath: 'https://i.postimg.cc/1RTWJ4cK/tomato.png',
    label: 'TOMATO',
  },
  {
    imgPath: 'https://i.postimg.cc/3rnyTDbg/NFT.png',
    label: 'NFT',
  },
  {
    imgPath: 'https://i.postimg.cc/cLVhBzR4/NFT1.png',
    label: 'NFT 1',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
        flexShrink: 4,
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: 300, flexGrow: 1, marginLeft: '1%' }}>
        <Typography style={{ fontWeight: 'bold', fontSize: '2vw' }}>{images[activeStep].label}</Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    display: 'block',
                    maxWidth: 300,
                    overflow: 'hidden',
                    width: null,
                    resizeMode: 'contain',
                    flexShrink: 4,
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ position: 'relative', maxWidth: '100%', flexShrink: 4 }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <Box style={styles.buttonGroupAction}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button style={styles.coin}>vcoin</Button>
            <h1>157.786</h1>
            <Button style={styles.button}>BUY</Button>
          </ButtonGroup>
        </Box>
        {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography> */}
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;

const styles = {
  buttonGroupAction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgb(219, 217, 195)',
    width: 110,
    color: 'rgb(9,74,155)',
    marginTop: 5,
    marginLeft: 12,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    height: 40,
    elevation: 0,
  },
  coin: {
    backgroundColor: 'rgb(219, 217, 195)',
    color: 'rgb(9,74,155)',
    marginTop: 15,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    fontSize: 10,
    width: 30,
    height: 25,
    marginLeft: 2,
    elevation: 0,
  },
};
