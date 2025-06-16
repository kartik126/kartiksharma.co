import ragChatbot from './content/rag-chatbot.json'
import imageSimilarity from './content/image-similarity.json'

export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    content: string
    tags?: string[]
}

export const blogPosts: BlogPost[] = [
    ragChatbot,
    imageSimilarity
] 