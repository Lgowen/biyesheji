<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import 'github-markdown-css'
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>