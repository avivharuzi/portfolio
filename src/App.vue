<template>
  <div>
    <app-nav></app-nav>
    <app-bars></app-bars>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from '@/components/Nav'
  import Bars from '@/components/Bars'

  export default {
    components: {
      'app-nav': Nav,
      'app-bars': Bars
    }
  }
</script>
