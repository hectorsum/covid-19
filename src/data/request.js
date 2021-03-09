import axios from 'axios';
import parsers from './parses';
async function usStats() {
  const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
  return parsers.usStats(response.data);
}

export default {
  usStats
}