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

		<post-template-post-listing v-else v-for="item in data" :key="item.title" :data="item" />
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: "PostShow",
});
</script>

<script lang="ts" setup>
const id = "list-artikel-" + generateRandomString(15);
const loaded = ref(false);

const { data, pending, error } = await useLazyAsyncData<Post[]>(id, () =>
	(queryContent("/") as any).limit(5).find()
);

onMounted(() => loaded.value = true);

const doSortByDateData = () => {
	data.value = data.value?.sort((a, b) => {
		return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
	});
}
doSortByDateData();
</script>

<style>
</style>