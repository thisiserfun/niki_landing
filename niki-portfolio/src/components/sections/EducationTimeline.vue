<template>
  <section class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 left-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    </div>

    <div class="container-custom section-padding relative z-10">
      <div 
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Education Journey
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          My academic path in electrical engineering and elite education
        </p>
        <div class="mb-8">
          <img 
            src="/images/illustrations/education.svg" 
            alt="Education illustration" 
            class="w-64 h-64 mx-auto object-contain"
          />
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>

          <!-- Education Items -->
          <div 
            v-for="(edu, index) in education" 
            :key="edu.id"
            class="relative mb-12 last:mb-0"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="200 * index"
            data-aos-duration="800"
          >
            <div :class="[
              'flex items-center gap-8',
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            ]">
              <!-- Timeline Dot -->
              <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-indigo-600 rounded-full z-10"></div>
              
              <!-- Content Card -->
              <div :class="[
                'flex-1 ml-16 lg:ml-0',
                index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
              ]">
                <div class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
                  <!-- Period Badge -->
                  <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                    <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{{ edu.period }}</span>
                  </div>

                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                    {{ edu.degree }}
                  </h3>
                  
                  <div class="flex items-center gap-2 mb-3">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h4 class="text-lg font-medium text-gray-600 dark:text-gray-300">{{ edu.institution }}</h4>
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ edu.description }}</p>
                  
                  <div v-if="edu.gpa" class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ edu.gpa }}</span>
                  </div>
                </div>
              </div>

              <!-- Empty Space for Layout -->
              <div class="hidden lg:block flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { education } = portfolioStore
</script>

<style scoped>
</style>