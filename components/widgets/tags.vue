<template>
	<div class="widget" id="#tags">
		<h5 class="title">
			<span>Tagar</span>
		</h5>

		<div class="nav nav-pills gap-2">
			<nuxt-link
				v-for="tags in resultTags"
				:key="tags.slug"
				:to="`/label/${tags.slug}`"
				class="nav-link"
			>
				<span>{{ tags.name }}</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
const resultTags = ref([]);
const { data } = await useAsyncData<Post[]>("tags", () =>
  (queryContent("/") as any).only(["tags"]).find(),
	{
		transform(items) {
			return items.slice(0, 9).filter((item) => item.tags !== null);
		}
	}
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