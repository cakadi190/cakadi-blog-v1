<!-- Breadcrumb.vue -->
<template>
	<nav aria-label="Breadcrumb">
		<ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb p-3 px-0 rounded-3 mb-3">
			<li v-for="(crumb, index) in breadcrumbs" :key="index" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="breadcrumb-item">
				<a :href="crumb.url" itemprop="item">
					<span itemprop="name">{{ crumb.label }}</span>
				</a>
				<meta itemprop="position" :content="(index + 1).toString()" />
			</li>
		</ol>
	</nav>
</template>

<script lang="ts">
interface BreadcrumbItem {
	label: string;
	url: string;
}

export default defineComponent({
	name: 'Breadcrumb',
	props: {
		breadcrumbs: {
			type: Array as PropType<BreadcrumbItem[]>,
			required: true
		}
	},
});
</script>

<style scoped>
/* Tidak perlu perubahan gaya khusus untuk Bootstrap 5 */
</style>
