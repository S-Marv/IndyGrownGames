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
    galleriaImage: "galleria/IGDA Pic.png",
    icons:[new Icon("groups/discord.png", "https://discord.com/")],
    hash:"IGDA",
  },
  {
    title:"Indy Indies",
    text: "Game development education and showcasing in the midwest",
    imageUrl:"groups/IndyIndies.svg",
    galleriaImage: "galleria/Indy Indies.png",
    icons:[new Icon("groups/insta.png", "https://google.com")],
    hash:"Indies",

  },
  {
    title: "Indy Tabletop Game Creators",
    text: "Indy TableTop Game Creators is a group based out of central Indiana that helps game designers and playtesters create great tabletop games together. We’re largely both “Indy” (Indianapolis) and “indie” (independent), but anyone who wants to help and be helped is welcome. Beginners are welcome! Early hand-scribbled prototypes are encouraged!",
    imageUrl: "groups/IndyGameCreators.svg",
    galleriaImage: "galleria/ITTC.png",
    icons:[new Icon("groups/discord.png", "https://discord.com/"), new Icon("groups/insta.png", "https://google.com")],
    hash:"ITGC",
  },
  {
    title:"BIG Night",
    text: "BIG Night is a monthly gathering of independent game designers and players from all around central Indiana. Come and see what games are being made in your area or show off your own projects! Games of all types (mobile, PC, board, card, etc.) and levels of polish are welcome.",
    imageUrl:"groups/BigNight.svg",
    galleriaImage: "galleria/BIG Night.png",
    icons:[new Icon("groups/insta.png", "https://google.com")],
    hash:"BIG",
  },
])

</script>

<template>
  <main>
    <Galleria :groups="groups"/>
    <SectionHeader title="Indiana Development Communities"
      description="There are many game development communities throughout the state!"/>
    <Group v-for="(item, index) in groups" :title="item.title" :img-on-left="index%2==0" :imageUrl="item.imageUrl" :icons="item.icons" :hash="item.hash">
      {{ item.text }}
    </Group>
    <div id="Calendar"><Calendar/></div>
  </main>
</template>

<style>

</style>
