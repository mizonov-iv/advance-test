<template>
  <div class="popup-wrapper" v-show="open">
    <div class="popup">
      <p>Вы действительно хотите удалить заказ?</p>
      <div class="popup__btns">
        <button class="buttons" @click="$emit('deleteOrder', order)">Ок</button>
        <button class="buttons" @click="$emit('close')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    order: {
      type: Object,
      required: true
    }
  }
}

</script>

<style scoped>

</style>