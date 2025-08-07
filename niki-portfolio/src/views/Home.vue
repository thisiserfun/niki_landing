<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section with Enhanced Particle Background -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Multi-Layer Animated Background -->
      <div class="absolute inset-0">
        <!-- Primary gradient layer -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
        <!-- Secondary animated gradient layer -->
        <div class="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-transparent to-cyan-900/80 animate-pulse"></div>
        <!-- Geometric pattern overlay -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <!-- Noise texture for depth -->
        <div class="absolute inset-0 opacity-20 mix-blend-overlay" style="background-image: radial-gradient(circle at 25% 25%, #ffffff 0%, transparent 50%), radial-gradient(circle at 75% 75%, #ffffff 0%, transparent 50%)"></div>
      </div>
      
      <!-- Enhanced Floating Orbs with More Complex Animations -->
      <div class="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delayed"></div>
      <div class="absolute top-40 right-40 w-64 h-64 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-slow"></div>
      <div class="absolute bottom-40 left-1/3 w-48 h-48 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-float-reverse"></div>
      <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-pulse"></div>
      
      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4 py-20 text-center">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
        >
          <h1 class="text-7xl lg:text-9xl font-black mb-8 leading-none">
            <span class="inline-block text-white drop-shadow-2xl" v-motion :initial="{ opacity: 0, x: -100, rotateX: -90 }" :enter="{ opacity: 1, x: 0, rotateX: 0, transition: { delay: 200, duration: 1200, type: 'spring' } }">Niki</span>
            <br class="lg:hidden" />
            <span class="inline-block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-extrabold" v-motion :initial="{ opacity: 0, x: 100, rotateX: 90 }" :enter="{ opacity: 1, x: 0, rotateX: 0, transition: { delay: 600, duration: 1200, type: 'spring' } }">Mahdian</span>
          </h1>
          
          <div class="relative inline-block mb-12">
            <h2 class="text-4xl lg:text-6xl font-light text-white/95 tracking-wide" v-motion :initial="{ opacity: 0, y: 50, scale: 0.8 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1000, duration: 1200, type: 'spring' } }">
              <span class="typewriter bg-gradient-to-r from-white via-cyan-100 to-violet-100 bg-clip-text text-transparent">AI & ML Specialist</span>
            </h2>
            <!-- Decorative lines -->
            <div class="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" v-motion :initial="{ width: 0 }" :enter="{ width: 48, transition: { delay: 1500, duration: 800 } }"></div>
            <div class="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-violet-400" v-motion :initial="{ width: 0 }" :enter="{ width: 48, transition: { delay: 1500, duration: 800 } }"></div>
          </div>
          
          <p class="text-2xl lg:text-3xl text-white/90 max-w-5xl mx-auto mb-16 leading-relaxed font-light" v-motion :initial="{ opacity: 0, y: 30, blur: 10 }" :enter="{ opacity: 1, y: 0, blur: 0, transition: { delay: 1400, duration: 1000 } }">
            Building intelligent systems where <span class="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent font-semibold">cutting-edge AI</span> meets <span class="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-semibold">robust backend architecture</span>
          </p>
          
          <!-- Enhanced CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-8 justify-center mb-16" v-motion :initial="{ opacity: 0, y: 40, scale: 0.8 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1800, duration: 1000, type: 'spring' } }">
            <a href="#experience" class="group relative px-12 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span class="relative z-10 flex items-center gap-3">
                <svg class="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Explore My Work
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600/80 via-violet-600/80 to-fuchsia-600/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
            </a>
            <a href="#contact" class="group px-12 py-5 bg-transparent border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/60 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-white/25 backdrop-blur-sm">
              <span class="flex items-center gap-3">
                <svg class="w-6 h-6 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </span>
            </a>
          </div>
          
          <!-- Enhanced Contact Info -->
          <div class="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/90" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 1000 } }">
            <a href="mailto:Niki.mahdian@gmail.com" class="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="font-medium">Niki.mahdian@gmail.com</span>
            </a>
            <div class="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="font-medium">Tehran, Iran</span>
            </div>
          </div>
        </div>
        
        <!-- Enhanced Scroll Indicator -->
        <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2500, duration: 800 } }">
<!--          <div class="flex flex-col items-center gap-3 animate-bounce-slow">
            <div class="text-white/60 text-sm font-medium tracking-wide">Scroll to explore</div>
            <div class="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div class="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center group hover:border-white/50 transition-colors cursor-pointer">
              <svg class="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>-->
        </div>
      </div>
    </section>

    <!-- About Section with Parallax -->
    <section class="py-32 relative bg-white dark:bg-gray-900 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 transform -skew-y-6"></div>
      </div>
      
      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 class="text-5xl font-bold mb-8">
                <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Innovating</span>
                <br />
                <span class="text-gray-900 dark:text-white">at the Intersection</span>
              </h2>
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Where artificial intelligence meets autonomous systems, I'm pushing the boundaries of what's possible in computational efficiency and real-time decision making.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My research in task offloading for autonomous vehicles aims to revolutionize how we approach distributed computing in mobile environments, optimizing resource allocation and reducing latency in critical systems.
              </p>
            </div>
            
            <div class="relative" data-aos="fade-left" data-aos-duration="1200">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl transform rotate-6 scale-105"></div>
                <div class="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                  <div class="space-y-6">
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Research</h3>
                        <p class="text-gray-600 dark:text-gray-400">2+ years developing innovative ML algorithms</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Current Focus</h3>
                        <p class="text-gray-600 dark:text-gray-400">Task Offloading in Autonomous Vehicles</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
                        <p class="text-gray-600 dark:text-gray-400">Backend development at CDH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Timeline with Creative Design -->
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Academic Journey</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Building a strong foundation for innovation</p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-20">
              <!-- University -->
              <div class="relative" data-aos="fade-up" data-aos-duration="1000">
                <div class="flex items-center">
                  <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-indigo-500 rounded-full z-10"></div>
                  
                  <div class="ml-20 lg:ml-0 lg:w-1/2 lg:pr-8">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-4">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="font-semibold">2021 - Present</span>
                      </div>
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">K.N. Toosi University of Technology</h3>
                      <p class="text-lg text-indigo-600 dark:text-indigo-400 mb-3">Bachelor of Electrical Engineering</p>
                      <p class="text-gray-600 dark:text-gray-400">Specializing in AI, Machine Learning, and Autonomous Systems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- High School -->
              <div class="relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="flex items-center justify-end">
                  <div class="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10"></div>
                  
                  <div class="ml-20 lg:ml-0 lg:w-1/2 lg:pl-8 lg:ml-auto">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="font-semibold">2015 - 2021</span>
                      </div>
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Farzanegan 1 School (SAMPAAD)</h3>
                      <p class="text-lg text-purple-600 dark:text-purple-400 mb-3">Mathematics Branch</p>
                      <p class="text-gray-600 dark:text-gray-400">Elite institution for exceptional students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section with Modern Cards -->
    <section id="experience" class="py-32 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Where innovation meets implementation</p>
        </div>
        
        <div class="max-w-6xl mx-auto space-y-12">
          <!-- CDH Experience -->
          <div class="relative group" data-aos="zoom-in" data-aos-duration="1000">
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
              <div class="p-8 lg:p-12">
                <div class="flex flex-col lg:flex-row gap-8">
                  <div class="flex-1">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-3xl font-bold text-gray-900 dark:text-white">CDH</h3>
                        <p class="text-lg text-indigo-600 dark:text-indigo-400">AI Research & Development | 2024 - Present</p>
                      </div>
                    </div>
                    
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      Leading development of cutting-edge AI solutions and robust backend systems.
                    </p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                      <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                        <h4 class="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">MADT Platform</h4>
                        <p class="text-gray-700 dark:text-gray-300">Revolutionary AI-powered platform with scalable backend architecture</p>
                      </div>
                      <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                        <h4 class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">Mintoro</h4>
                        <p class="text-gray-700 dark:text-gray-300">Secure backend system with advanced AI analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Research Experience -->
          <div class="relative group" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Academic Research</h3>
                  <p class="text-lg text-green-600 dark:text-green-400">AI & ML Research | 2022 - Present</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6">
                <h4 class="text-xl font-bold text-green-700 dark:text-green-300 mb-3">Task Offloading in Autonomous Vehicles</h4>
                <p class="text-gray-700 dark:text-gray-300">Developing innovative algorithms for computational task distribution in vehicle networks, optimizing resource utilization and reducing latency in real-time decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section with Interactive Cards -->
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Arsenal</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Tools and technologies I master</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- AI & ML Card -->
          <div class="group relative" data-aos="flip-left" data-aos-duration="1000">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI & Machine Learning</h3>
              <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Machine Learning
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Deep Learning
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Computer Vision
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  NLP
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Backend Development Card -->
          <div class="group relative" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend Development</h3>
              <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Python
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Django
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  REST APIs
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  PostgreSQL
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Redis
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Docker
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Microservices
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Tools Card -->
          <div class="group relative" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tools & Technologies</h3>
              <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Git
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Docker
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Linux
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  LaTeX
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  MATLAB
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Jupyter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Projects Section -->
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Research Projects</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Advancing the frontiers of AI and edge computing</p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="relative group" data-aos="zoom-in" data-aos-duration="1000">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
              <div class="flex items-start gap-6 mb-8">
                <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Task Offloading in Edge Computing with Meta-RL</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Using Meta Reinforcement Learning to optimize edge computing task distribution
                  </p>
                  
                  <div class="space-y-4">
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="text-gray-700 dark:text-gray-300">Reduced latency by 40% in edge networks</p>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="text-gray-700 dark:text-gray-300">Model adapts quickly to new network conditions</p>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="text-gray-700 dark:text-gray-300">Published research on adaptive task scheduling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-32 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Continuous learning and professional development</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- IBM Data Analysis Certificate -->
          <div class="group relative" data-aos="fade-up" data-aos-duration="1000">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div class="text-blue-600 dark:text-blue-400 font-bold text-2xl">IBM</div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Analysis with Python</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued Jun 2025</p>
                  <p class="text-xs text-gray-600 dark:text-gray-500 mb-4">Credential ID: 88PDFJ38AQN7</p>
                  <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span class="text-sm font-medium">Show credential</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Google Certificate -->
          <div class="group relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div class="text-green-600 dark:text-green-400 font-bold text-xl">Google</div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Foundations: Data, Data, Everywhere</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued Jun 2025</p>
                  <p class="text-xs text-gray-600 dark:text-gray-500 mb-4">Credential ID: 74LJEDCJIV5Y</p>
                  <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span class="text-sm font-medium">Show credential</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- IBM Python Certificate -->
          <div class="group relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div class="text-blue-600 dark:text-blue-400 font-bold text-2xl">IBM</div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Python for Data Science, AI & Development</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued Jun 2025</p>
                  <p class="text-xs text-gray-600 dark:text-gray-500 mb-4">Credential ID: P4JD3MALSV4A</p>
                  <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span class="text-sm font-medium">Show credential</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Stanford ML Certificate -->
          <div class="group relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
            <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div class="text-red-600 dark:text-red-400 font-bold text-sm text-center">Stanford</div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Supervised Machine Learning: Regression and Classification</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Issued Jun 2025</p>
                  <p class="text-xs text-gray-600 dark:text-gray-500 mb-4">Credential ID: 5MSB6PEUBWEL</p>
                  <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span class="text-sm font-medium">Show credential</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Build the Future?
          </h2>
          <p class="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Let's collaborate on cutting-edge AI research or innovative blockchain solutions
          </p>
          
          <div class="flex flex-wrap gap-6 justify-center">
            <a href="mailto:Niki.mahdian@gmail.com" class="group relative px-10 py-5 bg-white text-indigo-900 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span class="relative z-10">Send Me an Email</span>
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a href="tel:+989960663327" class="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-900 transform hover:scale-105 transition-all duration-300">
              Give Me a Call
            </a>
          </div>
          
          <div class="mt-16 flex justify-center gap-12 text-white/80">
            <div data-aos="fade-up" data-aos-delay="200">
              <div class="text-4xl font-bold mb-2">2+</div>
              <div class="text-lg">Years Research</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div class="text-4xl font-bold mb-2">3</div>
              <div class="text-lg">Major Projects</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-4xl font-bold mb-2">∞</div>
              <div class="text-lg">Passion for AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Back to Top Button -->
    <button 
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Back to top"
    >
      <svg class="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AOS from 'aos'

const mousePosition = ref({ x: 0, y: 0 })
const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // Refresh AOS with enhanced settings
  AOS.refresh({
    duration: 1200,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true
  })
  
  // Enhanced parallax and mouse tracking
  const handleScroll = () => {
    showBackToTop.value = window.pageYOffset > 300
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    
    // Parallax for floating orbs
    const orbs = document.querySelectorAll('.animate-float, .animate-float-delayed, .animate-float-slow')
    orbs.forEach((orb, index) => {
      const speed = 0.1 + (index * 0.05)
      orb.style.transform += ` translateY(${scrolled * speed}px)`
    })
    
    // Background parallax
    const bgElements = document.querySelectorAll('.parallax')
    bgElements.forEach(el => {
      const speed = el.dataset.speed || 0.5
      el.style.transform = `translateY(${scrolled * speed}px)`
    })
  }
  
  // Mouse movement for interactive effects
  const handleMouseMove = (e) => {
    mousePosition.value = {
      x: e.clientX,
      y: e.clientY
    }
    
    // Subtle floating orb movement based on mouse position
    const orbs = document.querySelectorAll('.animate-float, .animate-float-delayed, .animate-float-slow')
    orbs.forEach((orb, index) => {
      const speed = 0.02 + (index * 0.01)
      const x = (e.clientX - window.innerWidth / 2) * speed
      const y = (e.clientY - window.innerHeight / 2) * speed
      orb.style.transform += ` translate(${x}px, ${y}px)`
    })
  }
  
  // Enhanced performance with throttling
  let ticking = false
  const throttledScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }
  
  let mouseThrottle = false
  const throttledMouseMove = (e) => {
    if (!mouseThrottle) {
      requestAnimationFrame(() => {
        handleMouseMove(e)
        mouseThrottle = false
      })
      mouseThrottle = true
    }
  }
  
  window.addEventListener('scroll', throttledScroll, { passive: true })
  window.addEventListener('mousemove', throttledMouseMove, { passive: true })
  
  // Intersection Observer for enhanced performance
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view')
      }
    })
  }, observerOptions)
  
  // Observe all animatable elements
  const animatedElements = document.querySelectorAll('[data-aos]')
  animatedElements.forEach(el => observer.observe(el))
  
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScroll)
    window.removeEventListener('mousemove', throttledMouseMove)
    observer.disconnect()
  })
})
</script>

<style scoped>
/* Global enhancements */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Enhanced Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-25px) translateX(10px) rotate(1deg) scale(1.05);
  }
  50% {
    transform: translateY(-15px) translateX(-5px) rotate(-0.5deg) scale(1.1);
  }
  75% {
    transform: translateY(-35px) translateX(-10px) rotate(0.5deg) scale(1.05);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-20px) translateX(-15px) rotate(-1deg) scale(1.08);
  }
  50% {
    transform: translateY(-40px) translateX(5px) rotate(0.8deg) scale(1.15);
  }
  75% {
    transform: translateY(-10px) translateX(12px) rotate(-0.3deg) scale(1.03);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  33% {
    transform: translateY(-45px) translateX(15px) scale(1.2);
  }
  66% {
    transform: translateY(-20px) translateX(-20px) scale(0.9);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(20px) translateX(-10px) rotate(-1deg);
  }
  50% {
    transform: translateY(-10px) translateX(15px) rotate(1deg);
  }
  75% {
    transform: translateY(30px) translateX(5px) rotate(-0.5deg);
  }
}

@keyframes bounce-slow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 10s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradient-shift 8s ease infinite;
}

.animate-glow {
  animation: glow 4s ease-in-out infinite;
}

/* Enhanced Typewriter effect */
.typewriter {
  position: relative;
  display: inline-block;
}

.typewriter::after {
  content: '|';
  position: absolute;
  right: -15px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 45% {
    opacity: 1;
    transform: scaleY(1);
  }
  46%, 54% {
    opacity: 0;
    transform: scaleY(0.1);
  }
  55%, 100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

/* Enhanced Tilt animation with 3D effects */
@keyframes tilt {
  0%, 50%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  12.5% {
    transform: perspective(1000px) rotateX(1deg) rotateY(1deg) rotateZ(0.5deg);
  }
  25% {
    transform: perspective(1000px) rotateX(0deg) rotateY(2deg) rotateZ(1deg);
  }
  37.5% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(1deg) rotateZ(0deg);
  }
  62.5% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) rotateZ(-0.5deg);
  }
  75% {
    transform: perspective(1000px) rotateX(0deg) rotateY(-2deg) rotateZ(-1deg);
  }
  87.5% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(-1deg) rotateZ(0deg);
  }
}

.animate-tilt {
  animation: tilt 20s infinite ease-in-out;
}

/* Glass morphism effects */
.glass {
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.125);
}

/* Hover effects for enhanced interactivity */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

/* Smooth scrolling enhancement */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}
</style>