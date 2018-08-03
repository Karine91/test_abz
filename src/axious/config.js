const axios = require("axios");
const AUTH_TOKEN = "ef7a1dcbf0747642e9ebf8f4add0dfd549bb0c71";
axios.defaults.baseURL = "http://504080.com/api/v1/";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
