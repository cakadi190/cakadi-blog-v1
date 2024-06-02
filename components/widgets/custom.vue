<template>
  <div class="widget">
		<h5 class="title">
			<span>{{ title }}</span>
		</h5>

		<slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
	title: string;
}>()
</script>

<style>

</style>