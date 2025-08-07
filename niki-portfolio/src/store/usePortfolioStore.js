import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { personalInfo, projects, skills, testimonials, education, experience } from '../data'

export const usePortfolioStore = defineStore('portfolio', () => {
  const personal = ref(personalInfo)
  const projectsList = ref(projects)
  const skillsList = ref(skills)
  const testimonialsList = ref(testimonials)
  const educationList = ref(education)
  const experienceList = ref(experience)
  const selectedCategory = ref('all')
  const isLoading = ref(false)
  
  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
      return projectsList.value
    }
    return projectsList.value.filter(project => 
      project.category === selectedCategory.value || 
      project.technologies.includes(selectedCategory.value)
    )
  })
  
  const projectCategories = computed(() => {
    const categories = new Set(['all'])
    projectsList.value.forEach(project => {
      categories.add(project.category)
      project.technologies.forEach(tech => categories.add(tech))
    })
    return Array.from(categories)
  })
  
  const setSelectedCategory = (category) => {
    selectedCategory.value = category
  }
  
  const getProjectById = (id) => {
    return projectsList.value.find(project => project.id === id)
  }
  
  return {
    personal,
    projectsList,
    skillsList,
    testimonialsList,
    education: educationList,
    experience: experienceList,
    selectedCategory,
    isLoading,
    filteredProjects,
    projectCategories,
    setSelectedCategory,
    getProjectById
  }
})