<template>
  <div class="navbar">
    <div class="navbar__item">
      <router-link class="navbar__link" to="/orders">Все заказы</router-link>
      <router-link class="navbar__link" to="/add-order">Добавить заказ</router-link>
    </div>
    <div class="navbar__item">
      <div>Имя Фамилия</div>
      <button class="navbar__btn">Выйти</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["view"]
}
</script>

<style scoped>

</style>