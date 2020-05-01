<template>
  <div class="social-link-list">
    <ul class="d-flex justify-content-center p-0 m-0">
      <li class="mx-3" v-for="socialLink in socialLinks" :key="socialLink.name">
        <a :class="socialLink.name" :href="socialLink.link" target="_blank"><i
          :class="'fa fa-' + socialLink.name"></i></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface SocialLink {
  name: string;
  link: string;
}

@Component
export default class SocialLinks extends Vue {
  socialLinks: SocialLink[] = [
    { name: 'twitter', link: 'https://twitter.com/aviv_haruzi' },
    { name: 'facebook', link: 'https://www.facebook.com/people/Aviv-Haruzi/100001590224128' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/aviv-haruzi-33589915b' },
    { name: 'instagram', link: 'https://www.instagram.com/aviv_haruzi' },
    { name: 'github', link: 'https://github.com/avivharuzi' },
  ];
}
</script>

<style lang="scss">
  @import './../scss/abstracts';

  .social-link-list {
    ul {
      list-style-type: none;

      a {
        color: $color-gray-500;
        font-size: 1.5rem;

        &:hover {
          color: $color-gray-700;
        }
      }
    }
  }
</style>
