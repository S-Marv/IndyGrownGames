<script setup>
import { Icon } from '@/objects/icon';
import { Card, Image, Panel } from 'primevue';

defineProps({
	imgOnLeft:Boolean,
	title:String,
	imageUrl: String,
	icons: [Array, null],
})
</script>



<template>
	<Panel class="flex-panel">
		<div class="flex-container">
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
.group-text{
	width: 80%;
	flex-grow: 4;
}

.flex-panel {
  border-radius: 0;
}

.flex-container{
	display: flex;
}

.group-image{
	padding-bottom: 5px;

}

.title-container{
	align-items: flex-end;
	justify-content: space-between;
}
</style>