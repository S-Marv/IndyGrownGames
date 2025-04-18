<script setup>
import { ref } from "vue";
import { Menu } from "primevue";
import { Button } from "primevue";
import { menubarRoutes } from "@/router";

const menu = ref();
const items = ref([
  {
    items: [
      {
        label: "About",
        backgroundColor: "#67ccff",
        route: menubarRoutes[0].path,
      },
      {
        label: "EDU",
        backgroundColor: "#a98cee",
        route: menubarRoutes[2].path,
      },
      {
        label: "Games",
        backgroundColor: "#ff39d7",
        route: menubarRoutes[1].path,
      },
      {
        label: "Calendar",
        backgroundColor: "#f5ff6c",
        route: "/",
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
    <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" id="menu-button">
      <img src="/menuBar/DropDown.svg" width="40px" height="40px" />
    </Button>

    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #item="{ item }">
        <router-link :to="item.route" custom v-slot="{ navigate }">
          <div class="menu-item-wrapper" :style="{ backgroundColor: item.backgroundColor }" @click="navigate">
            <span class="menu-item">{{ item.label }}</span>
          </div>
        </router-link>
      </template>
    </Menu>
  </div>
</template>

<style scoped>
.p-button{
  background-color: rgba(0, 0, 0, 0.462);
}

.menu-item-wrapper {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-item-wrapper:hover {
  filter: brightness(0.9);
  transform: scale(1.02);
}

.menu-item {
  font-family: "Jersey", sans-serif;
  font-size: 3rem;
}
</style>
