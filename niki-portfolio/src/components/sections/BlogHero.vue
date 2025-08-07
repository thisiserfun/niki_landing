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
          Blog & Articles
        </h1>
        
        <p 
          class="text-xl text-gray-600 dark:text-gray-400 mb-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Sharing my thoughts, experiences, and learnings about web development, technology trends, and best practices.
        </p>
        
        <div class="mb-12" v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1 }" :delay="500">
          <img 
            src="/images/illustrations/blog-hero.svg" 
            alt="Blog illustration" 
            class="w-96 h-96 mx-auto object-contain"
          />
        </div>
        
        <div 
          class="flex justify-center space-x-8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ blogPosts.length }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">Articles</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              15k+
            </div>
            <div class="text-gray-600 dark:text-gray-400">Readers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ uniqueCategories.length }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">Topics</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { blogPosts } from '../../data'

const uniqueCategories = computed(() => {
  const categories = new Set()
  blogPosts.forEach(post => categories.add(post.category))
  return Array.from(categories)
})
</script>