<script>
  //Receiving props
  export let cases;
  export let deaths;
  export let recovered;
  export let ventilator;
  export let hospitalized;
  export let icu;
  export let tested;
  export let updated;
</script>

<style>
  .cols{
    border: solid 1px black !important;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns cols">
      <div class="is-3 column">Cases: {cases} </div>
      <div class="is-3 column">Deaths: {deaths}</div>
      <div class="is-3 column">Recovered: {recovered}</div>
      <div class="is-3 column">Updated: {updated}</div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="columns cols">
      <div class="is-3 column">Tested: {tested}</div>
      <div class="is-3 column">Hospitalized: {hospitalized}</div>
      <div class="is-3 column">Total ICU: {icu}</div>
      <div class="is-3 column">Total Ventilator: {ventilator}</div>
    </div>
  </div>
</div>