<template>
  <section class="min-h-screen flex items-center section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <span class="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
              <span class="text-indigo-600 dark:text-indigo-400 font-medium text-sm">AI Research & Development</span>
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              About Me
            </h1>
            
            <div class="space-y-4">
              <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ personal.bio }}
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate about pushing the boundaries of AI and autonomous systems, I combine academic rigor with practical innovation to solve real-world challenges.
              </p>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 dark:text-white flex items-center">
                <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <p class="text-gray-600 dark:text-gray-400">{{ personal.location }}</p>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 dark:text-white flex items-center">
                <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </h3>
              <a :href="`mailto:${personal.email}`" class="text-primary-600 dark:text-primary-400 hover:underline">
                {{ personal.email }}
              </a>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 dark:text-white flex items-center">
                <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </h3>
              <a :href="`tel:${personal.phone}`" class="text-primary-600 dark:text-primary-400 hover:underline">
                {{ personal.phone }}
              </a>
            </div>
            
            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 dark:text-white flex items-center">
                <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2z" />
                </svg>
                Status
              </h3>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span class="text-gray-600 dark:text-gray-400">Available for projects</span>
              </div>
            </div>
          </div>
          
          <div class="flex space-x-4">
            <a :href="personal.cvUrl" download class="btn-primary">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <router-link to="/contact" class="btn-secondary">
              Get In Touch
            </router-link>
          </div>
        </div>
        
        <div class="relative">
          <div class="relative w-full max-w-lg mx-auto">
            <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <img 
                src="/images/illustrations/about-hero.svg"
                alt="About illustration"
                class="w-full h-auto object-contain"
              />
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