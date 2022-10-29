<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

const nodeVersion = ref(window.versions.node)
const chromeVersion = ref(window.versions.chrome)
const electronVersion = ref(window.versions.electron)
</script>

<template>
  <h1>Hello World!</h1>
  <p>
    We are using Node.js <span>{{ nodeVersion }}</span>,
    Chromium <span>{{ chromeVersion }}</span>,
    and Electron <span>{{ electronVersion }}</span>.
  </p>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Electron + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
