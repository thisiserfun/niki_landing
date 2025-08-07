<template>
  <section class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(post, index) in blogPosts" 
          :key="post.id"
          class="card group overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200 + (index * 150)"
          @click="openPost(post)"
        >
          <div class="aspect-video overflow-hidden">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                {{ post.category }}
              </span>
              <time class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(post.date) }}
              </time>
            </div>
            
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
              {{ post.title }}
            </h2>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Niki"
                  alt="Niki Mahdian"
                  class="w-8 h-8 rounded-full"
                />
                <div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ post.author }}
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    {{ post.readTime }}
                  </div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="tag in post.tags.slice(0, 2)" 
                  :key="tag"
                  class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                >
                  {{ tag }}
                </span>
                <span 
                  v-if="post.tags.length > 2"
                  class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-full"
                >
                  +{{ post.tags.length - 2 }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <div class="text-center mt-16">
        <div class="inline-flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
          <div class="w-16 h-16 flex items-center justify-center">
            <svg class="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              More Articles Coming Soon
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              I'm constantly writing about new technologies and sharing insights. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Modal for blog post content (simplified) -->
  <div 
    v-if="selectedPost"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    @click="closePost"
  >
    <div 
      class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <div>
            <span class="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
              {{ selectedPost.category }}
            </span>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
              {{ selectedPost.title }}
            </h1>
            <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{{ selectedPost.author }}</span>
              <span>•</span>
              <time>{{ formatDate(selectedPost.date) }}</time>
              <span>•</span>
              <span>{{ selectedPost.readTime }}</span>
            </div>
          </div>
          <button 
            @click="closePost"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <img 
          :src="selectedPost.image" 
          :alt="selectedPost.title"
          class="w-full h-64 object-cover rounded-xl mb-8"
        />
        
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {{ selectedPost.excerpt }}
          </p>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
            <div class="w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-16 h-16 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Full Article Coming Soon
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              This is a preview of the blog functionality. In the real implementation, this would display the full article content from your CMS or markdown files.
            </p>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in selectedPost.tags" 
              :key="tag"
              class="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-sm rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { blogPosts } from '../../data'

const selectedPost = ref(null)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const openPost = (post) => {
  selectedPost.value = post
  document.body.style.overflow = 'hidden'
}

const closePost = () => {
  selectedPost.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>