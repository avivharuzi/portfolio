<template>
  <div class="content">
    <div class="content-center row">
      <div class="skill col-lg-3 col-md-6 text-center hvr-buzz" v-for="skill in skills" :key="skill">
        <h5 class="bg-white" style="color: #000">{{ skill }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        skills: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'TYPESCRIPT', 'MYSQL',
        'PHP', 'NODE.JS', 'MONGODB', 'ANGULAR', 'VUE.JS', 'AMAZON WEB SERVICES']
      }
    }
  }
</script>
