<template>
	<client-only>
		<div class="card mb-4 rounded-4 overflow-hidden" :id="`syntax-${elId}`">
			<div
				class="card-header px-4 border-0 bg-body p-3 align-items-center d-flex justify-content-between gap-2"
			>
				<strong>{{ title }}</strong>
				<div v-if="enableCopy">
					<button class="btn btn-light btn-sm" @click="copyToClipBoard">
						<Icon :name="copied ? `fa6-solid:check` : `fa6-solid:copy`" />
					</button>
				</div>
			</div>
			<div class="card-body px-0 bg-dark text-white">
				<slot />
			</div>
			<small class="card-body px-3 text-center text-lg-end p-2 px-3"
				>Didukung oleh
				<a
					href="https://content.nuxt.com"
					target="_blank"
					class="text-decoration-none"
					rel="noopener noreferrer"
					>Nuxt Content Syntax Highlighting</a
				>.</small
			>
		</div>
	</client-only>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		title?: string;
		language?: string;
		enableCopy?: boolean;
	}>(),
	{
		title: "Penampil Kode",
		language: "html",
		enableCopy: true,
	}
);

const elId = generateRandomString(10);
const copied = ref(false);

const copyToClipBoard = async () => {
	try {
		await Promise.all([copyFromElement(`#syntax-${elId} pre`)]);

		copied.value = true;
		setTimeout(() => (copied.value = false), 2500);
	} catch (error) {
		console.error(error);
	}
};
</script>

<style lang="scss">
.card pre {
	margin: 0;
	padding: 0 1.5rem;
}
</style>