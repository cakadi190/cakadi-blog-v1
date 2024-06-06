<template>
	<teleport to="body">
		<client-only>
			<div class="modal fade" id="shareModal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header border-0">
							<h5 class="modal-title">Bagikan Artikel Ini</h5>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div class="form-group mb-3">
								<label for="shareUrl" class="mb-2">Share URL</label>
								<div class="input-group">
									<input
										type="text"
										readonly
										class="form-control"
										v-model="requesturl.href"
										id="shareUrlInput"
									/>
									<button
										class="btn btn-light"
										@click="copyInputValue('#shareUrlInput')"
										type="button"
									>
										<Icon name="fa6-solid:copy" />
									</button>
								</div>
							</div>

							<div class="d-flex gap-3">
								<SocialShare
									v-for="network in [
										'facebook',
										'twitter',
										'linkedin',
										'email',
										'telegram',
										'whatsapp',
										'skype',
										'line',
										'reddit',
									]"
									:url="requesturl.href"
									:key="network"
									:network="network"
									:styled="true"
									:label="false"
									class="p-2 text-white"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</client-only>
	</teleport>

	<article id="post-section">
		<div class="ratio ratio-16x9 overflow-hidden rounded-3 border mb-3">
			<nuxt-img
			preload 
				:src="data.image ? data.image[0]['src'] : '/uploads/default.png'"
				:alt="data.title"
			/>
		</div>
		<h1>{{ data.title }}</h1>

		<div class="meta-data">
			<client-only>
				<div class="meta-data__date">
					<Icon name="fa6-solid:calendar" />
					<time :datetime="$dayjs(data.updated_at).utc().toString()">{{
						$dayjs(data.updated_at).locale("id").format("dddd, D MMMM YYYY")
					}}</time>
				</div>
			</client-only>
			<div class="meta-data__tags">
				<Icon name="fa6-solid:folder" />
				<span>{{ data.category.join(", ") }}</span>
			</div>
			<div class="meta-data__categories">
				<Icon name="fa6-solid:tags" />
				<span>{{ data.tags.join(", ") }}</span>
			</div>
			<a
				href="#"
				data-bs-toggle="modal"
				data-bs-target="#shareModal"
				class="color-body text-decoration-none meta-data__share"
			>
				<Icon name="fa6-solid:share" />
				<span>Bagikan</span>
			</a>
		</div>

		<ContentRendererMarkdown :value="data" />

		<h6 class="mb-4">Artikel ini ditulis oleh</h6>
		<div class="author-section bg-body-tertiary p-4 rounded-4">
			<div class="d-flex flex-column flex-lg-row gy-4 gap-4 align-items-center">
				<div class="avatar flex-shrink-0" style="width: 120px">
					<div
						class="ratio ratio-1x1 overflow-hidden rounded-circle border"
						style="width: 120px"
					>
						<Gravatar
							height="120"
							:size="700"
							default-img="mm"
							v-if="!data.author.avatar"
							:email="data.author.email"
						/>
						<nuxt-img
						preload 
							height="120"
							v-else
							:src="data.author.avatar"
							:alt="data.author.name"
						/>
					</div>
				</div>
				<div class="desc text-center text-lg-start">
					<div
						class="d-flex align-items-center justify-content-center justify-content-lg-start mb-2 gap-2"
					>
						<h2 class="mb-0">{{ data.author.name }}</h2>
						<Icon
							name="material-symbols:verified"
							data-bs-toggle="tooltip"
							data-bs-title="Pemilik situs atau pengguna yang terverifikasi"
							class="text-primary"
							v-if="
								data.author.email === 'cakadi190@gmail.com' ||
								data.author.verified
							"
							size="32"
						/>
					</div>
					<p class="mb-0">{{ data.author.description }}</p>
				</div>
			</div>
		</div>

		<div id="coment-section" class="target-hashbang">
			<client-only>
				<DisqusComments :identifier="route.fullPath" />
			</client-only>
		</div>
	</article>
</template>

<script lang="ts">
export default defineComponent({
	name: "PostContent",
});
</script>

<script lang="ts" setup>
defineProps<{
	data: Post;
}>();

const route = useRoute();
const requesturl = useRequestURL();
</script>

<style lang="scss" scoped>
.meta-data {
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;
	align-items: center;
	opacity: 0.75;
	padding-top: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1.5rem;
	border-top: 1px solid var(--bs-border-color);
	border-bottom: 1px solid var(--bs-border-color);

	> * {
		align-items: center;
		display: flex;
		gap: 0.5rem;
	}
}

.author-section {
	padding-bottom: 1rem;
	margin-bottom: 3rem;
}
</style>