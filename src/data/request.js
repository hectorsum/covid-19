import axios from 'axios';
import parsers from './parses';
async function usStats() {
  const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
  return parsers.usStats(response.data);
}
async function statesData(){
  const response = await axios.get('https://api.covidtracking.com/v1/states/current.json');
  return parsers.stateTable(response.data);
}
async function stateStats(state){
  const response = await axios.get('https://api.covidtracking.com/v1/states/current.json');
  return parsers.stateStats(state,response.data)
}
async function historicUS(){
  const response = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  return parsers.historicUS(response.data);
}
async function historicState(){
  try{
    const response = await axios.get('https://api.covidtracking.com/v1/states/daily.json');
    return parsers.historicState(state,response.data);
  }catch(e){
    console.log(e)
  }
}
export default {
  usStats,
  stateStats,
  historicUS,
  historicState,
  statesData
}