import React, { useState } from 'react';

import Box from '@mui/material/Box';

function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '');

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early
  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    // this is where we'll call the phoneNumberFormatter function
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
  };

  return (
    <Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <input style={styles.input1} onChange={e => handleInput(e)} value={inputValue} placeholder="Phone number" />
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <input style={styles.input} onChange={e => handleInput(e)} value={inputValue} placeholder="Phone number" />
      </Box>
    </Box>
  );
}

const styles = {
  input1: {
    width: 180,
    height: 35,
    display: 'block',
    backgroundColor: 'white',
    // textAlign: 'center',
    // display: { xs: 'flex', md: 'none' },
    fontSize: 12,
    borderRadius: 15,
    marginBottom: 2,
    marginTop: 2,
    fontFamily: 'Montserrat',
    '&:focus': {
      marginLeft: '180 !important',
    },
    padding: 1,
  },

  input: {
    width: 250,
    height: 38,
    display: 'block',
    backgroundColor: 'white',
    fontSize: 16,
    // textAlign: 'center',
    // extend: 'center',
    // display: { xs: 'none', md: 'flex' },
    borderRadius: 18,
    marginBottom: 2,
    // marginLeft: 18,
    fontFamily: 'Montserrat',
    '&:focus': {
      marginLeft: 40,
    },
    padding: 1,
    marginLeft: 30,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
};
