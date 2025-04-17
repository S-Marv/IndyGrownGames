<script setup>
import Menubar from 'primevue/menubar';
import { Button } from 'primevue';
import { menubarRoutes } from '@/router';
const base = import.meta.env.BASE_URL


function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
</script>

<template>
<Menubar :model="menubarRoutes" style="justify-content: space-between;">
    <template #start>
		<a href="/">
			<img src="/menuBar/Icon.svg" width="50px" height="50px"/>
			<img src="/menuBar/IndyGrownGames.svg" width="400"/>
		</a>
    </template>
	<template #item = "slotprops">
        <a :href="base + slotprops.item.path" class="menubar-link"><u><b>{{ capitalizeFirstLetter(slotprops.item.name) }}</b></u></a>
    </template>
</Menubar>
</template>

<style scoped>
.p-menubar{
	border-radius: 0;
	background-image: linear-gradient(to left, #67CCFF , #A98CEE, #FF39D7, #F5FF6C)
}

Button{
	background-color: transparent;
	border-color: transparent;
}

.menubar-link{
	color: white;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	font-size: x-large;
	text-shadow: 1px 1px gray;
}

</style>	