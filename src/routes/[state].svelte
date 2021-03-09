<script context="module">
  export async function preload(page){
    console.log(page)
    return { state: page.params['state'] }
  }
</script>
<script>
import CovidChart from "../components/CovidChart.svelte";
import CovidStat from "../components/CovidStat.svelte";


  export let state;
</script>

<!-- Svelte:head - This is to override the title -->
<svelte:head>
  <title>Covid-19 {state}</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid 19 - {state}</h1>
  </div>
</div>

<h1>{state}</h1>
<CovidStat/>
<CovidChart/>