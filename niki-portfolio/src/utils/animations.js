import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useAnimations = () => {
  const fadeInUp = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out" 
      }
    )
  }

  const fadeInLeft = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out" 
      }
    )
  }

  const fadeInRight = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        x: 50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out" 
      }
    )
  }

  const scaleIn = (element, delay = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        delay,
        ease: "back.out(1.7)" 
      }
    )
  }

  const staggerFadeInUp = (elements, staggerDelay = 0.1) => {
    gsap.fromTo(elements, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: staggerDelay,
        ease: "power2.out" 
      }
    )
  }

  const progressBar = (element, width = '100%') => {
    gsap.fromTo(element, 
      { 
        width: '0%' 
      },
      { 
        width, 
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  const parallax = (element, yPercent = -50) => {
    gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }

  const typewriter = (element, text, speed = 50) => {
    let i = 0
    const timer = setInterval(() => {
      element.textContent += text.charAt(i)
      i++
      if (i > text.length - 1) {
        clearInterval(timer)
      }
    }, speed)
  }

  const morphingBlob = (element) => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    
    tl.to(element, {
      duration: 2,
      scale: 1.1,
      rotation: 45,
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 2,
      scale: 0.9,
      rotation: -45,
      ease: "power2.inOut"
    })
  }

  const floatingElements = (elements) => {
    elements.forEach((element, index) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      })
    })
  }

  const cardHover = (card) => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(card, {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out"
    })

    card.addEventListener('mouseenter', () => tl.play())
    card.addEventListener('mouseleave', () => tl.reverse())
  }

  const scrollReveal = (elements, options = {}) => {
    const defaults = {
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
    
    const config = { ...defaults, ...options }
    
    elements.forEach((element, index) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            ...config
          }
        }
      )
    })
  }

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerFadeInUp,
    progressBar,
    parallax,
    typewriter,
    morphingBlob,
    floatingElements,
    cardHover,
    scrollReveal
  }
}