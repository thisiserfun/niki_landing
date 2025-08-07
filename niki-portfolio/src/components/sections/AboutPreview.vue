<template>
  <section class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          About Me
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Passionate developer with a love for creating innovative solutions
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div 
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0 }"
          :delay="600"
        >
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ personal.bio }}
          </p>
          
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <h4 class="font-semibold text-gray-900 dark:text-white">Location</h4>
              <p class="text-gray-600 dark:text-gray-400">{{ personal.location }}</p>
            </div>
            <div class="space-y-2">
              <h4 class="font-semibold text-gray-900 dark:text-white">Email</h4>
              <a :href="`mailto:${personal.email}`" class="text-primary-600 dark:text-primary-400 hover:underline">
                {{ personal.email }}
              </a>
            </div>
          </div>
          
          <div class="flex space-x-4">
            <router-link to="/about" class="btn-primary">
              Learn More About Me
            </router-link>
            <router-link to="/contact" class="btn-secondary">
              Get In Touch
            </router-link>
          </div>
        </div>
        
        <div 
          class="relative"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0 }"
          :delay="800"
        >
          <img 
            src="/images/illustrations/about-hero.svg"
            alt="About illustration"
            class="w-full h-auto rounded-2xl"
          />
          <div class="absolute -bottom-6 -left-6 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="font-semibold">Available for projects</span>
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
const { personal } = portfolioStore
</script>