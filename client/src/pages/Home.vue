<template>
  <div class="content">
    <app-social-links></app-social-links>
    <div id="mainHeader">
      <h1>AVIV HARUZI</h1>
      <h2>FULL STACK DEVELOPER</h2>
    </div>
  </div>
</template>

<script>
  import SocialLinks from '@/components/SocialLinks'

  export default {
    components: {
      'app-social-links': SocialLinks
    }
  }
</script>
