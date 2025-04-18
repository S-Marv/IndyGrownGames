<script setup>
defineProps({
	title:String,
	description:[String, null]
})
</script>

<template>
	<div class="title_page">
		<div class="title">{{ title }}</div>
      <div v-if="description">{{ description }}</div>
    </div>
</template>

<style scoped>

.title_page{
  text-align: center;
  font-family: "Jersey", sans-serif;
  margin: 10px;
}

.title{
	font-size: 4em;
}
</style>