<script setup>

import Galleria from '@/components/galleria/Galleria.vue';
import Group from '@/components/groups/Group.vue';
import { Icon } from '@/objects/Icon';
import { ref } from 'vue';
import Calendar from '@/components/Calendar/Calendar.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const groups = ref([
  {
    title: "IGDA Indianapolis",
    text: "We’re a friendly group of game makers who get together once a month to talk about game development and share best practices. We’re your support group when something isn’t working, when you need to find an artist, or when you’re hyped about something you made and what to share it with your peers. This organization is for you to make connections and find opportunity.",
    imageUrl: "groups/igda.png",
    icons:[new Icon("groups/discord.png", "https://discord.com/")]
  },
  {
    title: "Indy Tabletop Game Creators",
    text: "Indy TableTop Game Creators is a group based out of central Indiana that helps game designers and playtesters create great tabletop games together. We’re largely both “Indy” (Indianapolis) and “indie” (independent), but anyone who wants to help and be helped is welcome. Beginners are welcome! Early hand-scribbled prototypes are encouraged!",
    imageUrl: "groups/IndyGameCreators.svg",
    icons:[new Icon("groups/discord.png", "https://discord.com/"), new Icon("groups/insta.png", "https://google.com")]

  }
])

</script>

<template>
  <main>
    <Galleria/>
    <SectionHeader title="Indiana Development Communities"
      description="There are many game development communities throughout the state!"/>
    <Group v-for="(item, index) in groups" :title="item.title" :img-on-left="index%2==0" :imageUrl="item.imageUrl" :icons="item.icons">
      {{ item.text }}
    </Group>
    <div id="Calendar"><Calendar/></div>
  </main>
</template>

<style>

</style>
