<template>
  <div class="popup-wrapper" v-show="props.open">
    <div class="popup">
      <p>Вы действительно хотите удалить заказ?</p>
      <div class="popup__btns">
        <button class="buttons" @click="$emit('deleteOrder', props.order)">Ок</button>
        <button class="buttons" @click="$emit('close')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  order: {
    type: Object,
    required: true
  }
})
</script>