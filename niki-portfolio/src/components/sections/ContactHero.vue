<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div class="container-custom">
      <div class="text-center max-w-4xl mx-auto">
        <h1 
          class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Let's Work Together
        </h1>
        
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 mb-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Ready to start your project? I'd love to hear about your ideas and discuss how we can bring them to life.
        </p>
        
        <div class="mb-12" v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1 }" :delay="500">
          <img 
            src="/images/illustrations/contact-hero.svg" 
            alt="Contact illustration" 
            class="w-80 h-80 mx-auto object-contain"
          />
        </div>
        
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
        >
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Quick Response
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              I typically respond within 24 hours
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Free Consultation
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              30-minute discovery call to discuss your project
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Dedicated Support
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Ongoing support and maintenance available
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>