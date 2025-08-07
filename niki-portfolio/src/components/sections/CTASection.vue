<template>
  <section class="section-padding bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
      <div class="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-float-slow"></div>
      <div class="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full animate-float"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h2 
          class="text-4xl lg:text-6xl font-bold mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Let's Build the Future Together
        </h2>
        
        <p 
          class="text-xl lg:text-2xl mb-8 text-gray-100"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Whether it's AI research, autonomous systems, or innovative blockchain solutions, I'm ready to collaborate on cutting-edge projects.
        </p>
        
        <div 
          class="flex flex-col sm:flex-row gap-6 justify-center items-center"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
        >
          <router-link 
            to="/contact"
            class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </router-link>
          
          <a 
            :href="personal.cvUrl" 
            download
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
        
        <div 
          class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="800"
        >
          <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">2+</div>
            <div class="text-gray-100">Years AI Research</div>
          </div>
          <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">3</div>
            <div class="text-gray-100">Major Projects</div>
          </div>
          <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">1</div>
            <div class="text-gray-100">Research Paper in Progress</div>
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

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
  animation-delay: 4s;
}
</style>