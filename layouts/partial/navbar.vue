<template>
	<teleport to="body">
		<div
			class="offcanvas offcanvas-start"
			tabindex="-1"
			id="offcanvas"
			aria-labelledby="offcanvasLabel"
		>
			<div class="offcanvas-header">
				<nuxt-link
					to="/"
					class="offcanvas-title text-decoration-none color-body d-flex gap-2"
				>
					<img
						class="site-logo"
						src="/images/brands/logo-color-long.svg"
						height="28"
						alt="Logo Cak Adi"
					/>

					<ClientOnly>
						<div class="beta">
							<Icon name="ant-design:experiment-filled" />
							<span>v1.1</span>
						</div>
					</ClientOnly>
				</nuxt-link>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav gap-2 justify-content-end flex-grow-1">
					<li
						class="nav-item"
						@click="closingOffcanvas"
						v-for="(item, index) in navbarMenu"
						:key="index"
					>
						<nuxt-link
							:class="item.link === $route.path ? 'active' : ''"
							class="nav-link"
							:to="item.link"
							>{{ item.name }}</nuxt-link
						>
					</li>
				</ul>
			</div>
		</div>
	</teleport>

	<nav class="navbar navbar-expand-lg fixed-top navbar-light py-3">
		<div class="container">
			<nuxt-link to="/" class="navbar-brand d-flex gap-3 align-items-center">
				<img
					class="site-logo"
					src="/images/brands/logo-color-long.svg"
					height="28"
					alt="Logo Cak Adi"
				/>

				<ClientOnly>
					<div class="beta">
						<Icon name="ant-design:experiment-filled" />
						<span>v1.1</span>
					</div>
				</ClientOnly>
			</nuxt-link>
			<button
				class="navbar-toggler p-0 border-0"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvas"
				aria-controls="offcanvas"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarMain">
				<ul class="navbar-nav gap-2 justify-content-end flex-grow-1">
					<li class="nav-item" v-for="(item, index) in navbarMenu" :key="index">
						<nuxt-link
							:class="item.link === $route.path ? 'active' : ''"
							class="nav-link"
							:to="item.link"
							>{{ item.name }}</nuxt-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
const navbar = ref<HTMLElement | null>(null);

const colorMode = useColorMode();
const theme = ref("light");

const navbarMenu = ref([
	{ name: "Beranda", link: "/" },
	{ name: "Pramuka", link: "/kategori/pramuka" },
	{ name: "Teknologi", link: "/kategori/teknologi" },
	{ name: "Koding", link: "/kategori/coding" },
	{ name: "Pengalaman Hidup", link: "/kategori/pengalaman-hidup" },
	{ name: "Desain Grafis", link: "/kategori/desain-grafis" },
	{ name: "Artikel Lain", link: "/artikel" },
]);

const closingOffcanvas = () => {
	const btnClose = document.querySelector("#offcanvas .btn-close");
	if (btnClose instanceof HTMLElement) {
		btnClose.click();
	}
};

const handleScroll = () => {
	if (window.scrollY >= 50) {
		navbar.value?.classList.add("body-bg-rgb");
		navbar.value?.classList.add("border-bottom");
		navbar.value?.style.setProperty("--bs-bg-opacity", "0.85");
		navbar.value?.style.setProperty("backdrop-filter", "blur(1rem)");
	} else {
		navbar.value?.classList.remove("body-bg-rgb");
		navbar.value?.classList.remove("border-bottom");
		navbar.value?.style.removeProperty("--bs-bg-opacity");
		navbar.value?.style.removeProperty("backdrop-filter");
	}
};

onMounted(() => {
	handleScroll();

	navbar.value = document.querySelector(".navbar");
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<script lang="ts">
export default defineComponent({
	name: "NavbarMain",
});
</script>

<style lang="scss" scoped>
.beta {
	padding: 0.25rem 0.75rem;
	font-size: 0.75em;
	background: rgba(var(--bs-body-bg-rgb), 0.75);
	width: max-content;
	border: 1px solid var(--bs-border-color);
	border-radius: 0.5rem;
	backdrop-filter: blur(1rem);
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
</style>