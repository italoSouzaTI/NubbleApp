import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization: 'Bearer MQ.iw61-vGJiTk5P6CFD6GAdyxrDZ9SCkups1NQdQUgqSkLnwGCZGQjKIG0bGDY',
  },
});
