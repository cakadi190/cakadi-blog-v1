<template>
	<article>
		<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
			<nuxt-img
				:src="data.image ? data.image[0]['src'] : '/uploads/default.png'"
				:alt="data.title"
			/>
		</div>
		<h1>{{ data.title }}</h1>

		<ContentRendererMarkdown :value="data" />

		<div id="coment-section" class="target-hashbang">
			<client-only>
				<DisqusComments :identifier="route.fullPath" />
			</client-only>
		</div>
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'PostContent',
});
</script>

<script lang="ts" setup>
defineProps<{
	data: Post;
}>();

const route = useRoute();
</script>

<style>
</style>