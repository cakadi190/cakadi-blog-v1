<template>
	<div class="list-group list-group-flush" v-if="loaded">
		<div class="list-group-item" v-if="pending">
			<error-section
				imgSrc="/images/errors/loading.svg"
				imgAlt="Sedang Memuat"
				imgHeight="250"
				title="Sedang Memuat"
				text="Sedang memuat bagian ini, mohon bersabar."
			/>
		</div>
		<div class="list-group-item" v-if="error">
			<error-section
				imgSrc="/images/errors/500.svg"
				imgAlt="Gagal Memuat"
				imgHeight="250"
				title="Gagal Memuat"
				text="Maaf, kami gagal memuat konten untuk anda. Coba di reload lagi webnya."
			/>
		</div>
		<div class="list-group-item" v-if="data?.length === 0">
			<error-section
				imgSrc="/images/errors/404.svg"
				imgAlt="Tidak Ditemukan"
				imgHeight="250"
				title="Tidak Ada Postingan"
				text="Kami akan segera menambahkan artikel untuk bagian ini."
			/>
		</div>

		<post-template-post-listing
			v-else
			v-for="item in postData"
			:key="item.title"
			:data="item"
		/>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: "PostShow",
});
</script>

<script lang="ts" setup>
import type { NuxtError } from "nuxt/dist/app/composables";

const loaded = ref(false);
const postData = ref<Post[]>([]);
const route = useRoute();

const props = defineProps<{
	data?: Post[];
	pending?: boolean;
	error?: NuxtError<unknown>;
}>();

onMounted(() => {
	loaded.value = true;
	postData.value = props.data
		?.sort(
			(a, b) =>
				new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
		)
		.filter((item) => {
			return `/artikel${item._path}` != route.path;
		})
		.slice(0, 5);
});
</script>

<style>
</style>