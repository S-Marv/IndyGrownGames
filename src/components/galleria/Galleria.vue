<template>
    <div class="box">
        <Galleria :value="groups" :responsiveOptions="responsiveOptions" :numVisible="4" :circular="true" containerStyle="
		max-width: 800px; min-width:800px; border-width: 0; border-radius:0;"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <a :href="'#' + slotProps.item.hash">
                <img :src="slotProps.item.galleriaImage" style="height: 500px; display: block;" />
                </a>
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
    
defineProps({
    groups: Array
})
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

<style>
.box{
	display: flex;
	align-items: center;
	justify-content: center;
}

.p-galleria-nav-button{
    background-color: rgba(0, 0, 0, 0.682) !important;
}
</style>
