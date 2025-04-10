import dotenv from "dotenv";
dotenv.config();

const verifyPiToken = async (token) => {
  const response = await axios.get(`https://api.minepi.com/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-PI-API-KEY": process.env.PI_API_KEY,
    },
  });
  return response.data;
};
