<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <h1 
          class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Skills & Expertise
        </h1>
        
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Technical expertise in AI/ML, backend development, and research methodologies for autonomous systems.
        </p>
        
        <div class="mb-16" data-aos="fade-up" data-aos-delay="500">
          <img 
            src="/images/illustrations/skills-hero.svg" 
            alt="Skills illustration" 
            class="w-80 h-80 mx-auto object-contain"
          />
        </div>
        
        <div 
          class="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div 
            v-for="(category, index) in skillCategories" 
            :key="category.name"
            class="text-center"
            data-aos="zoom-in"
            :data-aos-delay="800 + (index * 200)"
          >
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
              <component :is="category.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ category.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ category.count }} skills
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { 
  CpuChipIcon, 
  ServerIcon, 
  WrenchIcon, 
  AcademicCapIcon 
} from '@heroicons/vue/24/outline'

const portfolioStore = usePortfolioStore()
const { skillsList } = portfolioStore

const skillCategories = computed(() => [
  {
    name: 'AI & ML',
    icon: CpuChipIcon,
    count: skillsList.ai_ml?.length || 0
  },
  {
    name: 'Backend',
    icon: ServerIcon,
    count: skillsList.backend?.length || 0
  },
  {
    name: 'Tools',
    icon: WrenchIcon,
    count: skillsList.tools?.length || 0
  },
  {
    name: 'Research',
    icon: AcademicCapIcon,
    count: skillsList.research?.length || 0
  }
])
</script>