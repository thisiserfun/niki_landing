<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <h1 
          class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          My Portfolio
        </h1>
        
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 mb-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          A showcase of projects I've built using various technologies and frameworks. Each project represents a unique challenge and learning experience.
        </p>
        
        <div class="mb-12" v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1 }" :delay="500">
          <img 
            src="/images/illustrations/portfolio-hero.svg" 
            alt="Portfolio illustration" 
            class="w-96 h-96 mx-auto object-contain"
          />
        </div>
        
        <div 
          class="grid grid-cols-2 md:grid-cols-4 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ projectsList.length }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ uniqueCategories.length }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ uniqueTechnologies.length }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </div>
            <div class="text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { projectsList } = portfolioStore

const uniqueCategories = computed(() => {
  const categories = new Set()
  projectsList.forEach(project => categories.add(project.category))
  return Array.from(categories)
})

const uniqueTechnologies = computed(() => {
  const technologies = new Set()
  projectsList.forEach(project => {
    project.technologies.forEach(tech => technologies.add(tech))
  })
  return Array.from(technologies)
})
</script>