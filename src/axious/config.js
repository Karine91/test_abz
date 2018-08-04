const axios = require("axios");
const AUTH_TOKEN = "ad124a13666e291c1b279593444cb8cdba0684c0";
axios.defaults.baseURL = "http://504080.com/api/v1/";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
