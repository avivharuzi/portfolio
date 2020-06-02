<template>
  <p>Experienced full-stack developer specialist in <b>front-end</b>
    and <b>back-end</b> development which focused
    on the most in JavaScript world.
    Working with PHP and Node.js in the back-end alongside Angular in the front-end.
    With databases working with MySQL and MongoDB.
    I love to learn and explore new things about technologies and programming every day.
    Very passionate about open source projects you can explore my projects on my
    Github <a target="_blank" :href="githubRepositoriesLink">repositories</a>.
    For right now I am working in the Golan Telecom telecommunications company for more than 2 years
    as a full-stack developer.
    In my free time, I love to see movies and tv shows and play video games.</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  githubRepositoriesLink = 'https://github.com/avivharuzi?tab=repositories';
}
</script>

<style>
  p {
    font-size: 1.25rem;
    line-height: 1.75;
  }
</style>
