<template>
  <div class="auth-wrapper">
    <form @submit.prevent="submitForm">
      <input
          class="inputs"
          type="text"
          placeholder="username"
          autocomplete="off"
          v-model="usernameInput"
      >
      <input
          class="inputs"
          type="text"
          placeholder="password"
          autocomplete="off"
          v-model="passwordInput"
      >
      <button class="buttons">Войти</button>
    </form>
  </div>
</template>

<script setup>
// import Input from "../components/Input.vue";
// import Button from "../components/Button.vue";
import {useAuthStore} from "../stores/AuthStore";
import {ref} from "vue";

const store = useAuthStore()

const usernameInput = ref("")
const passwordInput = ref("")

const submitForm = () => {
  store.updateUserInput(usernameInput.value, passwordInput.value)
  usernameInput.value = ""
  passwordInput.value = ""
}

// export default {
//   components: {Input, Button}
// }
</script>

<style scoped>

</style>