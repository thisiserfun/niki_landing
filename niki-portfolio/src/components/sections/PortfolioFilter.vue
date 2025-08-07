<template>
  <section class="section-padding bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="container-custom">
      <div class="text-center mb-8">
        <h2 
          class="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Filter Projects
        </h2>
        <p 
          class="text-gray-600 dark:text-gray-400"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Browse projects by category or technology
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in projectCategories"
            :key="category"
            @click="setSelectedCategory(category)"
            class="filter-button"
            :class="{ 'filter-button-active': selectedCategory === category }"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="600 + (projectCategories.indexOf(category) * 100)"
          >
            {{ formatCategoryName(category) }}
            <span class="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
              {{ getProjectCount(category) }}
            </span>
          </button>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Showing <span class="font-semibold text-primary-600 dark:text-primary-400">{{ filteredProjects.length }}</span> 
            of <span class="font-semibold">{{ projectsList.length }}</span> projects
            {{ selectedCategory !== 'all' ? `in "${formatCategoryName(selectedCategory)}"` : '' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { selectedCategory, projectCategories, filteredProjects, projectsList, setSelectedCategory } = portfolioStore

const formatCategoryName = (category) => {
  if (category === 'all') return 'All Projects'
  return category.charAt(0).toUpperCase() + category.slice(1)
}

const getProjectCount = (category) => {
  if (category === 'all') {
    return projectsList.length
  }
  return projectsList.filter(project => 
    project.category === category || project.technologies.includes(category)
  ).length
}
</script>

<style scoped>
.filter-button {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-800 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105;
}

.filter-button-active {
  @apply bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500;
}
</style>