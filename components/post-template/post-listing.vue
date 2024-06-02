<template>
	<article class="list-group-item py-3 article" v-if="data._path !== `/${currentParams.join('/')}`">
		<div class="row">
			<div class="col-4">
				<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
					<nuxt-img
						:src="data.image ? data.image[0]['src'] : '/uploads/default.png'"
						:alt="data.title"
					/>
				</div>
			</div>
			<div class="col-8">
				<nuxt-link class="text-decoration-none" :to="`/artikel${data._path}`"><h3 class="h6">{{ limitChars(data.title, 50) }}</h3></nuxt-link>
				<div class="meta-data">
					<div>
						<Icon name="fa6-solid:calendar" />
						<time :datetime="$dayjs(data.updated_at).utc().toString()">{{ $dayjs(data.updated_at).locale('id').format('dddd, D MMMM YYYY') }}</time>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script lang="ts" setup>
defineProps<{
	data: Post;
}>();

const route = useRoute();
const currentParams: string[] = route.params.slug as string[];
</script>

<style lang="scss" scoped>
.article {
	.meta-data {
		display: flex;
		align-items: center;
		gap: .75rem;
		opacity: .5;

		> * {
			display: flex;
			align-items: center;
			gap: .325rem;
		}
	}
}
</style>