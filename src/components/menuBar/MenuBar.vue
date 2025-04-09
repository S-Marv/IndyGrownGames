<script setup>
import Menubar from 'primevue/menubar';
import { Button } from 'primevue';
</script>

<template>
<Menubar :model="[]">
    <template #start>
        <img src="/menuBar/Icon.svg" width="50px" height="50px"/>
		<img src="/menuBar/IndyGrownGames.svg" width="400"/>
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
	background-image: linear-gradient(to right, #67CCFF , #A98CEE, #FF39D7, #F5FF6C)
}

Button{
	background-color: transparent;
	border-color: transparent;
}
</style>	