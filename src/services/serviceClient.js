import axios from 'axios';

const ServiceClient = axios.create({
  baseURL: process.env.GATSBY_API_URL || 'http://localhost:1337/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GATSBY_API_TOKEN}`,
    //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    //'Access-Control-Allow-Origin': '*'
  },
});

export default ServiceClient;
