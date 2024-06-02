<template>
	<client-only>
		<highlightjs autodetect :code="$slots.default" />
	</client-only>
</template>

<script lang="ts" setup>
defineProps<{
	language?: any;
}>();
</script>

<style>
</style>