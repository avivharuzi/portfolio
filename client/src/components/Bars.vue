<template>
  <div id="bars">
    <div v-for="n in 3" :key="n" :class="'bar' + n"></div>
  </div>
</template>
