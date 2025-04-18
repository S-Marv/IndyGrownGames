<script setup>
import Cards from '@/components/cards/Cards.vue';
import { CardData } from '@/components/cards/CardData';
import { Icon } from '@/objects/Icon';
const terraria = new CardData("Terraria",
		new Icon("games/Terraria.jpg", "https://terraria.org/"),
		"Terraria's development team, Re-Logic, is based in Indiana.")

const cards = [
	terraria, terraria, terraria, terraria, terraria, terraria, terraria
]

</script>


<template>
<Cards :cards="cards"/>
</template>