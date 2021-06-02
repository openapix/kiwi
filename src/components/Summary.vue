<template>
<nav class="level">
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">Net Balance</p>
      <p class="title">{{netBalance}} XCH</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">Gross Balance</p>
      <p class="title">{{grossBalance}} XCH</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">Plots</p>
      <p class="title">{{ plots }}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">Total Space</p>
      <p class="title">{{ totalspace }} TiB</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">Netspace</p>
      <p class="title">{{netspace}} EiB</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">XCH/TiB Day</p>
      <p class="title">{{xchTibDay}} XCH</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="box">
      <p class="heading">XCH Price</p>
      <p class="title">￥{{ (xchPrice * 6.4).toFixed(2) }}</p>
    </div>
  </div>
</nav>

<div class="chart-wrap">
  <div style="width:25rem;">
    <Plots />
  </div>

  <div style="width:25rem;">
    <Profit />
  </div>
</div>
  
</template>
<script>
import Plots from '@comps/chart/Plots.vue'
import Profit from '@comps/chart/Profit.vue'

import { ref } from 'vue'
import axios from 'axios'
import storage from 'sweet-storage'

export default {
  components:{
    Plots,
    Profit
  },
  setup() {
    const plots = 6868 + 563
    const totalspace = (plots * 101.3 / 1024).toFixed(2)
    storage.save('totalspace', totalspace, 3600000)

    const netspace = ref(storage.get('netspace'))
    const xchTibDay = ref(storage.get('xchTibDay'))
    const netBalance = ref(storage.get('netBalance'))
    const grossBalance = ref(storage.get('grossBalance'))
    const xchPrice = ref(storage.get('xchPrice'))

    if(!netspace.value){
      axios.get('https://api2.chiaexplorer.com/blockchainSummary').then((res) => {
        const value = (res.data.netspace / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)
        netspace.value = value
        storage.save('netspace', value, 3600000) // 1h
      }).catch((err) => {
        console.log(err)
      })
    }

    if(!xchTibDay.value){
      axios.get('https://api2.chiaexplorer.com/chart/xchTibDay?period=24h').then((res) => {
          const value = res.data.data[0].toFixed(5)
          xchTibDay.value = value
          storage.save('xchTibDay', value, 3600000) // 1h
      }).catch((err) => {
        console.log(err)
      })
    }

    if(!netBalance.value || !grossBalance.value){
      axios.get('https://api2.chiaexplorer.com/balance/xch1fnwkjdnl8jxw43kc89jjeh4q6m57xtj7xtnqszz493dr99we2t8q4hfs8x').then((res) => {
        let net = res.data.netBalance / 1000000000000
        let gross = res.data.grossBalance / 1000000000000
        
        axios.get('https://api2.chiaexplorer.com/balance/xch1ludj4xgl3wk0gj8k3h6gsur0yu6d8psgdhr4hndxhz9udp26f2xqrsssnj').then((res) => {
          let net2 = res.data.netBalance / 1000000000000
          gross += res.data.grossBalance / 1000000000000
          netBalance.value = (net + net2).toFixed(8)
          grossBalance.value = gross
          storage.save('netBalance', net, 1800000) // 30min
          storage.save('grossBalance', gross, 1800000) // 30min
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log(err)
      })
    }

    if(!xchPrice.value){
      axios.get('https://api2.chiaexplorer.com/chart/xchPriceChart?period=24h').then((res) => {
        const data = res.data.data
        console.log(data)
        const price = data[data.length - 1]
        xchPrice.value = price
        storage.save('xchPrice', price, 1800000) // 30min
      }).catch((e) => {
        console.log(e)
      })
    }
    return {plots, totalspace, netspace, xchTibDay, netBalance, xchPrice, grossBalance, Plots}
  },

}
</script>

<style scoped>
.chart-wrap {display: flex; flex-wrap: wrap;}
</style>
