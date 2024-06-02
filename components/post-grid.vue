<template>
	<section class="need-space pt-0">
		<div class="container">
			<h3 class="mb-3">{{ title }}</h3>

			<div class="row gy-4 justify-content-center">
				<div class="col-md-6 mx-auto" v-if="pending">
					<error-section
						imgSrc="/images/loading.svg"
						imgAlt="Sedang Memuat"
						imgHeight="250"
						title="Sedang Memuat"
						text="Sedang memuat bagian ini, mohon bersabar."
					/>
				</div>
				<div class="col-md-6 mx-auto" v-if="error">
					<error-section
						imgSrc="/images/errors/500.svg"
						imgAlt="Gagal Memuat"
						imgHeight="250"
						title="Gagal Memuat"
						text="Maaf, kami gagal memuat konten untuk anda. Coba di reload lagi webnya."
					/>
				</div>
				<div class="col-md-6 mx-auto" v-if="data.length === 0">
					<error-section
						imgSrc="/images/errors/404.svg"
						imgAlt="Tidak Ditemukan"
						imgHeight="250"
						title="Tidak Ada Postingan"
						text="Kami akan segera menambahkan artikel untuk bagian ini."
					/>
				</div>

				<blog-home v-else v-for="item in data" :key="item.title" :data="item" />
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
import blogHome from '~/components/post-template/blog-home.vue';

const props = withDefaults(defineProps<{
	target?: string;
	title?: string;
	limit?: number;
}>(), {
	target: "article",
	title: "Mungkin Kamu Suka",
	limit: 6,
});

const targetKey = computed(() => props.target.replace(/^\/|\/$/g, '').replace(' ', '-'));

const { data, pending, error } = await useLazyAsyncData<Post[]>(targetKey.value, () =>
	(queryContent(props.target) as any).limit(props.limit).find()
);
</script>

<style>
</style>