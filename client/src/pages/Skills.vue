<template>
  <app-content class="mt-mobile">
    <div class="skill col-lg-3 col-md-6 text-center hvr-buzz" v-for="skill in skills" :key="skill">
      <h5 class="bg-white" style="color: #000">{{ skill }}</h5>
    </div>
  </app-content>
</template>

<script>
  import Content from '@/components/Content'

  export default {
    data () {
      return {
        skills: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'TYPESCRIPT', 'MYSQL',
        'PHP', 'NODE.JS', 'MONGODB', 'ANGULAR', 'VUE.JS', 'AMAZON WEB SERVICES']
      }
    },
    components: {
      'app-content': Content
    }
  }
</script>
