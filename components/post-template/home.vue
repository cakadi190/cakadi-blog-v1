<template>
	<article class="col-md-4">
		<nuxt-link class="card card-body blog-post" :to="`/artikel${data._path.replace('/articles', '')}`">
			<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
				<nuxt-img
					preload
					:src="data.image ? data.image[0]['src'] : '/uploads/default.png'"
				/>
			</div>

			<h3 class="h5">{{ data.title }}</h3>

			<client-only>
				<div class="meta-data">
					<div class="time">
						<Icon name="fa6-solid:calendar" />
						<time :datetime="$dayjs(data.created_at).utc().toString()">{{
							$dayjs(data.created_at).locale("id").format("dddd, D MMMM YYYY")
						}}</time>
					</div>
					<div class="author" v-if="data.author">
						<Icon name="fa6-solid:user" />
						<span>{{ data.author.name }}</span>
					</div>
				</div>
			</client-only>
		</nuxt-link>
	</article>
</template>

<script lang="ts" setup>
defineProps<{
	data: Post;
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
	border-radius: 0.875rem;
	transition: all 0.2s;

	.meta-data {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		align-items: center;
		opacity: 0.75;

		> * {
			align-items: center;
			display: flex;
			gap: 0.5rem;
		}
	}
}
</style>