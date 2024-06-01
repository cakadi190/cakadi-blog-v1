<template>
	<main class="pt-5">
		<div class="container pt-5 mt-5">
			<h3>Berita Teknologi Terbaru</h3>

			<div class="row">
				<content-list path="/teknologi">
					<template #not-found>
						<div class="col-md-6 mx-auto">
							<p>No articles found.</p>
						</div>
					</template>

					<template #default="{ list }">
						<article
							class="col-md-4"
							v-for="article in list"
							:key="article._path"
						>
							<nuxt-link
								class="card card-body p-3 rounded-4 text-decoration-none"
								:to="article._path"
							>
								<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
									<nuxt-img :src="article.image ? article.image[0]['src'] :'/uploads/default.png'" />
								</div>

								<h3>{{ article.title }}</h3>
							</nuxt-link>
						</article>
					</template>
				</content-list>
			</div>
		</div>
	</main>
</template>
