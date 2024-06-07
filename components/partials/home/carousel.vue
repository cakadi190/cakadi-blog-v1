<template>
	<header id="masthead">
		<div class="container my-4 mb-3 mb-lg-5 pb-3 pb-lg-5">
			<palestine-help />

			<div class="overflow-hidden rounded-4 border">
				<!-- eslint-disable -->
				<Swiper
					:modules="[SwiperAutoplay, SwiperEffectCreative]"
					:slides-per-view="1"
					:loop="true"
					:autoplay="(autoplay as any)"
				>
					<SwiperSlide v-for="slide in posts" :key="slide._path">
						<post-template-carousel :data="slide" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
const id = "list-carousel-" + generateRandomString(15);
const {
	data: posts,
	pending,
	error,
} = await useLazyAsyncData<Post[]>(
	id,
	() => (queryContent("/") as any).where({ draft: { $eq: false } }).find(),
	{
		transform: (items) =>
			items
				?.sort(
					(a, b) =>
						new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
				)
				.slice(0, 5),
	}
);

const autoplay = {
	delay: 5000,
	disableOnInteraction: true,
};
</script>

<style lang="scss">
#masthead {
	position: relative;
	padding-top: 5rem;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

		[data-bs-theme="dark"] & {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / .1)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
		}
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(to top, white, rgba(255, 255, 255, 0.25));

		[data-bs-theme="dark"] & {
			background: linear-gradient(
				to top,
				rgb(var(--bs-body-bg-rgb)),
				rgba(var(--bs-body-bg-rgb), 0.125)
			);
		}
	}
}

:root {
	--swiper-theme-color: #fff;
}
</style>