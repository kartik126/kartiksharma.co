"use client"
import Link from "next/link"
import { blogPosts } from "./blogData"

export default function Blogs() {
    return (
        <main className="max-w-2xl lg:max-w-5xl mt-16 sm:mt-32 mx-auto">
            <div className="max-w-2xl mx-5 sm:mx-0">
                <h1 className="text-5xl font-bold tracking-tighter">
                    Web development, design, and startups.
                </h1>
                <p className="mt-6 text-base text-zinc-600">
                    Thoughts on software, technology, and building products.
                </p>
                
                <div className="mt-12 space-y-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="group">
                            <Link href={`/blogs/${post.slug}`} className="block">
                                <div className="shadow-md p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                        <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-md font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                                        {post.description}
                                    </p>
                                    {post.tags && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}