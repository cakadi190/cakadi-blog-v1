<template>
	<footer class="border-top py-5">
		<div class="back-to-top">
			<button data-bs-toggle="tooltip" data-bs-title="Kembali Ke Atas" @click="scrollToTop">
				<Icon name="fa6-solid:chevron-up" />
			</button>
		</div>

		<div class="container py-4">
			<div class="row gy-5">
				<div class="col-md-6">
					<h5 class="h6">Tentang Kami</h5>
					<p class="opacity-75">
						Halo, ini adalah website milik
						<a href="https://beta.cakadi.id">Cak Adi</a> yang membagikan
						berbagai artikel terkait kehidupan, teknologi, kepramukaan dan lain
						sebagainya yang selalu bermanfaat untuk kalian semuanya. Stay tune
						ya, web ini akan segera hadir dengan fitur dan cara membaca yang
						enak sekali.
					</p>
					<div class="d-flex gap-3 mb-4 mt-4">
						<a
							aria-label="Cak Adi's Facebook"
							class="duration-200 transition-all"
							href="https://www.facebook.com/cakadi190"
						>
							<Icon size="20" name="fa6-brands:facebook" />
						</a>
						<a
							aria-label="Cak Adi's Twitter"
							class="duration-200 transition-all"
							href="https://www.twitter.com/cakadi190"
						>
							<Icon size="20" name="fa6-brands:twitter" />
						</a>
						<a
							aria-label="Cak Adi's Figma"
							class="duration-200 transition-all"
							href="https://www.figma.com/@cakadi190"
						>
							<Icon size="20" name="fa6-brands:figma" />
						</a>
						<a
							aria-label="Cak Adi's Instagram"
							class="duration-200 transition-all"
							href="https://www.instagram.com/cakadi190"
						>
							<Icon size="20" name="fa6-brands:instagram" />
						</a>
						<a
							aria-label="Cak Adi's Linkedin"
							class="duration-200 transition-all"
							href="https://www.linkedin.com/in/cakadi190"
						>
							<Icon size="20" name="fa6-brands:linkedin-in" />
						</a>
					</div>

					<ClientOnly>
						<a
							href="//www.dmca.com/Protection/Status.aspx?ID=8927aba4-9300-4bed-a0fd-5503cf62aece"
							title="DMCA.com Protection Status"
							class="dmca-badge"
						>
							<img
								src="https://images.dmca.com/Badges/dmca_protected_sml_120i.png?ID=8927aba4-9300-4bed-a0fd-5503cf62aece"
								alt="DMCA.com Protection Status"
						/></a>
					</ClientOnly>
				</div>

				<div class="col-lg-2 col-6">
					<h5 class="h6">Kategori Lain</h5>
					<ul class="list-unstyled">
						<li><nuxt-link to="/kategori/pramuka">Pramuka</nuxt-link></li>
						<li><nuxt-link to="/kategori/teknologi">Teknologi</nuxt-link></li>
						<li><nuxt-link to="/kategori/palestina">Palestina</nuxt-link></li>
						<li><nuxt-link to="/kategori/pengalaman-hidup">Pengalaman Hidup</nuxt-link></li>
						<li><nuxt-link to="/kategori/desain-grafis">Desain Grafis</nuxt-link></li>
					</ul>
				</div>

				<div class="col-lg-2 col-6">
					<h5 class="h6">Sumber Daya</h5>
					<ul class="list-unstyled">
						<li>
							<a target="_blank" href="https://www.cakadi.id"
								>Situs Resmi Pribadi</a
							>
						</li>
						<li><nuxt-link to="/page/about-us">Tentang Situs</nuxt-link></li>
						<li><nuxt-link to="/page/privacy-policy">Kebijakan Privasi</nuxt-link></li>
						<li><nuxt-link to="/page/comment-policy">Kebijakan Berkomentar</nuxt-link></li>
					</ul>
				</div>

				<div class="col-md-2">
					<h5 class="h6">Tautan Lain-lain</h5>
					<ul class="list-unstyled">
						<li><a href="#">Kredit</a></li>
						<li><a href="https://trakteer.id/cakadi190">Donasi di trakteer.id</a></li>
						<li><a href="https://ko-fi.com/cakadi190">Donasi di ko-fi.com</a></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="container mt-3">
			<div class="row">
				<div class="col-md-6 text-center text-lg-start">
					<p class="mb-0">Hak cipta &copy; 2024 Cak Adi.</p>
				</div>
				<div class="col-md-6 text-center text-lg-end">
					<p class="mb-0">Made with ❤ by Ahsana Digital Intermedia&trade;.</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
</script>

<script lang="ts">
export default defineComponent({
	name: "FooterMain",
});
</script>

<style lang="scss" scoped>
footer {
	z-index: 1020;
	position: relative;
	background: var(--bs-body-bg);
	margin-top: auto;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

		[data-bs-theme="dark"] & {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / .125)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
		}
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.25));

		[data-bs-theme="dark"] & {
			background: linear-gradient(
				to bottom,
				rgb(var(--bs-body-bg-rgb)) 50%,
				rgba(var(--bs-body-bg-rgb), 0.125)
			);
		}
	}	

	.back-to-top {
		position: absolute;
		margin: 0 auto;
		top: 0;
		left: 0;
		right: 0;
		height: max-content;
		margin-top: -2rem;

		button {
			background: var(--bs-body-bg);
			border: 1px solid var(--bs-border-color);
			height: 4rem;
			width: 4rem;
			border-radius: 99rem;
			transition: all 0.2s;

			&:hover {
				background: var(--bs-primary);
				border-color: var(--bs-primary);
			}
		}
	}
}

/* Di dalam <style> */
.social-icons a {
	margin-right: 10px; /* Atur jarak antar ikon */
}

.list-unstyled {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0;

	a {
		text-decoration: none;
		color: var(--bs-body-color);
		opacity: 0.75;
	}
}
</style>