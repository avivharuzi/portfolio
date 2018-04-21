<template>
  <div id="nav">
    <ul class="nav-list">
      <li v-for="(navlink, i) in navlinks" :key="i" class="nav-link-custom" @click="linkClick">
        <router-link :to="navlink.link" class="hvr-underline-from-center">{{ navlink.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navlinks: [
          { name: 'Home', link: '/' },
          { name: 'Projects', link: '/projects' },
          { name: 'Skills', link: '/skills' },
          { name: 'About', link: '/about' },
          { name: 'Contact', link: '/contact' }
        ]
      }
    },
    methods: {
      linkClick() {
        this.$emit('linkClicked')
      }
    }
  }
</script>
