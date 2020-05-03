<template>
  <div class="home text-center">
    <figure class="pt-5 mb-4">
      <img class="img-profile rounded-circle" alt="profile" width="200px" height="200px"
           src="./../assets/images/profile.jpeg">
    </figure>

    <h1 class="m-0 mb-3">Hello, I'm Aviv Haruzi</h1>
    <h2 class="m-0">I'm a full-stack developer</h2>

    <div class="mt-4 d-flex justify-content-center align-items-center">
      <p class="p-0 m-0"><i class="fa fa-map-marker mr-2"></i>Yehud, Israel<img
        class="ml-2" width="25px" src="./../assets/images/isr.svg" alt="Israel"></p>
    </div>

    <div class="mt-5">
      <SocialLinks/>
    </div>

    <div class="mt-5">
      <Skills/>
      <div class="mt-3">
        <p>and many more...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Skills from '@/components/SkillList.vue';
import SocialLinks from '@/components/SocialLinkList.vue';

export default {
  components: {
    Skills,
    SocialLinks,
  },
};
</script>

<style lang="scss">
  @import './../scss/abstracts';

  .home {
    h1, h2 {
      font-family: Caveat, sans-serif;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      color: $color-gray-700;
    }

    img.img-profile {
      object-fit: cover;
    }
  }
</style>
