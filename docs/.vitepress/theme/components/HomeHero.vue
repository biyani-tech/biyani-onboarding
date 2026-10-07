<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <section class="bh-hero">
    <img
      class="bh-hero__logo"
      :src="withBase('/logo-biyani.png')"
      alt="Biyani Technologies Pvt. Ltd."
      width="200"
      height="70"
    />
    <p class="bh-greeting" lang="mr">{{ frontmatter.greeting }}</p>
    <h1 class="bh-title">{{ frontmatter.headline }}</h1>
    <p class="bh-lead">{{ frontmatter.lead }}</p>
    <div class="bh-actions">
      <a
        v-for="(a, i) in frontmatter.actions"
        :key="a.link"
        :href="withBase(a.link)"
        :class="['bh-btn', i === 0 ? 'bh-btn--primary' : 'bh-btn--plain']"
      >{{ a.text }}</a>
    </div>
  </section>
</template>
