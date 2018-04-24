<template>
  <div class="content">
    <div class="content-center row justify-content-center">
      <div v-for="project in projects" :key="project.name" class="col-lg-3">
        <img :src="project.picture" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        projects: null
      }
    },
    created () {
      this.$http.get('static/data/projects.json').then((res) => this.projects = res.data)
    }
  }
</script>
