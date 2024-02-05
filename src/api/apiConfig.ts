import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization: 'Bearer Ng.hAkzv04WmZCr_4nnXWg7IAWGqxXBEc98YsTlp6EvK1EbcIqgJoPs7ZLGSDs4',
  },
});
