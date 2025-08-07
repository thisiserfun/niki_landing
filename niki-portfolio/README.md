# Niki Mahdian Portfolio

A modern, responsive, and highly animated portfolio website built with Vue.js 3, showcasing the work and skills of Niki Mahdian, a Full Stack Developer.

## 🚀 Features

### Core Features
- ✨ **Modern Design**: Clean, professional, and visually impressive interface
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark/Light Theme**: Toggle between themes with smooth transitions
- 🎭 **Rich Animations**: Entrance effects, hover interactions, and scroll-triggered animations
- 🖼️ **Illustrations**: Integrated with beautiful illustrations from Storyset
- ⚡ **High Performance**: Built with Vite for fast development and build times

### Pages & Sections
1. **Landing Page**
   - Animated hero section with call-to-action buttons
   - About preview with smooth scroll effects
   - Skills showcase with progress indicators
   - Featured projects gallery
   - Testimonials carousel
   - Contact call-to-action section

2. **About Page**
   - Personal information and contact details
   - Animated timeline for education and experience
   - Personal statistics and achievements
   - Fun facts and motivations

3. **Skills Page**
   - Categorized skills with animated progress bars
   - Technology stack overview
   - Tools and frameworks showcase

4. **Portfolio Page**
   - Project filtering by category and technology
   - Detailed project cards with hover effects
   - Live demo and GitHub links
   - Project features and technologies used

5. **Contact Page**
   - Contact form with validation
   - Multiple contact methods
   - Social media links
   - Availability status and timezone info

6. **Blog Page**
   - Article grid with category filtering
   - Reading time estimates
   - Author information and tags
   - Modal preview for articles

## 🛠️ Tech Stack

### Frontend
- **Vue 3**: Composition API for modern reactive development
- **Vite**: Fast build tool and development server
- **Vue Router**: Client-side routing for SPA navigation
- **Pinia**: State management for Vue 3

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Animations**: Keyframe animations and transitions
- **@vueuse/motion**: Vue 3 animation library
- **GSAP Ready**: Prepared for advanced animations

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🏗️ Project Structure

```
niki-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # Reusable Vue components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Page sections
│   │   └── ui/           # UI components
│   ├── data/             # Dummy data for development
│   ├── router/           # Vue Router configuration
│   ├── services/         # API services (ready for backend)
│   ├── store/            # Pinia stores
│   ├── utils/            # Utility functions and helpers
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   ├── main.js           # Application entry point
│   └── style.css         # Global styles and Tailwind imports
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd niki-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the data in `src/data/index.js` to reflect your personal information:
- Personal details (name, title, bio, contact info)
- Projects and portfolio items
- Skills and expertise levels
- Education and work experience
- Testimonials and reviews

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind configuration
- **Animations**: Customize animations in `src/style.css` and component files

### Images and Illustrations
- Replace placeholder images with your own
- Update illustration URLs from Storyset or use your own graphics
- Add your profile picture and project screenshots

## 🔗 Backend Integration

The project is structured to easily integrate with a backend API:

1. **API Service**: Pre-built API service in `src/services/api.js`
2. **Environment Variables**: Configure API endpoints in `.env` files
3. **State Management**: Pinia stores ready for API data integration
4. **Form Handling**: Contact form prepared for backend submission

### API Endpoints Structure
```
GET  /api/personal          # Get personal information
GET  /api/projects          # Get all projects
GET  /api/projects/:id      # Get specific project
GET  /api/skills            # Get skills data
GET  /api/experience        # Get work experience
GET  /api/education         # Get education data
GET  /api/testimonials      # Get testimonials
GET  /api/blog              # Get blog posts
POST /api/contact           # Submit contact form
POST /api/upload            # Upload files
```

## 📱 Progressive Web App (PWA)

To convert this into a PWA:

1. Install Vite PWA plugin:
   ```bash
   npm install -D vite-plugin-pwa
   ```

2. Configure in `vite.config.js`
3. Add service worker for offline functionality
4. Configure manifest.json for app-like experience

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your repository to Vercel
2. Configure build settings (auto-detected for Vite)
3. Deploy with automatic builds on commits

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure server for SPA routing

## 🎯 Future Enhancements

- [ ] **CMS Integration**: Connect with headless CMS (Strapi, Contentful)
- [ ] **Blog System**: Full blog functionality with markdown support
- [ ] **Admin Panel**: Content management interface
- [ ] **Analytics**: Google Analytics or custom analytics integration
- [ ] **SEO Optimization**: Meta tags, Open Graph, structured data
- [ ] **Performance**: Image optimization, lazy loading, code splitting
- [ ] **Accessibility**: Enhanced ARIA labels and keyboard navigation
- [ ] **Multi-language**: i18n support for multiple languages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Storyset**: Beautiful illustrations used throughout the site
- **Tailwind CSS**: For the excellent utility-first CSS framework
- **Vue.js Team**: For the amazing framework and ecosystem
- **Heroicons**: For the beautiful icon set
- **Unsplash**: For high-quality stock photos (if used)

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- **Email**: niki.mahdian@email.com
- **LinkedIn**: [Niki Mahdian](https://linkedin.com/in/nikimahdian)
- **GitHub**: [@nikimahdian](https://github.com/nikimahdian)

---

**Made with ❤️ by Niki Mahdian**