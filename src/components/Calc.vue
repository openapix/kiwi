<template>
<div style="width:45rem;">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Space</label>
    </div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control is-expanded">
            <input class="input" type="number" min="0" placeholder="Your space" v-model="totalspace" @change="spaceChange">
          </p>
          <p class="control">
            <a class="button is-static">
              TB
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Class A</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="number" min="0" placeholder="Class A operations" v-model="classA">
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Class B</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="number" min="0" placeholder="Class B operations / Per second" v-model="classB">
        </div>
      </div>
    </div>
  </div>

 <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Data Retrieval</label>
    </div>
    <div class="field-body">
      <div class="field is-expanded">
        <div class="field has-addons">
          <p class="control is-expanded">
            <input class="input" type="number" min="0" placeholder="Data Retrieval Size" v-model="retrieve">
          </p>
          <p class="control">
            <a class="button is-static">
              GB
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label">calculate by</label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <label class="radio">
            <input type="radio" name="time" checked value="0" v-model="time" @change="timeChange">
            Day
          </label>
          <label class="radio">
            <input type="radio" name="time" value="1" v-model="time" @change="timeChange">
            Month
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary is-fullwidth" @click="estimate">Estimate</button>
        </div>
      </div>
    </div>
  </div>

  <canvas id="costChart"></canvas>

</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const exchange = 6.4
    const retrieveRate = 0.45
    const totalspace = ref(localStorage.getItem('totalspace'))
    const classA = ref()
    const classB = ref()
    const retrieve = ref((totalspace.value * retrieveRate).toFixed(2))
    const time = ref(0)
    let chart

    const Standard = {
      space: exchange * 0.02,   // GB/月
      classA: exchange * 0.05,  // 10000 次
      classB: exchange * 0.004, // 10000 次
      retrieve: exchange * 0    // GB
    }
    const Nearline = {
      space: exchange * 0.01,
      classA: exchange * 0.1,
      classB: exchange * 0.01,
      retrieve: exchange * 0.01
    }
    const Coldline = {
      space: exchange * 0.004,
      classA: exchange * 0.1,
      classB: exchange * 0.05,
      retrieve: exchange * 0.02
    }
    const Archive = {
      space: exchange * 0.0012,
      classA: exchange * 0.5,
      classB: exchange * 0.5,
      retrieve: exchange * 0.05
    }

    const spaceChange = () =>{
      retrieve.value = (totalspace.value * retrieveRate).toFixed(2)
    }

    const timeChange = () =>{
      if(time.value == 1){
        retrieve.value = (retrieve.value * 30).toFixed(2)
        classA.value = classA.value * 30
        classB.value = classB.value * 30
      }else{
        retrieve.value = (retrieve.value / 30).toFixed(2)
        classA.value = classA.value / 30
        classB.value = classB.value / 30
      }
    }

    const estimate = () => {
      if(!classA.value){
        classA.value = 0
      }
      if(!classB.value){
        classB.value = 0
      }

      console.log('totalspace: ' + totalspace.value)
      console.log('time: ' + time.value)
      const spaceGB = totalspace.value * 1024
      const classAal = classA.value / 10000 
      const classBal = classB.value / 10000

      const classAS = [classAal * Standard.classA, classAal * Nearline.classA, classAal * Coldline.classA, classAal * Archive.classA]
      const classBS = [classBal * Standard.classB, classBal * Nearline.classB, classBal * Coldline.classB, classBal * Archive.classB]

      const stores = [spaceGB * Standard.space / 30, spaceGB * Nearline.space / 30, spaceGB * Coldline.space / 30, spaceGB * Archive.space / 30]
      const retrieves = [retrieve.value * Standard.retrieve, retrieve.value * Nearline.retrieve, retrieve.value * Coldline.retrieve, retrieve.value * Archive.retrieve]

      if(time.value == 1){
        stores.forEach((v, i, arr) => {
          arr[i] = (v * 30).toFixed(2)
        })
      }

      const data = {
        labels: ['Standard', 'Nearline', 'Coldline', 'Archive'],
        datasets: [
          {
            label: 'Store',
            data: stores,
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Class A',
            data: classAS,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Class B',
            data: classBS,
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'retrieve',
            data: retrieves,
            backgroundColor: 'rgb(255, 159, 64)',
          },
        ]
      }

      const config = {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Cost Comparison (￥)'
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
          },
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1
        },
      }
      if(chart){
        chart.destroy()
      }
      chart = new Chart(
        document.getElementById('costChart'),
        config
      )
    }

    return {Standard, Nearline, Coldline, Archive, totalspace, classA, classB, retrieve, time, estimate, timeChange, spaceChange}
  }
}
</script>