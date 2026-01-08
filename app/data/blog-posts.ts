export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    content?: string
    thumbnail?: string
    publishedAt: string
    readTime: number
    tags: string[]
    featured: boolean
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'building-smooth-scroll-with-lenis',
        title: 'Building Butter-Smooth Scrolling with Lenis',
        excerpt: 'Learn how to implement silky smooth scrolling in your Next.js applications using the Lenis library.',
        publishedAt: '2024-12-20',
        readTime: 5,
        tags: ['Next.js', 'Animation', 'UX'],
        featured: true,
    },
    {
        id: '2',
        slug: 'modern-css-techniques',
        title: 'Modern CSS Techniques for 2024',
        excerpt: 'Exploring the latest CSS features like container queries, cascade layers, and the :has() selector.',
        publishedAt: '2024-12-15',
        readTime: 8,
        tags: ['CSS', 'Frontend', 'Web Development'],
        featured: true,
    },
    {
        id: '3',
        slug: 'swiftui-vs-react-native',
        title: 'SwiftUI vs React Native: A Developer\'s Perspective',
        excerpt: 'Comparing the two popular mobile development frameworks from a practical standpoint.',
        publishedAt: '2024-12-10',
        readTime: 10,
        tags: ['Mobile', 'SwiftUI', 'React Native'],
        featured: false,
    },
    {
        id: '4',
        slug: 'designing-for-dark-mode',
        title: 'Designing for Dark Mode: Best Practices',
        excerpt: 'Tips and techniques for creating beautiful dark mode interfaces that don\'t strain the eyes.',
        publishedAt: '2024-12-05',
        readTime: 6,
        tags: ['Design', 'UI/UX', 'Accessibility'],
        featured: true,
    },
]
