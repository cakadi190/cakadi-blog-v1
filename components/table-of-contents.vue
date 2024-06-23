<template>
  <div>
    <div class="card mb-3">
      <div class="card-header" id="tocHeading">
        <h5 class="mb-0">
          <button class="btn btn-link text-decoration-none btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTOC" aria-expanded="true" aria-controls="collapseTOC">
            Table of Contents
          </button>
        </h5>
      </div>

      <div id="collapseTOC" class="collapse" aria-labelledby="tocHeading" data-bs-parent="#tocAccordion">
        <div class="card-body">
          <nav>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(link, index) in tocData.links" :key="index">
                <a :href="'#' + link.id">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    tocData: {
      type: Object as PropType<TOCData>,
      required: true
    }
  },
});
</script>

<style scoped>
/* Gaya CSS tambahan sesuai kebutuhan */
</style>
