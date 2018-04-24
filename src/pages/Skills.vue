<template>
  <div class="content">
    <div class="content-center row">
      <div class="skill col-lg-3 col-md-6 text-center hvr-buzz" v-for="skill in skills" :key="skill.name">
        <h5 :style="{ color: skill.color }">{{ skill.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        skills: [
          { name: 'HTML', color: '#E54C21' },
          { name: 'CSS', color: '#0170BA' },
          { name: 'SASS', color: '#CC6699' },
          { name: 'JAVASCRIPT', color: '#F0DB4F' },
          { name: 'TYPESCRIPT', color: '#007ACC' },
          { name: 'MYSQL', color: '#E88D00' },
          { name: 'PHP', color: '#787CB4' },
          { name: 'NODE.JS', color: '#8CC84B' },
          { name: 'MONGODB', color: '#402E20' },
          { name: 'ANGULAR', color: '#C3002F' },
          { name: 'VUE.JS', color: '#3FB984' },
          { name: 'AMAZON WEB SERVICES', color: '#FF9A00' }
        ]
      }
    }
  }
</script>
