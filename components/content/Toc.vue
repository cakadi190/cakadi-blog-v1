<template>
  <table-of-contents :tocData="data.body.toc" />
</template>

<script lang="ts" setup>
const route = useRoute();

const getPath = computed<string[]>(() => {
	return route.params.slug as string[];
});

const { data } = await useAsyncData<Post>("article", () => {
	const slugPath = Array.isArray(getPath.value)
		? getPath.value.join("/")
		: getPath.value;
	return (queryContent(`/articles/${slugPath}`) as any).findOne();
});
</script>