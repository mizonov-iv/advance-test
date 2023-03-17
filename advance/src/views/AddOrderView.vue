<template>
  <div class="add-order__wrapper">
    <h4 class="add-order__header">Добавить заказ</h4>
    <form class="add-order__form" @submit.prevent="addOrder">
      <input
          class="inputs"
          type="text"
          placeholder="Введите ваше имя"
          autocomplete="off"
          v-model="name"
      >
      <input
          class="inputs"
          type="text"
          placeholder="Введите ваш адрес"
          autocomplete="off"
          v-model="address"
      >
      <input
          class="inputs"
          type="text"
          placeholder="Комментарий"
          autocomplete="off"
          v-model="comment"
      >
      <button class="add-order__buttons">Добавить заказ</button>
    </form>
  </div>
</template>

<script setup>
import {useOrdersStore} from "../stores/OrdersStore.ts";
import {ref} from "vue";

const store = useOrdersStore()

const name = ref("")
const address = ref("")
const comment = ref("")
const date = ref(new Date().toLocaleString("ru", {
  year: "numeric",
  month: "long",
  day: "numeric"
}))

const addOrder = () => {
  const newOrder = {
    name: name.value,
    address: address.value,
    date: date.value,
    status: "Новый",
    comment: comment.value
  }

  store.addNewOrder(newOrder)

  name.value = ""
  address.value = ""
  comment.value = ""
}

</script>

<style scoped>

</style>