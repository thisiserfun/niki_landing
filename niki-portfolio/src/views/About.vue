<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20">
      <div class="container-custom">
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

    <!-- Stats Section -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            By the Numbers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Some key metrics that reflect my journey and achievements
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center card p-6 hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">2+</div>
            <div class="text-gray-600 dark:text-gray-400">Years Research</div>
            <p class="text-sm text-gray-500 dark:text-gray-500">AI and Machine Learning research experience</p>
          </div>
          
          <div class="text-center card p-6 hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">10+</div>
            <div class="text-gray-600 dark:text-gray-400">Projects Built</div>
            <p class="text-sm text-gray-500 dark:text-gray-500">From academic research to industry applications</p>
          </div>
          
          <div class="text-center card p-6 hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">95%</div>
            <div class="text-gray-600 dark:text-gray-400">Python Proficiency</div>
            <p class="text-sm text-gray-500 dark:text-gray-500">Primary language for AI/ML development</p>
          </div>
          
          <div class="text-center card p-6 hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-3">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
            <div class="text-gray-600 dark:text-gray-400">Learning Mode</div>
            <p class="text-sm text-gray-500 dark:text-gray-500">Always exploring new technologies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Education Section -->
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">My academic journey</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <div v-for="edu in education" :key="edu.id" class="card p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ edu.degree }}</h3>
              <span class="text-primary-600 dark:text-primary-400 font-medium">{{ edu.period }}</span>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-2">{{ edu.institution }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Experience Section -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">My professional journey</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <div v-for="exp in experience" :key="exp.id" class="card p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ exp.position }}</h3>
              <span class="text-primary-600 dark:text-primary-400 font-medium">{{ exp.period }}</span>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">{{ exp.company }}</p>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ exp.description }}</p>
            <ul class="space-y-2">
              <li v-for="achievement in exp.achievements" :key="achievement" class="flex items-start">
                <span class="text-primary-600 mr-2">•</span>
                <span class="text-gray-600 dark:text-gray-400">{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple CTA Section -->
    <section class="section-padding bg-gradient-to-r from-indigo-600 to-purple-600">
      <div class="container-custom">
        <div class="text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your ideas to life.
          </p>
          <div class="flex justify-center space-x-4">
            <router-link to="/contact" class="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get In Touch
            </router-link>
            <router-link to="/portfolio" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View My Work
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '../store/usePortfolioStore'

const portfolioStore = usePortfolioStore()
const { personal, education, experience } = portfolioStore
</script>