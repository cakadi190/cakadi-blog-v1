<template>
	<button
		class="btn btn-secondary button-accessbility d-flex align-items-center justify-content-center"
		:class="{ hidden: !showButton }"
		data-bs-toggle="offcanvas"
		data-bs-target="#offcanvas-accessbility"
	>
		<Icon name="fa6-solid:universal-access" />
		</button>
		
		<div
		class="offcanvas offcanvas-end"
		tabindex="-1"
		id="offcanvas-accessbility"
		aria-labelledby="offcanvas-accessbilityLabel"
		>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title d-flex align-items-center gap-2" id="offcanvas-accessbilityLabel">
				<Icon name="fa6-solid:universal-access" />
				<span>Panel Aksesbilitas</span>
				<span class="badge bg-info">Beta</span>
			</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</div>
		<div class="offcanvas-body">
			<div>
				Some text as placeholder. In real life you can have the elements you
				have chosen. Like, text, images, lists, etc.
			</div>
			<div class="dropdown mt-3">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
				>
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
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
	z-index: 1030;

	&.hidden {
		bottom: 1rem;
	}
}
</style>