<template>
  <div class="auth__wrapper">
    <form @submit.prevent="submitForm">
      <input
          class="inputs"
          type="text"
          placeholder="username"
          autocomplete="off"
          v-model="usernameInput"
          @input="onInputUpdate"
      >
      <input
          class="inputs"
          type="text"
          placeholder="password"
          autocomplete="off"
          v-model="passwordInput"
          @input="onInputUpdate"
      >
      <div class="auth__validation" v-if="store.validationsErrors.length">
        <p v-for="error in store.validationsErrors">{{ error }}</p>
      </div>
      <button
          class="buttons"
          :class="{'btn-disabled': !btnDisabled}"
          :disabled="!btnDisabled"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script setup>
import {useAuthStore} from "../stores/AuthStore";
import {ref} from "vue";

const store = useAuthStore()

let usernameInput = ref("")
let passwordInput = ref("")
let btnDisabled = ref(false)

const onInputUpdate = () => {
  store.validationsErrors.length = 0
  if (usernameInput.value && passwordInput.value) {
    btnDisabled = true;
  }
}

const submitForm = () => {
  store.login(usernameInput.value, passwordInput.value)
  usernameInput.value = ""
  passwordInput.value = ""
}
</script>