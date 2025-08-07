<template>
  <section class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <div class="space-y-16">
        <div 
          v-for="(skills, categoryName) in skillsList" 
          :key="categoryName"
          class="space-y-8"
        >
          <div class="text-center">
            <h2 
              class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {{ getCategoryTitle(categoryName) }}
            </h2>
            <p 
              class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {{ getCategoryDescription(categoryName) }}
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div 
              v-for="(skill, index) in skills" 
              :key="skill.name"
              class="skill-card"
              data-aos="fade-up"
              :data-aos-delay="600 + (index * 100)"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center">
                    <component :is="getSkillIcon(skill.icon)" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span class="font-semibold text-gray-900 dark:text-white">
                    {{ skill.name }}
                  </span>
                </div>
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {{ skill.level }}%
                </span>
              </div>
              
              <div class="relative">
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${skill.level}%` }"
                    data-aos="progress-fill"
                    :data-aos-delay="800 + (index * 100)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { SparklesIcon } from '@heroicons/vue/24/outline'

const portfolioStore = usePortfolioStore()
const { skillsList } = portfolioStore

const getCategoryTitle = (category) => {
  const titles = {
    ai_ml: 'AI & Machine Learning',
    backend: 'Backend Development Stack',
    tools: 'Tools & Technologies'
  }
  return titles[category] || category
}

const getCategoryDescription = (category) => {
  const descriptions = {
    ai_ml: 'Advanced machine learning, deep learning, and AI technologies for building intelligent systems',
    backend: 'Django, Python, and modern backend technologies for scalable server-side applications',
    tools: 'Development tools and platforms that enhance productivity and workflow'
  }
  return descriptions[category] || ''
}

const getSkillIcon = (iconName) => {
  // Return the SparklesIcon for all skills
  return SparklesIcon
}
</script>

<style scoped>
.skill-card {
  @apply card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl;
}
</style>