<script setup>
import { Card, Image, Panel } from 'primevue';

defineProps({
	imgOnLeft:Boolean,
	title:String,
	imageUrl: String,
	icons: [Array, null],
	hash: String,
})
</script>



<template>
	<Panel class="flex-panel">
		<div class="flex-container" :id="hash">
			<div class="group-text" :style="imgOnLeft? 'order:1;' : 'order:-1; text-align:right; '">
				<div class="flex-container title-container" :style="imgOnLeft? '': 'flex-direction: row-reverse;'">
					<h1>{{title}}</h1>
					<div v-if="icons" style="margin-inline: .5em;">	
						<a v-for="icon in icons" :href="icon.link">
							<img  :src="icon.imageURL" width="30px" :alt="icon.link"/>
						</a>
					</div>
				</div>
				<slot />
			</div>
			<div class="flex-container" style="flex-direction: column; padding-left: 20px;padding-right: 20px;">
				<img class="group-image" :src="imageUrl" style="flex-grow: 1; align-self: flex-start; " width="200px"/>
			</div>
		</div>
	</Panel>
</template>

<style scoped>

h1{
	font-family: "Jersey", sans-serif;
	font-weight:500;
}

.group-text{
	width: 80%;
	flex-grow: 4;
}

.flex-panel {
  border-radius: 0;
  border: solid thick;
  border-image: var(--gradient) 1;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px; 
  margin-bottom: 20px; 
  padding-bottom: 20px;
}

.flex-container{
	display: flex;
}

.group-image{
	padding-bottom: 5px;

}

.title-container{
	align-items: flex-end;
}


</style>