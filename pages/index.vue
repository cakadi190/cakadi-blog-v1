<template>
	<main class="pt-5 mt-5" id="homepage">
		<div class="container">
			<nuxt-img src="https://place-hold.it/800x150?text=Pasang Iklan Disini" class="w-100" />
		</div>
		<div class="pt-5 mt-5">
			<post-grid target="/teknologi" />
			<post-grid target="/coding" title="Tutorial Ngoding" />
			<post-grid target="/" title="Artikel Lainnya" />

			<div class="justify-content-center d-flex mb-5 pb-5">
				<nuxt-link to="/artikel" class="btn btn-primary">Lihat Selengkapnya</nuxt-link>
			</div>
		</div>
	</main>
</template>

<script lang="ts" setup>
import postGrid from "~/components/post-grid.vue";

const urlRequest = useRequestURL();

// Seo Meta
const title = computed(() => "Secarik Catatan dan Tulisan Yang Bermanfaat");
const description = computed(() => "Catatan Cak Adi merupakan platform blogging pribadi milik Cak Adi yang mana membagikan Secarik Catatan dan Tulisan Yang Bermanfaat.");
const image = computed(() => '/uploads/default.png');

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
</script>
