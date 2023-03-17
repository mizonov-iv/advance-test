<script setup lang="ts">
import Navbar from './components/NavBar.vue'
import {useOrdersStore} from "./stores/OrdersStore";
import {onMounted} from "vue";

const view = "auth"
const store = useOrdersStore();

onMounted(() => {
  store.getAllOrders()
})
</script>

<template>
  <Navbar :view="view"/>
  <RouterView />
</template>

<style scoped>
</style>
