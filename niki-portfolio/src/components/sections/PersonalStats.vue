<template>
  <section class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          By the Numbers
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Some key metrics that reflect my journey and achievements
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="text-center card p-6 hover:scale-105 transition-all duration-300"
          data-aos="zoom-in"
          :data-aos-delay="600 + (index * 200)"
        >
          <div class="mb-4">
            <component 
              :is="stat.icon" 
              class="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3" 
            />
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ stat.label }}
            </div>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500">
            {{ stat.description }}
          </p>
        </div>
      </div>
      
      <div class="mt-16 grid md:grid-cols-2 gap-12">
        <div 
          class="card p-8"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What Drives Me
          </h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p class="text-gray-600 dark:text-gray-400">
                Creating solutions that make a real impact on people's lives
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p class="text-gray-600 dark:text-gray-400">
                Continuous learning and staying ahead of technology trends
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-primary-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <p class="text-gray-600 dark:text-gray-400">
                Building scalable and maintainable code architectures
              </p>
            </div>
          </div>
        </div>
        
        <div 
          class="card p-8"
          data-aos="fade-left"
          data-aos-delay="1400"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Fun Facts
          </h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 15h2l2-2v-2H9v2l-2 2z" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Coffee consumption: 4-5 cups per day (premium fuel for coding)
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Coding soundtrack: Lo-fi hip hop and ambient electronic music
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Always learning: Currently exploring AI/ML and Web3 technologies
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                Hobby: Building small indie games in my spare time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FolderIcon, ClockIcon, UserGroupIcon, CodeBracketIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/vue/24/outline'

const stats = [
  {
    value: '2+',
    label: 'Years Research',
    description: 'AI and Machine Learning research experience',
    icon: AcademicCapIcon
  },
  {
    value: '10+',
    label: 'Projects Built',
    description: 'From academic research to industry applications',
    icon: FolderIcon
  },
  {
    value: '95%',
    label: 'Python Proficiency',
    description: 'Primary language for AI/ML development',
    icon: CodeBracketIcon
  },
  {
    value: '24/7',
    label: 'Learning Mode',
    description: 'Always exploring new technologies and methods',
    icon: CpuChipIcon
  }
]
</script>