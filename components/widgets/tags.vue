<template>
	<div class="widget" id="#category">
		<h5 class="title">
			<span>Tagar</span>
		</h5>

		<div class="nav nav-pills gap-2">
			<nuxt-link
				v-for="category in resultTags"
				:key="category.slug"
				:to="`/tagar/${category.slug}`"
				class="nav-link"
			>
				<span>{{ category.name }}</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
const resultTags = ref([]);
const { data } = await useAsyncData("tags", () =>
  (queryContent("/") as any).only(["tags"]).find()
);

if (Array.isArray(data.value) && data.value.length > 0) {
  const tags = [
    ...new Set(data.value.flatMap((item) => item.tags)),
  ];

  const resultPromises = tags.map(async (cat) => {
    const slug = cat.toLowerCase().replace(/ /g, "-");
    return { name: cat, slug };
  });

  resultTags.value = await Promise.all(resultPromises);
};
</script>

<style scoped lang="scss">
.nav-link {
	background: rgba(var(--bs-body-color-rgb), .125);
	transition: all .2s;

	&:hover {
		transform: scale(1.05);
		background: var(--bs-primary);
		color: var(--bs-white);
	}
}
</style>