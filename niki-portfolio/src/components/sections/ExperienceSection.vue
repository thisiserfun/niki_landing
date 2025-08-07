<template>
  <section class="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2"></div>
    </div>

    <div class="container-custom section-padding relative z-10">
      <div 
        class="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Building innovative solutions at the intersection of AI and blockchain technology
        </p>
        <div class="mb-8">
          <img 
            src="/images/illustrations/experience.svg" 
            alt="Experience illustration" 
            class="w-64 h-64 mx-auto object-contain"
          />
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <div 
          v-for="(exp, index) in experience" 
          :key="exp.id"
          class="mb-12 last:mb-0"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="200 * index"
          data-aos-duration="800"
        >
          <div class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group">
            <div class="p-8 lg:p-10">
              <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                <!-- Company Logo/Icon Area -->
                <div class="flex-shrink-0">
                  <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
                        {{ exp.position }}
                      </h3>
                      <p class="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {{ exp.company }}
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{{ exp.period }}</span>
                    </div>
                  </div>

                  <p class="text-gray-600 dark:text-gray-400 mb-6">
                    {{ exp.description }}
                  </p>

                  <!-- Achievements/Projects -->
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Key Achievements
                    </h4>
                    
                    <div class="grid md:grid-cols-2 gap-4">
                      <div 
                        v-for="(achievement, idx) in exp.achievements" 
                        :key="idx"
                        class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                      >
                        <div class="flex items-start gap-3">
                          <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <span class="text-white text-sm font-bold">{{ idx + 1 }}</span>
                          </div>
                          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {{ achievement }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Technologies Used (if applicable) -->
                  <div v-if="exp.technologies" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in exp.technologies" 
                        :key="tech"
                        class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div 
        class="text-center mt-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="600"
      >
        <router-link to="/contact" class="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5">
          <span>Let's Work Together</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { experience } = portfolioStore

// Add technologies to experience data if needed
experience.value.forEach(exp => {
  if (exp.company === 'CDH') {
    exp.technologies = ['Blockchain', 'Smart Contracts', 'Python', 'React', 'Node.js', 'Security Protocols']
  }
})
</script>

<style scoped>
</style>