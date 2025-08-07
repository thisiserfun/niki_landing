<template>
  <div class="min-h-screen py-20">
    <!-- Hero Section -->
    <section class="relative pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI research or innovative projects? I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="container mx-auto px-4 -mt-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Email Card -->
        <div class="group" data-aos="flip-left" data-aos-duration="1000">
          <a href="mailto:Niki.mahdian@gmail.com" class="block">
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Email Me</h3>
                <p class="text-gray-600 dark:text-gray-400 text-center">Niki.mahdian@gmail.com</p>
              </div>
            </div>
          </a>
        </div>

        <!-- Phone Card -->
        <div class="group" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
          <a href="tel:+989960663327" class="block">
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Call Me</h3>
                <p class="text-gray-600 dark:text-gray-400 text-center">+98 996 066 3327</p>
              </div>
            </div>
          </a>
        </div>

        <!-- Location Card -->
        <div class="group" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Location</h3>
              <p class="text-gray-600 dark:text-gray-400 text-center">Tehran, Iran</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="container mx-auto px-4 mt-20">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Send Me a Message
          </h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }">
                <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-200"
                  placeholder="John Doe"
                >
              </div>
              
              <div v-motion :initial="{ opacity: 0, x: 20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }">
                <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-200"
                  placeholder="john@example.com"
                >
              </div>
            </div>
            
            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
              <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                v-model="form.subject"
                required
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-200"
                placeholder="Research Collaboration"
              >
            </div>
            
            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }">
              <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
              <textarea 
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-200 resize-none"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>
            
            <div class="text-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
              <button 
                type="submit"
                class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Send Message
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import AOS from 'aos'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Create mailto link with form data
  const subject = encodeURIComponent(form.value.subject)
  const body = encodeURIComponent(`From: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)
  const mailtoLink = `mailto:Niki.mahdian@gmail.com?subject=${subject}&body=${body}`
  
  window.location.href = mailtoLink
}

onMounted(() => {
  AOS.refresh()
})
</script>