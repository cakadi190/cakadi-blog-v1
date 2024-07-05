<template>
	<client-only>
		<div class="widget" id="#category">
			<h5 class="title">
				<span>Artikel Lain</span>
			</h5>

			<post-list :data="data" :pending="status" :error="error" />
		</div>
	</client-only>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = "list-artikel-" + generateRandomString(15);

const { data, status, error, refresh } = await useLazyAsyncData<Post[]>(
	id,
	() => (queryContent("/articles") as any).find(),
	{
		transform: (items) => {
			const currentPath = route.fullPath.replace("/artikel", "");
			return items
				.filter(
					(item) =>
						item._path.substring("/articles".length) !== currentPath &&
						!item.draft
				)
				?.sort(
					(a, b) =>
						new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				)
				.filter((item) => `/artikel/${item._path}` != route.path)
				.slice(0, 5);
		},
	}
);

onUpdated(() => refresh);
</script>

<style>
</style>