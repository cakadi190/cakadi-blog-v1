<template>
	<div class="widget" id="#category">
		<h5>Kategori</h5>

		<div class="list-group list-group-flush">
			<nuxt-link
				v-for="category in resultCategory"
				:key="category.slug"
				:to="`/kategori/${category.slug}`"
				class="list-group-item py-3 d-flex align-items-center gap-3 justify-content-between"
			>
				<span>{{ category.name }}</span>
				<span class="badge bg-primary">{{ category.count }}</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
const resultCategory = ref([]);
const { data } = await useAsyncData("category", () =>
  (queryContent("/") as any).only(["category"]).find()
);

if (Array.isArray(data.value) && data.value.length > 0) {
  const categories = [
    ...new Set(data.value.flatMap((item) => item.category)),
  ];

  const resultPromises = categories.map(async (cat) => {
    const slug = cat.toLowerCase().replace(/ /g, "-");
    const count = await (queryContent(`/${slug}`) as any).count();
    return { name: cat, slug, count };
  });

  resultCategory.value = await Promise.all(resultPromises);
}
</script>

<style>
</style>