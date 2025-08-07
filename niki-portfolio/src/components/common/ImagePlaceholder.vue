<template>
  <div class="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
    <img 
      v-if="src && !imageError"
      :src="src" 
      :alt="alt"
      :class="imageClass"
      @error="handleImageError"
      @load="imageLoaded = true"
    />
    
    <!-- Placeholder when no image or error -->
    <div 
      v-else
      :class="[placeholderClass, 'flex items-center justify-center']"
    >
      <div class="text-center">
        <!-- Icon -->
        <div class="w-16 h-16 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <!-- Text -->
        <div class="text-gray-500 dark:text-gray-400">
          <p class="text-sm font-medium mb-1">{{ placeholderTitle }}</p>
          <p class="text-xs">{{ placeholderSubtitle }}</p>
        </div>
      </div>
    </div>
    
    <!-- Loading overlay -->
    <div 
      v-if="src && !imageLoaded && !imageError"
      class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Image'
  },
  imageClass: {
    type: String,
    default: 'w-full h-full object-cover'
  },
  placeholderClass: {
    type: String,
    default: 'w-full h-64'
  },
  placeholderTitle: {
    type: String,
    default: 'Project Image'
  },
  placeholderSubtitle: {
    type: String,
    default: 'Coming soon'
  }
})

const imageError = ref(false)
const imageLoaded = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>