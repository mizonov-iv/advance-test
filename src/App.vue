<script setup lang="ts">
import Navbar from './components/NavBar.vue';
import {useOrdersStore} from "./stores/OrdersStore";
import {onMounted} from "vue";

const ordersStore = useOrdersStore();

onMounted(() => {
  ordersStore.getAllOrders();
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>