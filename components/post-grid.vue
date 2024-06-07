<template>
	<section class="need-space pt-0">
		<div class="container">
			<div class="d-flex mb-4 align-items-center gap-3 justify-content-between">
				<h3 class="mb-0">{{ title }}</h3>
				<nuxt-link
					:to="target !== '/' ? `/kategori${target}` : '/artikel'"
					class="text-decoration-none d-flex gap-2 align-items-center"
				>
					<span>Lihat Semuanya</span>
					<Icon name="fa6-solid:arrow-right" />
				</nuxt-link>
			</div>

			<div class="row gy-4 justify-content-center">
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
</template>

<script lang="ts">
export default defineComponent({
	name: "PostShow",
});
</script>

<script lang="ts" setup>
import blogHome from "~/components/post-template/home.vue";

const props = withDefaults(
	defineProps<{
		target?: string;
		title?: string;
		limit?: number;
	}>(),
	{
		target: "article",
		title: "Mungkin Kamu Suka",
		limit: 6,
	}
);

const targetKey = computed(() =>
	props.target.replace(/^\/|\/$/g, "").replace(" ", "-")
);

const { data, pending, error } = await useLazyAsyncData<Post[]>(
	targetKey.value,
	() =>
		(queryContent(props.target) as any)
			.where({ draft: { $eq: false } })
			.limit(props.limit)
			.find(),
	{
		transform: (items) =>
			items
				?.sort(
					(a, b) =>
						new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				),
	}
);
</script>

<style>
</style>