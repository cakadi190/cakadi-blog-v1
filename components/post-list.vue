<template>
	<div class="list-group list-group-flush">
		<div class="list-group-item" v-if="pending != 'success'">
			<error-section
				imgSrc="/images/errors/loading.svg"
				imgAlt="Sedang Memuat"
				imgHeight="250"
				title="Sedang Memuat"
				text="Sedang memuat bagian ini, mohon bersabar."
			/>
		</div>
		<div class="list-group-item" v-if="error && pending != 'success'">
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

		<post-template-listing
			v-else
			v-for="item in data"
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
import type { AsyncDataRequestStatus, NuxtError } from "nuxt/dist/app/composables";

defineProps<{
	data?: Post[];
	pending?: Ref<AsyncDataRequestStatus> | string;
	error?: NuxtError<unknown> | Error;
}>();
</script>

<style>
</style>