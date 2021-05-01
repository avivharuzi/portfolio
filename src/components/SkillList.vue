<template>
  <div class="skill-list d-flex align-items-center justify-content-center flex-wrap">
    <div class="skill-item p-2 m-3 rounded-pill" v-for="(skill, i) in skills" :key="i">
      <span>#{{ skill }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Skills extends Vue {
    skills: string[] = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'TYPESCRIPT', 'MYSQL',
      'PHP', 'NODE.JS', 'MONGODB', 'ANGULAR', 'REACT.JS', 'VUE.JS', 'GIT', 'NGINX', 'APACHE', 'DOCKER', 'AMAZON_WEB_SERVICES'];
}
</script>

<style lang="scss">
  @import './../scss/abstracts';

  .skill-list {
    .skill-item {
      background: $color-purple-100;
      color: $color-purple-900;
    }
  }
</style>
