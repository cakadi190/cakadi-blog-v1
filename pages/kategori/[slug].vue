<template>
	<div id="page-articles">
		<header-page backTo="/">
			<template #title>Artikel Dengan Kategori: {{ catTitle }}</template>
			<template #subtitle
				>Semua artikel yang ditulis di blog ini dengan kategori
				{{ catTitle }}.</template
			>
		</header-page>

		<section class="need-space pt-0">
			<div class="container">
				<div class="row gy-4">
					<div class="col-md-6 mx-auto" v-if="pending">
						<error-section
							imgSrc="/images/errors/loading.svg"
							imgAlt="Sedang Memuat"
							imgHeight="250"
							title="Sedang Memuat"
							text="Sedang memuat bagian ini, mohon bersabar."
						/>
					</div>
					<div class="col-md-6 mx-auto" v-else-if="error">
						<error-section
							imgSrc="/images/errors/500.svg"
							imgAlt="Gagal Memuat"
							imgHeight="250"
							title="Gagal Memuat"
							text="Maaf, kami gagal memuat konten untuk anda. Coba di reload lagi webnya."
						/>
					</div>
					<div
						class="col-md-6 mx-auto"
						v-else-if="!pending && !error && data && data.length === 0"
					>
						<error-section
							imgSrc="/images/errors/404.svg"
							imgAlt="Tidak Ditemukan"
							imgHeight="250"
							title="Tidak Ada Postingan"
							text="Kami akan segera menambahkan artikel untuk bagian ini."
						/>
					</div>

					<blog-home
						v-else-if="!pending && !error && data && data.length"
						v-for="item in data"
						:key="item.title"
						:data="item"
					/>
				</div>
			</div>
		</section>

		<div
			v-if="!pending && !error"
			class="pb-5 mt-n5 mb-5 d-flex justify-content-center gap-3"
		>
			<button
				@click="previous"
				class="btn btn-primary"
				:class="{ disabled: page === 1 }"
			>
				<Icon name="fa6-solid:arrow-left" />
			</button>
			<button
				@click="next"
				class="btn btn-primary"
				:class="{ disabled: page >= countPage }"
			>
				<Icon name="fa6-solid:arrow-right" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute, useAsyncData, useSeoMeta } from "#imports";
import blogHome from "~/components/post-template/blog-home.vue";

const route = useRoute();
const router = useRouter();
const urlRequest = useRequestURL();

const showData = ref(15);
const page = ref(1);
const skip = computed(() => (page.value - 1) * showData.value);

const catTitle = computed(() =>
	capitalize((route.params.slug as string).replace("-", " "))
);

const setPage = (page: number) => {
	router.push({ query: { ...route.query, page: page.toString() } });
};

const updatePageFromQuery = () => {
	const currentPage = parseInt(route.query.page as string, 10);
	page.value = !isNaN(currentPage) && currentPage > 0 ? currentPage : 1;
};

// For Pagination
const previous = (): void => {
	if (page.value != 1) {
		scrollToTop();
		page.value = page.value - 1;
	}
	setPage(page.value);
};

const next = (): void => {
	if (page.value + 1) {
		scrollToTop();
		page.value = page.value + 1;
	}
	setPage(page.value);
};

// Fetch Data
updatePageFromQuery();
const fetchData = () => {
	return (queryContent(`/${route.params.slug}`) as any)
		.where({ draft: { $eq: false } })
		.skip(skip.value)
		.limit(showData.value);
};

const { data, pending, error, refresh } = await useAsyncData<Post[]>(
	"artikel-kategori",
	() => fetchData().find(),
	{
		watch: [page, skip],
	}
);

const { data: count, refresh: countRefresh } = await useAsyncData<number>(
	"count-kategori",
	() => fetchData().count(),
	{
		watch: [page, skip],
	}
);

const doSortByDateData = () => {
	data.value = data.value?.sort((a, b) => {
		return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
	});
}
doSortByDateData();

const countPage = computed(() => Math.ceil(count.value / showData.value));

// Seo Meta
const title = computed(
	() => `Kategori: "${capitalizeEachWord(catTitle.value)}"`
);
const description = computed(
	() =>
		`Daftar artikel yang memuat dan memiliki kategori ${capitalizeEachWord(
			catTitle.value
		)}`
);
const image = computed(() => "/uploads/default.png");

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
	twitterCard: "summary_large_image",
});
</script>

<style>
/* Add your styles here */
</style>
