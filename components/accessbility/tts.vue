<template>
	<li class="list-group-item py-3 d-flex gap-3 px-0 align-items-center">
		<div class="form-check form-switch">
			<input
				class="form-check-input"
				type="checkbox"
				role="switch"
				id="ttsOptions"
				@change="changeOption"
				:checked="enableTts"
			/>
			<label class="form-check-label" for="ttsOptions"> Teks Berbicara </label>
		</div>
	</li>
</template>

<script lang="ts" setup>
const ttsKey = "option-tts";
const enableTts = ref(false);
const route = useRoute();
let utteranceInstance: SpeechSynthesisUtterance | null = null;

const stopSpeak = () => {
	if (!window.speechSynthesis) return;
	if (utteranceInstance) {
		window.speechSynthesis.cancel();
	}
};

const doSpeak = (text: string) => {
	if (!window.speechSynthesis) return;
	stopSpeak();
	utteranceInstance = new SpeechSynthesisUtterance(text);
	utteranceInstance.lang = "id-ID";
	utteranceInstance.pitch = 1;
	utteranceInstance.rate = 0.9;
	utteranceInstance.volume = 1;
	window.speechSynthesis.speak(utteranceInstance);
};

const speak = () => {
	const elements = document.querySelectorAll("a,button");
	elements.forEach((element) => {
		element.addEventListener("mouseenter", () => {
			const text =
				(element as HTMLElement).textContent ||
				(element as HTMLElement).innerText;
			doSpeak(text);
		});
	});
};

const enableSpeak = () => {
	console.log(enableTts.value)
	if (enableTts.value) {
		localStorage.setItem(ttsKey, "true");
		speak();
	} else {
		localStorage.setItem(ttsKey, "false");
		stopSpeak();
	}
};

onMounted(() => {
	const storedValue = localStorage.getItem(ttsKey);
	enableTts.value = storedValue === "true";
	enableSpeak();
});

onUpdated(() => {
	const storedValue = localStorage.getItem(ttsKey);
	enableTts.value = storedValue === "true";
	enableSpeak();
});

const changeOption = () => {
	enableTts.value = !enableTts.value;
	enableSpeak();
};

watch(() => route.fullPath, enableSpeak);
</script>

<style scoped>
/* Your styles here */
</style>
