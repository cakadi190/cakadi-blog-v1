
<script setup>
defineProps(['type'])
</script>

<template>
  <div :class="['alert', `alert-${type}`]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>