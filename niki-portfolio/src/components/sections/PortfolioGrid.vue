<template>
  <section class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container-custom">
      <transition-group 
        name="portfolio" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="portfolio-card group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 100"
        >
          <div class="relative overflow-hidden rounded-t-xl">
            <ImagePlaceholder
              :src="project.image"
              :alt="project.title"
              image-class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              placeholder-class="w-full h-64"
              :placeholder-title="project.title"
              placeholder-subtitle="Project image coming soon"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ project.date }}
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-b-xl p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                {{ project.category }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
              <ul class="space-y-1">
                <li 
                  v-for="feature in project.features.slice(0, 2)" 
                  :key="feature"
                  class="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                >
                  <svg class="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <p v-if="project.features.length > 2" class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                +{{ project.features.length - 2 }} more features
              </p>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies.slice(0, 4)" 
                :key="tech"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 4"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 text-xs rounded-full"
              >
                +{{ project.technologies.length - 4 }}
              </span>
            </div>
          </div>
        </div>
      </transition-group>
      
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          No projects found
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Try selecting a different category or technology filter.
        </p>
        <button 
          @click="setSelectedCategory('all')"
          class="btn-primary"
        >
          Show All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'
import ImagePlaceholder from '../common/ImagePlaceholder.vue'

const portfolioStore = usePortfolioStore()
const { filteredProjects, setSelectedCategory } = portfolioStore
</script>

<style scoped>
.portfolio-card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden;
}

.portfolio-enter-active,
.portfolio-leave-active {
  transition: all 0.3s ease;
}

.portfolio-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.portfolio-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.portfolio-move {
  transition: transform 0.3s ease;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>