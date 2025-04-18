<script setup>
import { Card } from 'primevue';

const width = "250px";
defineProps({
	cards:Array,
})

</script>

<template>
	<div class="card-container">
		<Card :style="'width:' + width + ';'" v-for="card in cards">
			<template #header>
				<img :alt="card.name" :src="card.icon.imageURL" height="100px" :width="width"/>
			</template>
			<template #title><a :href="card.icon.link">{{card.name}}</a></template>
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
}

img{
	object-fit: cover;
}
</style>