import { Button, styled } from '@mui/material';

export const BuyButton = styled(Button)({
  // boxShadow: 'none',
  // textTransform: 'none',
  // position: 'absolute',
  // marginTop: -22,
  // marginRight: '0.93%',
  fontSize: { xs: 14, md: 20 },
  fontWeight: 'bold',
  lineHeight: 1.5,
  background: '#00F5FF',
  border: '1px solid #000',
  color: 'rgb(0, 8, 45)',
  borderRadius: 15,
  fontFamily: 'Montserrat',
  '&:hover': {
    boxShadow: '0 0 15px rgba(0, 246, 254, 0.9)',
    backgroundColor: 'rgb(0, 246, 254)',
    color: 'rgb(0, 8, 45)',
  },
  marginBottom: 20,
  width: { xs: 100, md: 200 },
  // '&:active': {
  //   boxShadow: 'none',
  //   backgroundColor: '#00F5FF',
  //   borderColor: '#00F5FF',
  // },
  // '&:focus': {
  //   boxShadow: '0 0 0 0.2rem #00F5FF',
  // },
});
