<template>
	<main class="container my-5 py-5">
		<div class="row gy-4 pt-5">
			<div class="col-md-9">
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
									$dayjs(doc.created_at)
										.locale("id")
										.format("dddd, D MMMM YYYY")
								}}</time>
							</div>
							<div class="author" v-if="doc.author">
								<Icon name="fa6-solid:user" />
								<span>{{ doc.author.name }}</span>
							</div>
						</div>

						<div class="mb-4 pb-3 border-bottom">
							<content-renderer :value="doc" />
						</div>

						<div id="coment-section" class="target-hashbang">
							<h3>Komentar dan Tanggapan</h3>

							<div class="alert bg-info-subtle d-flex gap-3">
								<Icon
									name="mdi:information-variant-circle"
									class="flex-shrink-0"
									size="32"
								/>
								<span
									>Mohon bersabar ya, karena fitur komentar ini sedang saya
									persiapkan di development selanjutnya. Karen mengingat website
									ini sedang dibangun dari awal.</span
								>
							</div>
						</div>
					</template>
				</content-doc>
			</div>
			<div class="col-md-3">
				<aside class="sidebar sticky">
					<div class="card">
						<div class="card-header">Ini Sidebar</div>
						<div class="card-body">
							<p class="mb-0">
								Ini merupakan sebuah sidebar yang bisa diubah nanti pada
								pembaharuan tampilan mendatang.
							</p>
						</div>
					</div>
				</aside>
			</div>
		</div>
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

.sticky {
	position: sticky;
	top: 6rem;
	z-index: 1020;
}
</style>
