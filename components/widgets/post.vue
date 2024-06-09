<template>
	<div class="widget" id="#category">
		<h5 class="title">
			<span>Artikel Lain</span>
		</h5>

		<post-list :data="data" :pending="pending" :error="error" />
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = "list-artikel-" + generateRandomString(15);
const { data, pending, error } = await useAsyncData<Post[]>(id, () =>
	(queryContent("/articles") as any).find(),
	{
		transform: (items) => {
			const currentPath = route.fullPath.replace('/artikel', '');
			return items.filter((item) => item._path.substring('/articles'.length) !== currentPath);
		}
	}
);
</script>

<style>
</style>