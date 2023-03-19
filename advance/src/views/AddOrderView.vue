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
          @input="onInputUpdate"
      >
      <input
          class="inputs"
          type="text"
          placeholder="Введите ваш адрес"
          autocomplete="off"
          v-model="address"
          @input="onInputUpdate"
      >
      <input
          class="inputs"
          type="text"
          placeholder="Комментарий"
          autocomplete="off"
          v-model="comment"
      >
      <button
          class="add-order__buttons"
          :class="{'btn-disabled': !btnDisabled}"
          :disabled="!btnDisabled"
      >
        Добавить заказ
      </button>
    </form>
  </div>
</template>

<script setup>
import {useOrdersStore} from "../stores/OrdersStore.ts";
import {useAuthStore} from "../stores/AuthStore.ts";
import {ref} from "vue";

const ordersStore = useOrdersStore();
const authStore = useAuthStore();

const name = ref(authStore.authorizedUser.name);
const address = ref("");
const comment = ref("");
const date = ref(new Date().toLocaleString("ru", {
  year: "numeric",
  month: "long",
  day: "numeric"
}))

let btnDisabled = ref(false);

const onInputUpdate = () => {
  if (name.value && address.value) {
    btnDisabled = true;
  }
}

const addOrder = () => {
  const newOrder = {
    name: name.value,
    address: address.value,
    date: date.value,
    status: "Новый",
    comment: comment.value
  }

  ordersStore.addNewOrder(newOrder);

  name.value = "";
  address.value = "";
  comment.value = "";
}
</script>