<template>
	<article class="post-slider">
		<nuxt-img preload :src="data.image[0].src" class="w-100 centered-image" />

		<div class="content">
			<div class="row w-100">
				<div class="col-md-8">
					<div class="meta-data">
						<div class="category">
							<Icon name="fa6-solid:folder" />
							<span>{{ data.category.join(", ") }}</span>
						</div>
					</div>

					<router-link :to="`/artikel${data._path.replace('/articles', '')}`">
						<h1 class="fw-bold mb-3">{{ data.title }}</h1>
					</router-link>

					<div class="m-0">
						<strong>Oleh {{ data.author?.name }}</strong
						>,
						<time :datetime="$dayjs(data.updated_at).utc().toString()">{{
							$dayjs(data.updated_at).locale("id").format("dddd, D MMMM YYYY")
						}}</time>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script lang="ts" setup>
import type { NuxtError } from "nuxt/dist/app/composables";

const loaded = ref(false);
const postData = ref<Post[]>([]);
const route = useRoute();

const props = defineProps<{
	data?: Post;
}>();
</script>

<style lang="scss" scoped>
.post-slider {
	position: relative;
	overflow: hidden;
	aspect-ratio: 16 / 6;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 992px) {
		aspect-ratio: 16 / 9;
	}

	> img {
		object-fit: cover;
		object-position: center;
		transition: all 0.3s ease;
	}
}
.centered-image {
	max-width: 100%;
	max-height: 100%;
}
.content {
	position: absolute;
	height: 100%;
	width: 100%;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.25) 15%,
		rgb(0, 0, 0) 100%
	);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	color: white;

	@media screen and (max-width: 768px) {
		padding: 1.25rem;
	}

	h1 {
		font-display: 1.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1.25rem;
		}
	}

	a {
		text-decoration: none;
		color: white;
	}

	.meta-data {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		line-height: 1;

		> * {
			display: flex;
			align-items: center;
			gap: 0.75rem;
		}
	}
}
</style>