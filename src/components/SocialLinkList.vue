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
import { Vue } from 'vue-class-component';

interface SocialLink {
  name: string;
  link: string;
}

export default class SocialLinks extends Vue {
  socialLinks: SocialLink[] = [
    { name: 'twitter', link: 'https://twitter.com/avivharuzi' },
    { name: 'facebook', link: 'https://www.facebook.com/people/Aviv-Haruzi/100001590224128' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/avivharuzi' },
    { name: 'instagram', link: 'https://www.instagram.com/avivharuzi' },
    { name: 'github', link: 'https://github.com/avivharuzi' },
    { name: 'envelope', link: 'mailto:avivharuzi@gmail.com' },
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
