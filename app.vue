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
import Swal from "sweetalert2";

const dayjs = useDayjs();
dayjs.locale("id");

useHead({
	titleTemplate(titleChunk: string) {
		return titleChunk ? `${titleChunk} • Catatan Cak Adi` : "Catatan Cak Adi";
	},
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
	color: var(--bs-body-color) !important;
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
		margin-top: -1rem;
		height: 1rem;
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
		display: inline-block;

		&:before {
			display: block;
			content: " ";
			margin-top: -1rem;
			height: 1rem;
			visibility: hidden;
		}
	}
}

.widget {
	margin-bottom: 2rem;

	.title {
		position: relative;
		margin-top: 1rem;
		padding-bottom: 1rem;
		margin-bottom: 3rem;
		border-bottom: 1px solid var(--bs-border-color);

		span {
			border: 1px solid var(--bs-border-color);
			position: absolute;
			background: var(--bs-body-bg);
			padding: 0.5rem 0.875rem;
			border-radius: 0.5rem;
			margin-top: -0.25rem;
		}
	}
}
</style>
