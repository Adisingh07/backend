const axios = require("axios");

const verifyPiToken = async (token) => {
  const response = await axios.get("https://api.minepi.com/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

module.exports = verifyPiToken;
