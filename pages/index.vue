<template>
	<main class="pt-5 mt-5" id="homepage">
		<div class="container">
			<nuxt-img src="https://place-hold.it/1200x150?text=Pasang Iklan Disini" class="w-100" />
		</div>
		<div class="pt-5 mt-5">
			<post-grid target="/teknologi" />
			<post-grid target="/coding" title="Tutorial Ngoding" />
		</div>
	</main>
</template>

<script lang="ts" setup>
import postGrid from "~/components/post-grid.vue";
</script>
