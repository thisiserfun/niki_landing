<template>
  <section class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          What People Say
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Testimonials from clients and colleagues I've worked with
        </p>
      </div>
      
      <div class="relative">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonialsList.slice(0, 3)" 
            :key="testimonial.id"
            class="card p-6 hover:scale-105 transition-all duration-300"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="200 * (index + 1)"
          >
            <div class="flex items-center mb-4">
              <img 
                :src="testimonial.image" 
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ testimonial.position }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500">
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
            
            <div class="flex mb-4">
              <svg 
                v-for="i in testimonial.rating" 
                :key="i"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-400 italic">
              "{{ testimonial.text }}"
            </blockquote>
            
            <div class="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                <path d="M4 8v12h8l-2 2-2 2v-2c-4.41 0-8-3.59-8-8s3.59-8 8-8v4zm12 0v12h8l-2 2-2 2v-2c-4.41 0-8-3.59-8-8s3.59-8 8-8v4z" />
              </svg>
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
const { testimonialsList } = portfolioStore
</script>