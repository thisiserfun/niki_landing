<template>
  <section class="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%239333ea%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E')] dark:opacity-10"></div>
    </div>
    
    <div class="container-custom section-padding relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div 
          class="text-center lg:text-left space-y-8"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :duration="800"
        >
          <div class="space-y-6">
            <div 
              class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
            >
              <span class="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
              <span class="text-indigo-600 dark:text-indigo-400 font-medium text-sm">AI Research & Development</span>
            </div>
            
            <h1 
              class="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="400"
            >
              {{ personal.name }}
            </h1>
            
            <h2 
              class="text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-medium"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="600"
            >
              {{ personal.title }}
            </h2>
            
            <p 
              class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="800"
            >
              {{ personal.subtitle }}
            </p>
            
            <!-- Quick Info -->
            <div 
              class="flex flex-wrap gap-4 pt-4"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="900"
            >
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ personal.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:{{ personal.email }}" class="hover:text-indigo-600 transition-colors">{{ personal.email }}</a>
              </div>
            </div>
          </div>
          
          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="1000"
          >
            <router-link to="/portfolio" class="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5">
              <span>Explore My Research</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <a :href="personal.cvUrl" download class="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-gray-700 dark:text-gray-200 transition-all duration-200 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-indigo-600 hover:shadow-xl hover:-translate-y-0.5">
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
          
          <div 
            class="flex justify-center lg:justify-start space-x-4"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="1200"
          >
            <a 
              v-for="(social, key) in personal.social" 
              :key="key"
              :href="social"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon group"
              :class="`social-${key}`"
            >
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <component :is="getSocialIcon(key)" class="w-6 h-6 relative z-10 transition-colors duration-300" />
            </a>
          </div>
        </div>
        
        <div 
          class="flex justify-center lg:justify-end"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="600"
          :duration="1000"
        >
          <div class="relative group">
            <!-- Main Image Container -->
            <div class="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
              <!-- Rotating Border -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-spin-slow"></div>
              
              <!-- Image -->
              <div class="absolute inset-2 rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center p-4">
                <img 
                  src="/images/hero/hero-main.svg" 
                  :alt="personal.name"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-float">
              <span>AI Researcher</span>
            </div>
            
            <div class="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg animate-float animation-delay-2000">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div class="absolute top-1/2 -right-16 transform -translate-y-1/2 hidden xl:block">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float animation-delay-4000">
                <div class="text-center">
                  <div class="text-3xl font-bold text-indigo-600">2+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Years Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
<!--      <div class="flex flex-col items-center gap-2 text-gray-400">-->
<!--        <span class="text-sm">Scroll to explore</span>-->
<!--        <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />-->
<!--        </svg>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../../store/usePortfolioStore'
import { LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon } from '../ui/Icons.vue'

const portfolioStore = usePortfolioStore()
const { personal } = portfolioStore

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: LinkedInIcon,
    github: GitHubIcon, 
    twitter: TwitterIcon,
    instagram: InstagramIcon
  }
  return icons[platform] || GitHubIcon
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.social-icon {
  @apply relative p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden;
}

.social-linkedin {
  @apply bg-blue-100 text-blue-600 hover:text-white dark:bg-blue-900/20 dark:text-blue-400;
}

.social-github {
  @apply bg-gray-100 text-gray-600 hover:text-white dark:bg-gray-800 dark:text-gray-400;
}

.social-twitter {
  @apply bg-blue-100 text-blue-400 hover:text-white dark:bg-blue-900/20 dark:text-blue-400;
}

.social-instagram {
  @apply bg-pink-100 text-pink-600 hover:text-white dark:bg-pink-900/20 dark:text-pink-400;
}
</style>