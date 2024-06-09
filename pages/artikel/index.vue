<template>
	<div id="page-articles">
		<header-page backTo="/">
			<template #title>Semua Artikel</template>
			<template #subtitle>Semua artikel yang ditulis di blog ini.</template>
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

					<post-template-home
						v-else-if="!pending && !error && data"
						v-for="item in data"
						:key="item.title"
						:data="item"
					/>
				</div>
			</div>
		</section>

		<div class="pb-5 mt-n5 mb-5 d-flex justify-content-center gap-3" v-if="totalPage > 1">
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
				:class="{ disabled: page >= totalPage }"
			>
				<Icon name="fa6-solid:arrow-right" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const urlRequest = useRequestURL();
const route = useRoute();

const page = computed({
	get() {
		return Number(route.query.page?.toString()) || 1;
	},
	set(newPage: number) {
		navigateTo({
			query: {
				page: newPage,
			},
		});
	},
});

const skip = computed<number>(() =>
	page.value > 1 ? (page.value - 1) * 9 : 0
);

const { data, pending, error, refresh } = await useLazyAsyncData<any>(
	"artikel-full",
	() => (queryContent("/") as any).where({ draft: { $eq: false } }).find(),
	{
		transform(items) {
			return items.slice(skip.value, skip.value + 9);
		},
	}
);

const totalPosts = ref<number>(0);

const fetchTotalPosts = async () => {
	totalPosts.value = await (queryContent("/") as any)
		.where({ draft: { $eq: false } })
		.count();
};

onMounted(fetchTotalPosts);

const totalPage = computed(() => {
	return Math.ceil(totalPosts.value / 9);
});

const next = async () => {
	page.value++;
	refresh();
	scrollToTop();
};
const previous = async () => {
	page.value--;
	refresh();
	scrollToTop();
};

// Seo Meta
const title = computed(() => "Semua Artikel");
const description = computed(
	() =>
		"Catatan Cak Adi merupakan platform blogging pribadi milik Cak Adi yang mana membagikan Secarik Catatan dan Tulisan Yang Bermanfaat."
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
