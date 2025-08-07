<template>
  <section class="section-padding bg-white dark:bg-gray-800">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="400"
          >
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form below and I'll get back to you as soon as possible. Please provide as much detail as you can about your project.
            </p>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="form-label">Name *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="form-input"
                    :class="{ 'border-red-500': errors.name }"
                    placeholder="Your full name"
                  />
                  <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="form-label">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input"
                    :class="{ 'border-red-500': errors.email }"
                    placeholder="your.email@example.com"
                  />
                  <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="form-label">Phone</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label for="company" class="form-label">Company</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="form-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label for="subject" class="form-label">Subject *</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="form-input"
                  :class="{ 'border-red-500': errors.subject }"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </select>
                <p v-if="errors.subject" class="form-error">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label for="budget" class="form-label">Budget Range</label>
                <select
                  id="budget"
                  v-model="form.budget"
                  class="form-input"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="form-label">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="form-input resize-none"
                  :class="{ 'border-red-500': errors.message }"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
                <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
              </div>
              
              <div class="flex items-start space-x-3">
                <input
                  id="terms"
                  v-model="form.agreedToTerms"
                  type="checkbox"
                  required
                  class="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label for="terms" class="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the privacy policy and terms of service *
                </label>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
          
          <div 
            class="lg:pl-8"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
          >
            <div class="relative">
              <img 
                src="/images/illustrations/contact-hero.svg"
                alt="Contact illustration"
                class="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div class="mt-8 space-y-6">
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4">
                  What happens next?
                </h3>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      I'll review your message and project details
                    </p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      We'll schedule a call to discuss your requirements
                    </p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      I'll provide a detailed proposal and timeline
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                <h3 class="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Professional Tip
                </h3>
                <p class="text-sm text-primary-700 dark:text-primary-300">
                  The more details you provide about your project, the better I can understand your needs and provide an accurate quote.
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
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  budget: '',
  message: '',
  agreedToTerms: false
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')
  
  let isValid = true
  
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }
  
  if (!form.subject) {
    errors.subject = 'Please select a subject'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
    isValid = false
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.')
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2;
}

.form-input {
  @apply w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors;
}

.form-error {
  @apply text-red-500 text-sm mt-1;
}
</style>