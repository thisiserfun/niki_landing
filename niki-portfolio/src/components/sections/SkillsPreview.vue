<template>
  <section class="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Skills & Expertise
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Combining AI research with practical development skills
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div 
          v-for="(category, categoryName) in skillsPreview" 
          :key="categoryName"
          class="group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200 * (Object.keys(skillsPreview).indexOf(categoryName) + 1)"
        >
          <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
            <!-- Category Header -->
            <div class="mb-6">
              <div class="w-16 h-16 mx-auto mb-4 relative">
                <div class="absolute inset-0 bg-gradient-to-br rounded-xl opacity-20 group-hover:opacity-30 transition-opacity" :class="getCategoryGradient(categoryName)"></div>
                <div class="relative w-full h-full flex items-center justify-center">
                  <component :is="getCategoryIcon(categoryName)" class="w-10 h-10" :class="getCategoryColor(categoryName)" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white text-center capitalize">
                {{ formatCategoryName(categoryName) }}
              </h3>
            </div>
            
            <!-- Skills List -->
            <div class="space-y-4">
              <div 
                v-for="skill in category.slice(0, 3)" 
                :key="skill.name"
                class="group/skill"
              >
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                    {{ skill.name }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r transition-all duration-500 ease-out rounded-full"
                    :class="getCategoryGradient(categoryName)"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            
            <!-- More Skills Badge -->
            <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <p class="text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                +{{ category.length - 3 }} more skills
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <router-link to="/skills" class="btn-primary">
          View All Skills
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { BrainIcon, AcademicIcon, CodeIcon, WrenchIcon } from '../ui/Icons.vue'

const portfolioStore = usePortfolioStore()
const { skillsList } = portfolioStore

const skillsPreview = computed(() => {
  const preview = {}
  Object.keys(skillsList.value).forEach(category => {
    preview[category] = skillsList.value[category]
  })
  return preview
})

const getCategoryIcon = (category) => {
  const icons = {
    ai_ml: BrainIcon,
    development: CodeIcon,
    research: AcademicIcon,
    tools: WrenchIcon
  }
  return icons[category] || CodeIcon
}

const getCategoryGradient = (category) => {
  const gradients = {
    ai_ml: 'from-purple-600 to-pink-600',
    development: 'from-indigo-600 to-blue-600',
    research: 'from-green-600 to-teal-600',
    tools: 'from-orange-600 to-red-600'
  }
  return gradients[category] || 'from-gray-600 to-gray-800'
}

const getCategoryColor = (category) => {
  const colors = {
    ai_ml: 'text-purple-600 dark:text-purple-400',
    development: 'text-indigo-600 dark:text-indigo-400',
    research: 'text-green-600 dark:text-green-400',
    tools: 'text-orange-600 dark:text-orange-400'
  }
  return colors[category] || 'text-gray-600 dark:text-gray-400'
}

const formatCategoryName = (name) => {
  const formatted = {
    ai_ml: 'AI & Machine Learning',
    development: 'Development',
    research: 'Research',
    tools: 'Tools & Technologies'
  }
  return formatted[name] || name.replace('_', ' ')
}
</script>