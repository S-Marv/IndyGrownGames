<script setup>
import { Card } from 'primevue';

const width = "250px";
defineProps({
	sectionHeader: String,
	sectionDescription: String,
	cards:Array,
})

</script>

<template>
	<div>
		<h1>{{ sectionHeader }}</h1>
		{{ sectionDescription }}
	</div>
	<div class="card-container">
		<Card :style="'width:' + width + ';'" v-for="card in cards">
			<template #header>
				<img :alt="card.name" :src="card.icon.imageURL" height="100px" :width="width"/>
			</template>
			<template #title><a :href="card.icon.link"><u>{{card.name}}</u></a></template>
			<template #content>
				<p class="m-0">
					{{card.text}}
				</p>
			</template>
		</Card>
	</div>
</template>

<style scoped>
.card-container{
	display:flex;
	flex-flow:wrap;
	justify-self: center;

}

.p-card{
	margin: 0px 10px 10px;
	overflow: hidden;
	border: medium solid;
	border-image: var(--top-down-gradient) 1;

}

img{
	object-fit: cover;
}

a{
	font-family: "Jersey", sans-serif;
	font-size: x-large;
}
</style>