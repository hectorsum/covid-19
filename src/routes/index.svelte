<script context="module">
  import requests from '../data/request'
  export async function preload(){
    try {
      // throw new Error('this is bad');
      const usStats = await requests.usStats();
      const historic = await requests.historicUS();
      const statesData = await requests.statesData();
      return {usStats, historic,statesData};
    } catch (e) {
      console.log(e)
      this.error(500, 'There was an error in calling the api, please try again in 5 minutes')
      return;
    }
  }
</script>
<script>
import CovidChart from '../components/CovidChart.svelte';
import CovidStat from '../components/CovidStat.svelte'
import TableContainer from '../components/TableContainer.svelte';
export let usStats;
export let historic;
export let statesData;
console.log(statesData,"statesData");
</script>

<!-- Svelte:head - This is to override the title -->
<svelte:head>
  <title>Covid-19 US Tracker</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid 19 - US</h1>
  </div>
</div>
<CovidStat {...usStats}/>
<CovidChart historicData={historic} title="US Covid 19"/>
<TableContainer data={statesData} />