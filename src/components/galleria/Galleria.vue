<template>
    <div class="box">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :circular="true" containerStyle="
		max-width: 800px; min-width:800px; border-width: 0; border-radius:0;"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item" style="height: 500px; display: block;" />
            </template>
			<template #thumbnail="slotProps">
                <img :src="slotProps.item" :alt="slotProps" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Galleria } from "primevue";

const images = ref([
	"galleria/IGDA Pic.png",
	"galleria/Indy Indies.png",
	"galleria/ITTC.png",
	"galleria/BIG Night.png",

]);
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<style scoped>
.box{
	display: flex;
	align-items: center;
	justify-content: center;

}
</style>
