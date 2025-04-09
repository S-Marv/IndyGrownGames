<script setup>
import { Card, Image, Panel } from 'primevue';

defineProps({
	imgOnLeft:Boolean,
	text:String,
})
</script>



<template>
	<Panel class="flex-panel">
		<div class="flex-container">
			<div class="group-text" :style="imgOnLeft? 'order:1;' : 'order:-1; text-align:right'">
				<h1>{{text}}</h1>
				<p>asdf</p>
			</div>
			<img class="group-image" src="/groups/igda.png" style="flex-grow: 1;" width="150px"/>
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

.flex-panel .flex-container{
	display: flex;
}

.group-image{
	padding-left: 20px;
	padding-right: 20px;


}
</style>