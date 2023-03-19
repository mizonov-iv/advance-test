<template>
  <table v-if="ordersStore.allOrders.length > 0" class="orders__table">
    <thead>
      <tr>
        <th>№</th>
        <th>Имя клиента</th>
        <th class="clickable" @click="sortByAddress">Адрес</th>
        <th class="clickable" @click="sortByDate">Дата заказа</th>
        <th>Статус</th>
        <th>Комментарий</th>
      </tr>
    </thead>
    <tbody>
    <tr class="table__row" :class="{'completed-order': order.status === 'Выполнен'}" v-for="(order, index) in ordersStore.allOrders" :key="index">
      <td>{{order.id}}</td>
      <td>{{order.name}}</td>
      <td>{{order.address}}</td>
      <td>{{order.date}}</td>
      <td>{{order.status}}</td>
      <td>{{order.comment}}</td>
      <div class="table-btns" v-show="authStore.authorizedUser.role === 'ADMIN'">
        <button
            class="btn btn-done"
            v-if="order.status !== 'Выполнен'"
            @click="markAsCompleted(order)"
        ></button>
        <button class="btn btn-delete" @click="showPopup(order)"></button>
      </div>
    </tr>
    </tbody>
  </table>
  <div class="empty-list" v-else>Заказы отсутсвуют</div>
  <PopUp
      :open="popupIsOpen"
      :order="selectedOrder"
      @deleteOrder="deleteOrder"
      @close="popupIsOpen = !popupIsOpen"
  />
</template>

<script setup>
import {useOrdersStore} from "../stores/OrdersStore.ts";
import {useAuthStore} from "../stores/AuthStore.ts";
import PopUp from "../components/PopUp.vue";
import {ref} from "vue";

const ordersStore = useOrdersStore();
const authStore = useAuthStore();

let popupIsOpen = ref(false);
let selectedOrder = ref({});

const showPopup = ref((order) => {
  popupIsOpen.value = true;
  selectedOrder = order;
})

const deleteOrder = (order) => {
  ordersStore.deleteOrder(order);
  popupIsOpen.value = false;
}

const markAsCompleted = (order) => {
  ordersStore.completeTheOrder(order);
}

const sortByAddress = () => {
  ordersStore.allOrders.sort((a, b) => a.address.localeCompare(b.address));
}

const sortByDate = () => {
  ordersStore.allOrders.sort((a, b) => a.date.localeCompare(b.date));
}
</script>