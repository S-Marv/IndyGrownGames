<script setup>
import { ref } from "vue";
import { Menu } from "primevue";
import { Button } from "primevue";

const menu = ref();
const items = ref([
  {
    label: "Options",
    items: [
      {
        label: "Refresh",
        icon: "pi pi-refresh",
      },
      {
        label: "Export",
        icon: "pi pi-upload",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <div class="card flex justify-center">
    <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
      <img src="/menuBar/DropDown.svg" width="40px" height="40px" />
    </Button>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>
