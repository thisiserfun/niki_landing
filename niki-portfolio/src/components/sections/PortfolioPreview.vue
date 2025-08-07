<template>
  <section class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Featured Projects
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          A showcase of my recent work and achievements
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(project, index) in featuredProjects" 
          :key="project.id"
          class="card group overflow-hidden hover:scale-105 transition-all duration-500"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200 * (index + 1)"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {{ project.category }}
              </span>
              <span class="text-sm text-gray-500">{{ project.date }}</span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies.slice(0, 3)" 
                :key="tech"
                class="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-xs rounded-full"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 3"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <router-link to="/portfolio" class="btn-primary">
          View All Projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { projectsList } = portfolioStore

const featuredProjects = computed(() => {
  return projectsList.slice(0, 6)
})
</script>