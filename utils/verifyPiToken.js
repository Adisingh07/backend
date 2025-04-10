const axios = require("axios");

const verifyPiToken = async (token) => {
  const response = await axios.get(`https://api.minepi.com/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-PI-API-KEY": process.env.PI_API_KEY, // if you're using API key
    },
  });
  return response.data;
};

module.exports = verifyPiToken;
