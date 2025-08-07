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
          My Journey
        </h2>
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Education and professional experience that shaped my career
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Education -->
          <div>
            <h3 
              class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="600"
            >
              <svg class="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              <div 
                v-for="(item, index) in education" 
                :key="item.id"
                class="relative pb-8 last:pb-0"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visible="{ opacity: 1, x: 0 }"
                :delay="800 + (index * 200)"
              >
                <div class="absolute left-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                
                <div class="ml-12 card p-6">
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ item.degree }}
                    </h4>
                    <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {{ item.period }}
                    </span>
                  </div>
                  
                  <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {{ item.institution }}
                  </p>
                  
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    {{ item.description }}
                  </p>
                  
                  <div class="text-sm text-gray-500 dark:text-gray-500">
                    GPA: {{ item.gpa }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Experience -->
          <div>
            <h3 
              class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="600"
            >
              <svg class="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2z" />
              </svg>
              Experience
            </h3>
            
            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              <div 
                v-for="(item, index) in experience" 
                :key="item.id"
                class="relative pb-8 last:pb-0"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :visible="{ opacity: 1, x: 0 }"
                :delay="800 + (index * 200)"
              >
                <div class="absolute left-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                
                <div class="ml-12 card p-6">
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ item.position }}
                    </h4>
                    <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {{ item.period }}
                    </span>
                  </div>
                  
                  <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {{ item.company }}
                  </p>
                  
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ item.description }}
                  </p>
                  
                  <div class="space-y-2">
                    <h5 class="font-medium text-gray-900 dark:text-white">Key Achievements:</h5>
                    <ul class="space-y-1">
                      <li 
                        v-for="achievement in item.achievements" 
                        :key="achievement"
                        class="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education, experience } from '../../data'
</script>