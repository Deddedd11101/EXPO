import axios from 'axios';

const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export async function getExchangeRates() {
  const response = await axios.get(API_URL);
  return response.data; 
}