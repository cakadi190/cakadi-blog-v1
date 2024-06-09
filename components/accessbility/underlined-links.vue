<template>
	<li class="list-group-item py-3 d-flex gap-3 px-0 align-items-center">
		<div class="form-check form-switch">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="underlinedLinks"
				@change="changeOption"
				:checked="enableUnderlinedLinks"
			/>
			<label class="form-check-label" for="underlinedLinks">
				Tautan Yang Digarisbawahi
			</label>
		</div>
	</li>
</template>

<script lang="ts" setup>
const underlinedLinksKey = "option-underlined-links";
const enableUnderlinedLinks = ref(false);
const route = useRoute();

const enableUnderlinedLink = () => {
	if (enableUnderlinedLinks.value === true) {
		localStorage.setItem(underlinedLinksKey, "true");
		$("a")
			.removeClass("text-decoration-none")
			.addClass("text-decoration-underline");
	} else {
		localStorage.setItem(underlinedLinksKey, "false");
		$("a")
			.removeClass("text-decoration-underline")
			.addClass("text-decoration-none");
	}
};

onMounted(() => {
	const storedValue = localStorage.getItem(underlinedLinksKey);
	enableUnderlinedLinks.value = storedValue === "true";
	enableUnderlinedLink();

	setInterval(() => {
		enableUnderlinedLink();
	}, 15000)
});

const changeOption = () => {
	enableUnderlinedLinks.value = !enableUnderlinedLinks.value;
	enableUnderlinedLink();
};

watch(() => route.fullPath, () => {
	enableUnderlinedLink();
});
</script>

<style>
</style>
