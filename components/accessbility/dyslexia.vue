<template>
	<li class="list-group-item py-3 d-flex gap-3 px-0 align-items-center">
		<div class="form-check form-switch">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="dyslexiaSwitch"
				@change="changeOption"
				:checked="enableDyslexic"
			/>
			<label class="form-check-label" for="dyslexiaSwitch">
				Penyandang Disleksia
			</label>
		</div>
	</li>
</template>

<script lang="ts" setup>
const dyslexicStorageKey = 'option-dyslexic';
const enableDyslexic = ref(false);

onMounted(() => {
  const storedValue = localStorage.getItem(dyslexicStorageKey);
  enableDyslexic.value = storedValue === 'true';

	if (enableDyslexic.value === true) {
		document.body.style.fontFamily = 'Open-Dyslexic';
	} else {
		document.body.style.fontFamily = '';
	}
});

const changeOption = () => {
	enableDyslexic.value = !enableDyslexic.value;

	if (enableDyslexic.value === true) {
		localStorage.setItem(dyslexicStorageKey, 'true');
		document.body.style.fontFamily = 'Open-Dyslexic';
	} else {
		localStorage.setItem(dyslexicStorageKey, 'false');
		document.body.style.fontFamily = '';
	}
}
</script>

<style>
</style>
