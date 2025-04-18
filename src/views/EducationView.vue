<script setup>
import Cards from '@/components/cards/Cards.vue';
import { CardData } from '@/components/cards/CardData';
import { Icon } from '@/objects/Icon';
const bsu = new CardData("Ball State University",
		new Icon("education/ballstate.jpg", "https://www.bsu.edu/academics/collegesanddepartments/computer-science/academic-programs/majors/game-design"),
		"BSU has a game design program.")

const cards = [
	bsu, bsu, bsu, bsu, bsu, bsu, bsu
]

</script>


<template>
<Cards :cards="cards"/>
</template>
