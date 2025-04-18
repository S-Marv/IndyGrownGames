<script setup>
import Cards from '@/components/cards/Cards.vue';
import { CardData } from '@/components/cards/CardData';
import { Icon } from '@/objects/Icon';
import SectionHeader from '@/components/SectionHeader.vue';
const bsu = new CardData("Ball State University",
		new Icon("education/ballstate.jpg", "https://www.bsu.edu/academics/collegesanddepartments/computer-science/academic-programs/majors/game-design"),
		"BSU has a game design program.")

const cards = [
	bsu, bsu, bsu, bsu, bsu, bsu, bsu
]

</script>


<template>
	<SectionHeader title="Learning Game Development" description="Many colleges throughout the state have game design and development programs!"/>
	<Cards :cards="cards"/>
</template>
