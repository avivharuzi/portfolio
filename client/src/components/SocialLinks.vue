<template>
  <div class="social-links">
    <ul>
      <li v-for="socialLink in socialLinks" :key="socialLink.name">
        <a class="hvr-grow" :class="socialLink.name" :href="socialLink.link" target="_blank"><i :class="'fa fa-' + socialLink.name"></i></a>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        socialLinks: [
          { name: 'twitter', link: 'https://twitter.com/aviv_haruzi' },
          { name: 'facebook', link: 'https://www.facebook.com/people/Aviv-Haruzi/100001590224128' },
          { name: 'linkedin', link: 'https://www.linkedin.com/in/aviv-haruzi-33589915b' },
          { name: 'instagram', link: 'https://www.instagram.com/aviv_haruzi' },
          { name: 'github', link: 'https://github.com/avivharuzi' }
        ]
      }
    }
  }
</script>
