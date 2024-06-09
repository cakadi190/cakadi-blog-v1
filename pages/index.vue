<template>
	<div id="homepage">
		<partials-home-carousel />

		<post-grid target="/coding" title="Perkodingan Duniawi" />
		<post-grid target="/teknologi" title="Teknoinfo" />
		<post-grid target="/" title="Semua Artikel" :limit="9" class="pb-5 mb-5" />

		<div class="pb-5 mb-5 d-flex justify-content-center">
			<nuxt-link to="/artikel" class="btn btn-primary">Lihat Semua Artikel</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
const urlRequest = useRequestURL();

// Seo Meta
const title = computed(() => "Beranda");
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
