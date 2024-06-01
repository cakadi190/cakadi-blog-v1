<template>
	<main>
		<div class="container">
			<div class="row">
				<content-list path="/">
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
								class="card card-body p-4 rounded-4 text-decoration-none"
								:to="article._path"
							>
								<h3>{{ article.title }}</h3>
								<p>{{ limitChars(article.description, 200) }}</p>

								<div>{{ article.category.join(", ") }}</div>
								<div>{{ article.tags.slice(0, 5).join(", ") }}</div>
							</nuxt-link>
						</article>
					</template>
				</content-list>
			</div>
		</div>
	</main>
</template>
