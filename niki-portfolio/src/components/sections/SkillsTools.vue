<template>
  <section class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Development Stack
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          The complete technology stack I use for modern web development
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(stack, index) in techStacks" 
          :key="stack.title"
          class="card p-8 text-center hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="600 + (index * 200)"
        >
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <component :is="stack.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ stack.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ stack.description }}
            </p>
          </div>
          
          <div class="space-y-3">
            <div 
              v-for="tech in stack.technologies" 
              :key="tech"
              class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <span class="text-gray-700 dark:text-gray-300">{{ tech }}</span>
              <div class="flex space-x-1">
                <div 
                  v-for="i in 5" 
                  :key="i"
                  class="w-2 h-2 rounded-full"
                  :class="i <= 4 ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <div 
          class="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="1200"
        >
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-gray-900 dark:text-white font-semibold">Always Learning</span>
          </div>
          <div class="text-gray-400">•</div>
          <span class="text-gray-600 dark:text-gray-400">
            Currently exploring: Next.js 13, Supabase, Three.js
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon, ServerIcon, CogIcon, DevicePhoneMobileIcon, PaintBrushIcon, CpuChipIcon } from '@heroicons/vue/24/outline'

const techStacks = [
    {
    title: 'AI & Machine Learning',
    description: 'Artificial intelligence and data science tools',
    icon: CpuChipIcon,
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Pandas']
  },
  {
    title: 'Backend Development',
    description: 'Server-side technologies and database management',
    icon: ServerIcon,
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'DevOps & Tools',
    description: 'Development tools and deployment platforms',
    icon: CogIcon,
    technologies: ['Docker', 'AWS', 'Git', 'Webpack', 'Jest']
  }

]
</script>