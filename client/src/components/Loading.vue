<template>
  <div v-if="loading" class="main-loading" :class="background">
    <div class="loading">
      <img :src="src"
      :width="width"
      :height="height">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loading: Boolean,
      src: String,
      width: Number,
      height: Number,
      background: {
        type: String,
        default: 'black'
      }
    }
  }
</script>

<style scoped>
  .main-loading {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    z-index: 9999;
  }

  .main-loading.white {
    background-color: rgba(255, 255, 255, 0.85);
  }

  .main-loading.black {
    background-color: rgba(0, 0, 0, 0.85);
  }

  .loading {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
  }
</style>
