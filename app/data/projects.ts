export interface Project {
    id: string
    title: string
    description: string
    thumbnail: string
    category: 'web' | 'mobile'
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
    year: number
}

export const projects: Project[] = [
    {
        id: 'warrior-gym',
        title: 'Warrior Gym',
        description: 'Modern fitness center website with custom animations and smooth scrolling experience.',
        thumbnail: '/images/projects/warrior-gym.jpg',
        category: 'web',
        technologies: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion'],
        liveUrl: 'https://warriorgym.com',
        githubUrl: 'https://github.com/emrekardas/warrior-gym',
        featured: true,
        year: 2024,
    },
    {
        id: 'marna-coffee',
        title: 'Marna Coffee',
        description: 'Elegant coffee shop website with immersive visual storytelling and product showcase.',
        thumbnail: '/images/projects/marna-coffee.jpg',
        category: 'web',
        technologies: ['Next.js', 'TypeScript', 'CSS Animations'],
        liveUrl: 'https://marnacoffee.com',
        featured: true,
        year: 2024,
    },
    {
        id: 'cowboy-burger',
        title: 'Cowboy Burger Saloon',
        description: 'Western-themed restaurant website with animated menu and reservation system.',
        thumbnail: '/images/projects/cowboy-burger.jpg',
        category: 'web',
        technologies: ['Next.js', 'GSAP', 'TailwindCSS'],
        liveUrl: 'https://cowboyburger.com',
        featured: true,
        year: 2024,
    },
    {
        id: 'fitness-tracker',
        title: 'FitTrack Pro',
        description: 'iOS fitness tracking app with workout planning and progress analytics.',
        thumbnail: '/images/projects/fitness-tracker.jpg',
        category: 'mobile',
        technologies: ['Swift', 'SwiftUI', 'HealthKit', 'CoreData'],
        featured: false,
        year: 2024,
    },
    {
        id: 'nutrition-app',
        title: 'NutriScan',
        description: 'AI-powered nutrition analysis app that scans food and provides detailed nutritional information.',
        thumbnail: '/images/projects/nutriscan.jpg',
        category: 'mobile',
        technologies: ['React Native', 'TensorFlow', 'Node.js'],
        featured: true,
        year: 2024,
    },
    {
        id: 'portfolio-template',
        title: 'Developer Portfolio',
        description: 'Customizable portfolio template for developers with dark mode and animations.',
        thumbnail: '/images/projects/portfolio.jpg',
        category: 'web',
        technologies: ['Next.js', 'Lenis', 'Framer Motion'],
        githubUrl: 'https://github.com/emrekardas/portfolio-template',
        featured: false,
        year: 2024,
    },
]
