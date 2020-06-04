<template>
  <p>I am an experienced full-stack developer, specialist in <b>front-end</b>
    and, <b>back-end</b> development. My fundamental work is focused on
    JavaScript world with all of its diversities.
    More into details, I am working for the most with PHP and Node.js as a back-end,
    alongside with Angular in the front-end, with databases such as MySQL and MongoDB.
    Exciting about learning and exploring new things about technologies
    and programming every day.
    You can explore some of my open-source projects on
    <a target="_blank" :href="githubRepositoriesLink">Github</a>.
    For right now I am working in the Golan Telecom telecommunications company
    for more than 2 years as a full-stack developer.
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
