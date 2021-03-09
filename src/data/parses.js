import format from './format'
import moment from 'moment'
function usStats(data){
  const [usStatRaw] = data;
  return {
    cases: format.number(usStatRaw.positive),
    deaths: format.number(usStatRaw.death),
    recovered: format.number(usStatRaw.recovered),
    ventilator: format.number(usStatRaw.onVentilatorCurrently),
    hospitalized: format.number(usStatRaw.hospitalized),
    icu:format.number(usStatRaw.isIcuCurrently),
    tested: format.number(usStatRaw.totalTestResults),
    updated: moment(usStatRaw.lastModified).format('LLLL')
  }
}

export default{
  usStats
}