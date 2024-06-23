<template>
	<li class="list-group-item py-3 d-flex gap-3 px-0 align-items-center">
		<div class="form-check form-switch">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="darkSwitch"
				v-model="isDarkMode"
				@change="toggleColorMode"
			/>
			<label class="form-check-label" for="darkSwitch"> Mode Gelap </label>
		</div>
	</li>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const isDarkMode = ref(colorMode.preference === "dark");

const toggleColorMode = () => {
	colorMode.preference = !isDarkMode.value ? "light" : "dark";
	$("html").attr("data-bs-theme", !isDarkMode.value ? "light" : "dark");
	$(".site-logo").each(function () {
		$(this).attr(
			"src",
			!isDarkMode.value
				? "/images/brands/logo-color-long.svg"
				: "/images/brands/logo-white-long.svg"
		);
	});
};

onMounted(toggleColorMode);
</script>

<style>
/* Tambahkan style sesuai kebutuhan Anda */
</style>
