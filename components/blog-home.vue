<template>
	<article class="col-md-4">
		<nuxt-link
			class="card card-body blog-post"
			:to="data._path"
		>
			<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
				<nuxt-img
					:src="data.image ? data.image[0]['src'] : '/uploads/default.png'"
				/>
			</div>

			<h3>{{ data.title }}</h3>

			<div class="meta-data">
				<div class="time">
					<Icon name="fa6-solid:calendar" />
					<time :datetime="$dayjs(data.created_at).utc().toString()">{{ $dayjs(data.created_at).locale('id').format('dddd, D MMMM YYYY') }}</time>
				</div>
				<div class="author" v-if="data.author">
					<Icon name="fa6-solid:user" />
					<span>{{ data.author.name }}</span>
				</div>
			</div>
		</nuxt-link>
	</article>
</template>

<script lang="ts" setup>
defineProps<{
	data: any;
}>();
</script>

<script lang="ts">
export default defineComponent({
	name: "BlogHome",
});
</script>

<style lang="scss" scoped>
.blog-post {
	text-decoration: none;
	padding: 1.25rem;
	border-radius: .875rem;
	background: rgba(255, 255, 255, .1);
	backdrop-filter: blur(1rem);
	transition: all .2s;

	&:hover {
		border-color: var(--bs-primary);

		@media screen and (min-width: 768px) {
			transform: scale(1.025);
		}
	}

	.meta-data {
		display: flex;
		gap: .75rem;
		flex-wrap: wrap;
		align-items: center;
		opacity: .5;
		
		> * {
			align-items: center;
			display: flex;
			gap: .5rem;
		}
	}
}
</style>