<template>
  <div class="content">
    <div class="content-center row">
      <div class="col-md-12 absolute-center">
        <div class="row justify-content-center">
          <div v-for="project in projects" :key="project.name" class="col-lg-3 col-md-6 col-sm-6 mb-5 mt-5">
            <div class="hvr-shutter-out-horizontal">
              <div class="project-icons">
                <span v-if="project.github"><a :href="project.github" target="_blank"><i class="fa fa-github"></i></a></span>
                <span v-if="project.website"><a :href="project.website" target="_blank"><i class="fa fa-link"></i></a></span>
              </div>
              <img :src="project.picture" class="img-fluid">
            </div>
          </div>
        </div>
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
