<script context="module">
  import requests from '../data/request'
  export async function preload(){
    try {
      throw new Error('this is bad');
      const usStats = await requests.usStats();
      return {usStats};
    } catch (e) {
      this.error(500, 'There was an error in calling the api, please try again in 5 minutes')
      return;
    }
  }
</script>
<script>
import CovidChart from '../components/CovidChart.svelte';
import CovidStat from '../components/CovidStat.svelte'
import TableContainer from '../components/TableContainer.svelte';
import About from './about.svelte';
import Error from './_error.svelte';
export let usStats;
console.log(usStats,"usStats");
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
<CovidChart/>
<TableContainer/>