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
          Other Ways to Reach Me
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Prefer a different communication method? Here are other ways to get in touch.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="(contact, index) in contactMethods" 
          :key="contact.type"
          class="card p-6 text-center hover:scale-105 transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="600 + (index * 200)"
        >
          <div class="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <component :is="contact.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ contact.type }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ contact.description }}
          </p>
          <a 
            :href="contact.link"
            :target="contact.external ? '_blank' : '_self'"
            class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            {{ contact.linkText }}
          </a>
        </div>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div 
            class="card p-8"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1200"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Social Media
            </h3>
            <div class="space-y-4">
              <a 
                v-for="social in socialMedia" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
              >
                <div :class="social.bgColor" class="p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <component :is="social.icon" :class="social.textColor" class="w-5 h-5" />
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">{{ social.name }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ social.handle }}</div>
                </div>
                <svg class="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div 
            class="card p-8"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1400"
          >
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Availability
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span class="text-gray-700 dark:text-gray-300">Current Status</span>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-green-600 dark:text-green-400 font-medium">Available</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span class="text-gray-700 dark:text-gray-300">Response Time</span>
                <span class="text-gray-900 dark:text-white font-medium">Within 24 hours</span>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span class="text-gray-700 dark:text-gray-300">Time Zone</span>
                <span class="text-gray-900 dark:text-white font-medium">PST (UTC-8)</span>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span class="text-gray-700 dark:text-gray-300">Best Time to Call</span>
                <span class="text-gray-900 dark:text-white font-medium">9 AM - 6 PM PST</span>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <div class="flex items-start space-x-3">
                <div class="w-5 h-5 flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p class="text-primary-700 dark:text-primary-300 text-sm">
                  Currently accepting new projects for Q2 2024. Book a consultation to discuss your project timeline.
                </p>
              </div>
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

const contactMethods = [
  {
    type: 'Email',
    description: 'Send me a detailed message',
    icon: 'EnvelopeIcon',
    link: `mailto:${personal.email}`,
    linkText: personal.email,
    external: false
  },
  {
    type: 'Phone',
    description: 'Call me directly',
    icon: 'PhoneIcon',
    link: `tel:${personal.phone}`,
    linkText: personal.phone,
    external: false
  },
  {
    type: 'LinkedIn',
    description: 'Connect professionally',
    icon: 'LinkedInIcon',
    link: personal.social.linkedin,
    linkText: 'View Profile',
    external: true
  },
  {
    type: 'GitHub',
    description: 'Check out my code',
    icon: 'GitHubIcon',
    link: personal.social.github,
    linkText: 'View Repositories',
    external: true
  }
]

const socialMedia = [
  {
    name: 'LinkedIn',
    handle: '@nikimahdian',
    url: personal.social.linkedin,
    icon: 'LinkedInIcon',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    name: 'GitHub',
    handle: '@nikimahdian',
    url: personal.social.github,
    icon: 'GitHubIcon',
    bgColor: 'bg-gray-100 dark:bg-gray-800',
    textColor: 'text-gray-700 dark:text-gray-300'
  },
  {
    name: 'Twitter',
    handle: '@nikimahdian',
    url: personal.social.twitter,
    icon: 'TwitterIcon',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    textColor: 'text-blue-500 dark:text-blue-400'
  },
  {
    name: 'Instagram',
    handle: '@nikimahdian',
    url: personal.social.instagram,
    icon: 'InstagramIcon',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    textColor: 'text-pink-600 dark:text-pink-400'
  }
]
</script>