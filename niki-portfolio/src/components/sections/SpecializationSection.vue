<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="container-custom section-padding relative z-10">
      <div 
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="800"
      >
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Specialization & Research Focus
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Advancing the frontiers of AI in autonomous systems and distributed computing
        </p>
      </div>

      <!-- Main Specialization Areas -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(spec, index) in specializations" 
          :key="index"
          class="group relative"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="index * 100"
          :duration="800"
        >
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
            <!-- Icon -->
            <div class="w-16 h-16 mb-6 relative">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative w-full h-full flex items-center justify-center">
                <component :is="spec.icon" class="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>

            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
              {{ spec.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ spec.description }}
            </p>

            <!-- Key Points -->
            <ul class="space-y-2">
              <li 
                v-for="(point, idx) in spec.keyPoints" 
                :key="idx"
                class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Current Research -->
      <div 
        class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-1"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="400"
        :duration="800"
      >
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12">
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <div class="flex-1 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                <span class="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
                <span class="text-indigo-600 dark:text-indigo-400 font-medium text-sm">Currently Working On</span>
              </div>
              
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Task Offloading in Autonomous Vehicles
              </h3>
              
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Developing innovative algorithms for efficient computational task distribution in autonomous vehicle networks, 
                optimizing resource utilization and reducing latency in real-time decision-making processes.
              </p>

              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  Edge Computing
                </span>
                <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  V2X Communication
                </span>
                <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  Machine Learning
                </span>
                <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  Optimization
                </span>
              </div>
            </div>

            <div class="w-full lg:w-96 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <svg class="w-48 h-48 text-indigo-600/20 dark:text-indigo-400/20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23,11H20.56L17,4.44A2,2,0,0,0,15.28,3.5H8.72A2,2,0,0,0,7,4.44L3.44,11H1a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H2.18A3,3,0,0,0,5,19h.18a3,3,0,0,0,5.64,0h2.36a3,3,0,0,0,5.64,0H19a3,3,0,0,0,2.82-2H23a1,1,0,0,0,1-1V12A1,1,0,0,0,23,11ZM8.72,5.5h6.56l2.86,5.5H5.86ZM5,17a1,1,0,1,1,1-1A1,1,0,0,1,5,17Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,8,17Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,16,17Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,19,17Zm3-2H21.18a3,3,0,0,0-2.36,0H13.18a3,3,0,0,0-2.36,0H5.18A3,3,0,0,0,2,13H22Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const BrainIcon = {
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' 
      })
    ])
  }
}

const CarIcon = {
  render() {
    return h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 
        d: 'M23,11H20.56L17,4.44A2,2,0,0,0,15.28,3.5H8.72A2,2,0,0,0,7,4.44L3.44,11H1a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H2.18A3,3,0,0,0,5,19h.18a3,3,0,0,0,5.64,0h2.36a3,3,0,0,0,5.64,0H19a3,3,0,0,0,2.82-2H23a1,1,0,0,0,1-1V12A1,1,0,0,0,23,11ZM8.72,5.5h6.56l2.86,5.5H5.86ZM5,17a1,1,0,1,1,1-1A1,1,0,0,1,5,17Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,8,17Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,16,17Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,19,17Zm3-2H21.18a3,3,0,0,0-2.36,0H13.18a3,3,0,0,0-2.36,0H5.18A3,3,0,0,0,2,13H22Z'
      })
    ])
  }
}

const CloudIcon = {
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' 
      })
    ])
  }
}

const specializations = [
  {
    icon: BrainIcon,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems that learn and adapt to complex environments",
    keyPoints: [
      "Deep Learning & Neural Networks",
      "Reinforcement Learning",
      "Computer Vision Applications",
      "Natural Language Processing"
    ]
  },
  {
    icon: CarIcon,
    title: "Autonomous Vehicles",
    description: "Creating smart transportation systems with real-time decision capabilities",
    keyPoints: [
      "Sensor Fusion & Perception",
      "Path Planning Algorithms",
      "Real-time Control Systems",
      "V2V & V2X Communication"
    ]
  },
  {
    icon: CloudIcon,
    title: "Task Offloading",
    description: "Optimizing computational resource distribution in distributed systems",
    keyPoints: [
      "Edge Computing Integration",
      "Load Balancing Algorithms",
      "Latency Optimization",
      "Resource Scheduling"
    ]
  }
]
</script>

<style scoped>
</style>