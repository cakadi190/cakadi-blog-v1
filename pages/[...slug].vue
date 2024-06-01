<template>
  <main>
    <content-doc :path="routePath">
      <template #not-found>
        <p>No article found.</p>
      </template>

      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>

        <content-renderer :value="doc" />
      </template>
    </content-doc>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const getPath = computed<string[]>(() => {
  return route.params.slug as string[];
});

const routePath = computed(() => {
  if (Array.isArray(getPath.value)) {
    return `/${getPath.value.join('/')}`;
  }
  return `${getPath.value}`;
});

const { data } = await useAsyncData('article', () => {
  const slugPath = Array.isArray(getPath.value) ? getPath.value.join('/') : getPath.value;
  return queryContent(slugPath).findOne();
});
</script>
