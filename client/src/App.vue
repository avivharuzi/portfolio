<template>
  <div>
    <transition name="fade" mode="out-in">
      <app-nav v-if="isOpen" @linkClicked="toggle"></app-nav>
    </transition>
    <app-bars @click.native="toggle" :class="{ 'change': isOpen }"></app-bars>
    <transition name="fade" mode="out-in">
      <router-view v-if="!isOpen"></router-view>
    </transition>
  </div>
</template>

<script>
  import Nav from '@/components/Nav'
  import Bars from '@/components/Bars'

  export default {
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen
      }
    },
    components: {
      'app-nav': Nav,
      'app-bars': Bars
    }
  }
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.4s;
    transition-delay: 0.4s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 0.4s;
    opacity: 0;
  }
</style>
