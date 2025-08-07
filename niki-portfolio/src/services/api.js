// API service structure for future backend integration

class ApiService {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: this.headers,
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Personal info endpoints
  async getPersonalInfo() {
    return this.request('/personal')
  }

  async updatePersonalInfo(data) {
    return this.request('/personal', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // Projects endpoints
  async getProjects(category = 'all') {
    const params = category !== 'all' ? `?category=${category}` : ''
    return this.request(`/projects${params}`)
  }

  async getProject(id) {
    return this.request(`/projects/${id}`)
  }

  async createProject(data) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateProject(id, data) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteProject(id) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    })
  }

  // Skills endpoints
  async getSkills() {
    return this.request('/skills')
  }

  async updateSkills(data) {
    return this.request('/skills', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // Experience & Education endpoints
  async getExperience() {
    return this.request('/experience')
  }

  async getEducation() {
    return this.request('/education')
  }

  // Testimonials endpoints
  async getTestimonials() {
    return this.request('/testimonials')
  }

  async createTestimonial(data) {
    return this.request('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Blog endpoints
  async getBlogPosts() {
    return this.request('/blog')
  }

  async getBlogPost(id) {
    return this.request(`/blog/${id}`)
  }

  async createBlogPost(data) {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Contact form endpoint
  async submitContactForm(data) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Analytics endpoints (for future use)
  async getAnalytics(period = '30d') {
    return this.request(`/analytics?period=${period}`)
  }

  // File upload endpoint
  async uploadFile(file, type = 'image') {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)

    return this.request('/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // Remove Content-Type header for FormData
    })
  }
}

export default new ApiService()