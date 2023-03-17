<template>
  <table v-if="store.allOrders.length > 0" class="orders__table">
    <thead class="table-header">
      <tr>
        <th>№</th>
        <th>Имя клиента</th>
        <th>Адрес</th>
        <th>Дата заказа</th>
        <th>Статус</th>
        <th>Комментарий</th>
      </tr>
    </thead>
    <tbody>
    <tr class="table__row" v-for="(order, index) in store.allOrders" :key="index">
      <td>{{order.id}}</td>
      <td>{{order.name}}</td>
      <td>{{order.address}}</td>
      <td>{{order.date}}</td>
      <td>{{order.status}}</td>
      <td>{{order.comment}}</td>
      <div class="table-btns">
        <button class="btn btn-done" v-if="order.status !== 'Выполнен'" ></button>
        <button class="btn btn-delete" @click="deleteOrder(order)"></button>
      </div>
    </tr>
    </tbody>
  </table>
  <div v-else>Заказы отсутсвуют</div>
</template>

<script setup>
import {useOrdersStore} from "../stores/OrdersStore.ts";

const store = useOrdersStore();

const deleteOrder = (order) => {
  store.deleteOrder(order)
}

</script>

<style scoped>

</style>