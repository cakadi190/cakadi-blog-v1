<template>
	<main class="container my-5 py-5">
		<content-doc :path="routePath">
			<template #not-found>
				<p>No article found.</p>
			</template>

			<template #default="{ doc }">
				<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
					<nuxt-img
						:src="doc.image ? doc.image[0]['src'] : '/uploads/default.png'"
					/>
				</div>

				<h1>{{ doc.title }}</h1>

				<div class="meta-data">
					<div class="time">
						<Icon name="fa6-solid:calendar" />
						<time :datetime="$dayjs(doc.created_at).utc().toString()">{{
							$dayjs(doc.created_at).locale("id").format("dddd, D MMMM YYYY")
						}}</time>
					</div>
					<div class="author" v-if="doc.author">
						<Icon name="fa6-solid:user" />
						<span>{{ doc.author.name }}</span>
					</div>
				</div>

				<content-renderer :value="doc" />
			</template>
		</content-doc>
	</main>
</template>

<script setup lang="ts">
const route = useRoute();

const getPath = computed<string[]>(() => {
	return route.params.slug as string[];
});

const routePath = computed(() => {
	if (Array.isArray(getPath.value)) {
		return `/${getPath.value.join("/")}`;
	}
	return `${getPath.value}`;
});

const { data } = await useAsyncData("article", () => {
	const slugPath = Array.isArray(getPath.value)
		? getPath.value.join("/")
		: getPath.value;
	return (queryContent(slugPath) as any).findOne();
});
</script>

<style lang="scss" scoped>
.meta-data {
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0.5;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid var(--bs-border-color);

	> * {
		align-items: center;
		display: flex;
		gap: 0.5rem;
	}
}
</style>
