<script setup>
defineProps({
	title:String,
	description:[String, null]
})
</script>

<template>
	<div class="title_page">
		<div class="title">{{ title }}</div>
    	<div class="description" v-if="description"><p>{{ description }}</p></div>
    </div>
</template>

<style scoped>

.title_page{
  text-align: center;
  margin: 10px;
}

.description{
	font-size: 2em;
}

.title{
	font-size: 4em;
	font-family: "Jersey", sans-serif;
}
</style>