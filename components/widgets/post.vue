<template>
	<div class="widget" id="#category">
		<h5 class="title">
			<span>Artikel Lain</span>
		</h5>

		<post-list :data="data" :pending="pending" :error="error" />
	</div>
</template>

<script lang="ts" setup>
const id = "list-artikel-" + generateRandomString(15);
const { data, pending, error } = await useAsyncData<Post[]>(id, () =>
	(queryContent("/") as any).find()
);
</script>

<style>
</style>