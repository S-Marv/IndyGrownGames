<script setup>
import Menubar from "primevue/menubar";
import NavMenu from "../menu/NavMenu.vue";
import { Button } from "primevue";
</script>

<template>
  <Menubar :model="[]">
    <template #start>
      <a href="/">
        <img src="/menuBar/Icon.svg" width="50px" height="50px" />
        <img src="/menuBar/IndyGrownGames.svg" width="400" />
      </a>
    </template>
    <template #end>
      <NavMenu />
    </template>
  </Menubar>
</template>

<style scoped>
.p-menubar {
  border-radius: 0;
  background-image: linear-gradient(to right, #67ccff, #a98cee, #ff39d7, #f5ff6c);
}

Button {
  background-color: transparent;
  border-color: transparent;
}
</style>
