<template>
	<article id="page-section">
		<h1>{{ data.title }}</h1>

		<breadcrumb-vue :breadcrumbs="[
			{ label: 'Beranda', url: '/' },
			{ label: data.title, url: `/page/${route.params.slug}` },
		]" />

		<ContentRendererMarkdown :value="data" />
	</article>
</template>

<script lang="ts">
export default defineComponent({
	name: "PostContent",
});
</script>

<script lang="ts" setup>
defineProps<{
	data: any;
}>();

const route = useRoute();
const requesturl = useRequestURL();
</script>

<style lang="scss" scoped>
.meta-data {
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0.75;
	padding-top: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1.5rem;
	border-top: 1px solid var(--bs-border-color);
	border-bottom: 1px solid var(--bs-border-color);

	> * {
		align-items: center;
		display: flex;
		gap: 0.5rem;
	}
}

.author-section {
	padding-bottom: 1rem;
	margin-bottom: 3rem;
}
</style>