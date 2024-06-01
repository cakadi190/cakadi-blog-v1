<template>
	<main class="pt-5">
		<div class="container pt-5 mt-5">
			<h3>Berita Teknologi Terbaru</h3>

			<div class="row gy-4">
				<content-list :query="{
					path: '/teknologi/',
					limit: 6,
				}">
					<template #not-found>
						<div class="col-md-6 mx-auto">
							<error-section
								imgSrc="/images/errors/404.svg"
								imgAlt="Tidak Ditemukan"
								imgHeight="250"
								title="Tidak Ada Postingan"
								text="Kami akan segera menambahkan artikel untuk bagian ini."
							/>
						</div>
					</template>

					<template #default="{ list }">
						<blog-home
							:data="article"
							v-for="article in list"
							:key="article._path"
						/>
					</template>
				</content-list>
			</div>
		</div>

		<section class="need-space">
			<div class="container">
				<h3>Semua Kategori</h3>

				<div class="row gy-4">
					<content-list path="/">
						<template #not-found>
							<div class="col-md-6 mx-auto">
								<error-section
									imgSrc="/images/errors/404.svg"
									imgAlt="Tidak Ditemukan"
									imgHeight="250"
									title="Tidak Ada Postingan"
									text="Kami akan segera menambahkan artikel untuk bagian ini."
								/>
							</div>
						</template>

						<template #default="{ list }">
							<blog-home
								:data="article"
								v-for="article in list"
								:key="article._path"
							/>
						</template>
					</content-list>
				</div>
			</div>
		</section>
	</main>
</template>
