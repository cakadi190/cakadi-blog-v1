<template>
	<main class="container my-5 pb-5">
		<div class="row gy-4 pt-5">
			<div class="col-md-8">
				<ContentRenderer v-if="data" :value="data">
					<post-content :data="data" />
				</ContentRenderer>
			</div>
			<div class="col-md-4">
				<aside class="sidebar sticky">
					<widgets-custom title="Pasang Iklan">
						<p>Yuk Pasang Iklanmu disini. Oh iya kalian bisa menghubungi nomor admin di <a href="https://wa.me/6281333550746?text=Halo, saya berminat memasang iklan di website catatancakadi.com." target="_blank" rel="noopener noreferrer">081333550746</a></p>
					</widgets-custom>

					<widgets-post />
					<widgets-category />
					<widgets-tags />
				</aside>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import postContent from '~/components/post-template/post-content.vue';

const route = useRoute();
const router = useRouter();
const urlRequest = useRequestURL();

const getPath = computed<string[]>(() => {
	return route.params.slug as string[];
});

const { data } = await useAsyncData<Post>("article", () => {
	const slugPath = Array.isArray(getPath.value)
		? getPath.value.join("/")
		: getPath.value;
	return (queryContent(slugPath) as any).findOne();
});

if(data.value == null) {
	router.push({ name: "index" });
}

// Seo Meta
const title = computed(() => data.value.title);
const description = computed(() => data.value.description);
const image = computed(() => urlRequest.origin + (data.value.image ? data.value.image[0]['src'] : '/uploads/default.png'));

console.log(image.value)

useSeoMeta({
  ogUrl: urlRequest.href,
	title,
	ogTitle: title,
	twitterTitle: title,
	description,
	ogDescription: description,
	twitterDescription: description,
	ogImage: image,
	twitterImage: image,
	twitterCard: 'summary_large_image',
});

// Properties
onMounted(() => {
	$("table").each(function () {
		$(this).addClass("table table-striped mb-0");
		$(this).wrap(
			'<div class="table-responsive mb-3 overflow-hidden rounded-3 border"></div>'
		);
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
