<template>
	<main class="container my-5 py-5">
		<div class="row gy-4 pt-5">
			<div class="col-md-8">
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

						<client-only>
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
						</client-only>

						<div class="mb-4 pb-3 border-bottom">
							<content-renderer :value="doc" />
						</div>

						<div id="coment-section" class="target-hashbang">
							<client-only>
								<DisqusComments :identifier="route.fullPath" />
							</client-only>
						</div>
					</template>
				</content-doc>
			</div>
			<div class="col-md-4">
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

onMounted(() => {
	$("table").each(function () {
		$(this).addClass("table table-striped mb-0");
		$(this).wrap('<div class="table-responsive mb-3 overflow-hidden rounded-3 border"></div>');
	});
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

<style lang="scss">
#disqus_thread {
	background: transparent;
}

iframe {
	color-scheme: auto;
}
</style>
