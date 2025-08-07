import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store'

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(MotionPlugin)

app.mount('#app')