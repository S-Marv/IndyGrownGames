<script setup>
import Menubar from 'primevue/menubar';
import { Button } from 'primevue';
</script>

<template>
<Menubar :model="[]" class="gradiant">
    <template #start>
		<a href="/">
			<img src="/menuBar/Icon.svg" width="50px" height="50px"/>
			<img src="/menuBar/IndyGrownGames.svg" width="400"/>
		</a>
    </template>
    <template #end>
        <Button>
			<img src="/menuBar/DropDown.svg" width="40px" height="40px"/>
		</Button>
    </template>
</Menubar>
</template>

<style scoped>
.p-menubar{
	border-radius: 0;
}

Button{
	background-color: transparent;
	border-color: transparent;
}
</style>	