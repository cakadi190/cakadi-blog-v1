<template>
	<div id="app-root">
		<nuxt-layout>
			<nuxt-loading-indicator />
			<nuxt-page />
		</nuxt-layout>
	</div>
</template>

<style lang="scss">
.need-space {
	min-height: 7.5rem;
	padding: 7rem 0;
}

body {
	overflow-x: hidden;
}
</style>

<script lang="ts" setup>
import("dayjs/locale/id");
import Swal from 'sweetalert2';

const dayjs = useDayjs();
dayjs.locale("id");

const colorMode = useColorMode();
const theme = ref("light");

const applyTheme = (themes: string) => {
	document.documentElement.setAttribute("data-bs-theme", themes);
	theme.value = themes;
};

useHead({
	titleTemplate: (titleChunk: any) => {
		return titleChunk ? `${titleChunk} • Cak Adi` : "Cak Adi";
	},
	meta: [
		{ name: 'color-scheme', content: 'dark' }
	],
	htmlAttrs: {
		lang: "id"
	}
});

const handleSystemThemeChange = (e: MediaQueryListEvent) => {
	applyTheme(e.matches ? "dark" : "light");
};

onMounted(() => {
	const mediamode = localStorage.getItem("mediamode");
	const colorModePreference = colorMode.preference;

	if (colorModePreference === "system") {
		const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

		if (mediamode === "dark" || mediamode === "light") {
			applyTheme(mediamode);
		} else {
			applyTheme(systemThemeQuery.matches ? "dark" : "light");
			systemThemeQuery.addEventListener("change", handleSystemThemeChange);
		}

		return () => {
			systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
		};
	} else {
		applyTheme(colorModePreference);
	}
});

const initTooltipAndPopover = () => {
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new window.bootstrap.Tooltip(tooltipTriggerEl);
	});

	var popoverTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="popover"]')
	);
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new window.bootstrap.Popover(popoverTriggerEl);
	});
};

onMounted(initTooltipAndPopover);
onUpdated(initTooltipAndPopover);

const route = useRoute();

watch(
	() => route.fullPath,
	() => {
		initTooltipAndPopover();
	}
);

// Swall Info
Swal.fire({
  title: 'Informasi',
  text: 'Website ini sedang dibangun dan dalam tahap pengembangan. Jadi mohon maaf apabila masih banyak bug, error maupun tampilan tidak sesuai dengan ekspektasi.',
  icon: 'info',
  confirmButtonText: 'Woke!'
})
</script>

<style lang="scss">
.bg-body {
	background-color: var(--bs-body-bg) !important;
}
.bg-body-rgb {
	--bs-bg-opacity: 1;
	background-color: rgba(
		var(--bs-body-bg-rgb),
		var(--bs-bg-opacity, 1)
	) !important;
}
.color-body {
	background-color: var(--bs-color-bg) !important;
}
.color-body-rgb {
	--bs-bg-opacity: 1;
	background-color: rgba(
		var(--bs-color-bg-rgb),
		var(--bs-color-opacity, 1)
	) !important;
}

:target {
	scroll-margin-top: 100px;
}

.target-hashbang {
	&:before {
		display: block;
		content: " ";
		margin-top: -5rem;
		height: 5rem;
		visibility: hidden;
	}
}

h1,
h2,
h3,
h4,
h5,
h6 {
	a {
		text-decoration: none;
		display: flex;
		align-items: center;

		&:before {
			display: block;
			content: " ";
			margin-top: -5rem;
			height: 5rem;
			visibility: hidden;
		}

		&:after {
			content: "#";
			margin-left: 0.5rem;
			opacity: 0;
			transition: all 0.2s ease;
			visibility: hidden;
			padding: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--bs-border-color);
			font-size: 0.75em;
			width: 2rem;
			height: 2rem;
			line-height: 1rem;
			border-radius: 0.5rem;
		}

		&:hover {
			&:after {
				opacity: 1;
				visibility: visible;
			}
		}
	}
}
</style>
