<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <section class="bh-journey" aria-labelledby="journey-heading">
    <div class="bh-journey__head">
      <h2 id="journey-heading">{{ frontmatter.journeyTitle }}</h2>
      <p>{{ frontmatter.journeyNote }}</p>
    </div>

    <ol class="bh-grid">
      <li v-for="(step, i) in frontmatter.journey" :key="step.title" class="bh-cell">
        <a :href="withBase(step.link)" class="bh-cell__link">
          <span class="bh-cell__period">P{{ i + 1 }}</span>
          <span class="bh-cell__when">{{ step.when }}</span>
          <span class="bh-cell__title">{{ step.title }}</span>
          <span class="bh-cell__text">{{ step.text }}</span>
        </a>
      </li>
    </ol>
  </section>
</template>
