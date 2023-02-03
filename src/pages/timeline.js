import React from 'react';

import Box from '@mui/material/Box';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';
import background from '../images/Blurred-Background-Light.jpg';

const Timeline = () => {
  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - timeline" />
        {/* <div class="display-flex" style={{    margin: 0, padding: 0,}}>
          <div class="display-flex-cell">
            <div class="display-block" width="100" height="100">
              <div style={styles.caontainer}> */}
        <Box style={styles.wrapper}>
          {/* <AutoPlay style={styles.innerWrapper} ></AutoPlay>

                  <Typography style={styles.innerWrapper}> <h1 style={{ fontSize: '2vw', }} >UPCOMING EVENTS </h1> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  </Typography> */}
        </Box>
        {/* </div>
            </div>
          </div>
        </div> */}
      </VineLayout>
    </>
  );
};

export default Timeline;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    height: '100vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginRight: "1.5rem",
    // margin: "20%",
    // marginTop: '10%',
    fontSize: '1vw',
  },
};
