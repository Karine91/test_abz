const axios = require('axios');
const AUTH_TOKEN = "445bdebaee8cedfa8f11a6d5bf999c33573d6973";
axios.defaults.baseURL = 'http://504080.com/api/v1/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;