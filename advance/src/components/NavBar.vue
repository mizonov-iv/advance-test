<template>
  <div class="navbar" v-if="store.authorizedUser.name !== ''">
    <div class="navbar__item">
      <router-link class="navbar__link" to="/orders">Все заказы</router-link>
      <router-link class="navbar__link" to="/add-order">Добавить заказ</router-link>
    </div>
    <div class="navbar__item">
      <div>{{store.authorizedUser.name}}</div>
      <button class="navbar__btn" @click="exit">Выйти</button>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "../stores/AuthStore.ts";

const store = useAuthStore()

const exit = () => {
  store.goToLoginPage()
}
</script>

<style scoped>

</style>