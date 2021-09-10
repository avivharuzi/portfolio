<template>
  <p>I am an experienced full-stack developer, specialist in <b>front-end</b>
    and, <b>back-end</b> development. My fundamental work is focused on
    the JavaScript world with all of its diversities.
    More into details, I am working for the most with PHP and Node.js as a back-end,
    alongside Angular in the front-end, with databases such as MySQL and MongoDB.
    Exciting about learning and exploring new things about technologies
    and programming every day.
    You can explore some of my open-source projects on
    <a target="_blank" :href="githubRepositoriesLink">Github</a>.
    I work at an <a target="_blank"
                    :href="companyLink">e-square</a> company as a front-end developer.
    I give consulting and help companies to develop better web applications.
    In my free time, I love to see movies, tv shows and play video games.</p>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class About extends Vue {
  githubRepositoriesLink = 'https://github.com/avivharuzi?tab=repositories';

  companyLink = 'https://e-square.io';
}
</script>

<style>
  p {
    font-size: 1.25rem;
    line-height: 1.75;
  }
</style>
