<template>
	<client-only>
		<button
			class="btn btn-secondary button-accessbility d-flex align-items-center justify-content-center"
			:class="{ hidden: !showButton }"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvas-accessbility"
		>
			<Icon name="fa6-solid:universal-access" />
		</button>
	</client-only>

	<div
		class="offcanvas offcanvas-end"
		tabindex="-1"
		id="offcanvas-accessbility"
		aria-labelledby="offcanvas-accessbilityLabel"
	>
		<div class="offcanvas-header">
			<h5
				class="offcanvas-title d-flex align-items-center gap-2"
				id="offcanvas-accessbilityLabel"
			>
				<Icon name="fa6-solid:universal-access" />
				<span>Fitur Aksesbilitas</span>
				<span class="d-flex gap-2 align-items-center badge bg-info">
					<Icon name="ant-design:experiment-filled" /> 
					<span>Beta</span>
				</span>
			</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</div>
		<div class="offcanvas-body">
			<p>
				Silahkan gunakan fitur aksesbilitas ini untuk anda yang membutuhkan
				fitur khusus dan penyandang disabilitas.
			</p>

			<div class="alert alert-info">
				<h5 class="h5">Informasi!</h5>
				<p class="mb-0">
					Maaf ya fitur ini sedang saya kembangkan. Nantinya akan saya
					perbaharui dan optimalkan fitur untuk disabilitas ini.
				</p>
			</div>

			<ul class="list-group list-group-flush border-top">
				<accessbility-dyslexia />
				<accessbility-dark />
				<accessbility-underlined-links />
				<accessbility-tts />
				<accessbility-font-size />
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
const showButton = ref(false);

const checkScroll = () => {
	showButton.value = window.scrollY > 50;
};

onMounted(() => {
	window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", checkScroll);
});
</script>

<style lang="scss" scoped>
.button-accessbility {
	position: fixed;
	bottom: 5rem;
	right: 1rem;
	display: inline-block;
	min-height: 3rem;
	min-width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;
	visibility: visible;
	z-index: 1050;

	&.hidden {
		bottom: 1rem;
	}
}
</style>