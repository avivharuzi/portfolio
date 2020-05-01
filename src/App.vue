<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>
