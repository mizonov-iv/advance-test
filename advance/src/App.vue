<script setup lang="ts">
import Navbar from './components/NavBar.vue'

const view = "auth"
</script>

<template>
  <Navbar :view="view"/>
  <RouterView />
</template>

<style scoped>
</style>
