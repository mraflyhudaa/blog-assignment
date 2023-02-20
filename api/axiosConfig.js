import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    'X-Pagination-Pages': 50,
  },
});

export default instance;
