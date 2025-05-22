"use client"

import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";



export default function Blogs() {
    return (
        <main className="max-w-2xl lg:max-w-5xl mt-16 sm:mt-32 mx-auto">
            <div className="max-w-2xl mx-5 sm:mx-0">
                <h1 className="text-5xl font-bold tracking-tighter">
                    Showcasing What I Build (and Break)
                </h1>
                <p className="mt-6 font-bold text-base text-zinc-600">
                    Most of my work has been for fast-moving startups, helping turn ideas into real products. Alongside, I've built a few personal projects that push my creativity and skills. Here are the highlights.
                </p>
            </div>
            <div className="my-20 mx-5 sm:mx-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group cursor-pointer hover:bg-gray-50 transition-all duration-300 bg-white rounded-xl shadow-md p-5 flex flex-col items-start text-center border border-gray-100"
                        >
                            <img
                                src={project.logo}
                                alt={project.name + ' logo'}
                                className="w-12 h-12 mb-4 rounded-full"
                            />
                            <h3 className="text-left text-md font-semibold mb-2">{project.name}</h3>
                            <p className="text-left text-gray-600 text-sm">{project.description}</p>
                            <div className="mt-10 flex items-center gap-5">
                                {project.link && (
                                    <a
                                        className="flex items-center gap-1 text-left text-gray-600 text-sm transition group-hover:text-purple-500"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Website
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        className="flex items-center gap-1 text-left text-gray-600 text-sm transition group-hover:text-purple-500"
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Demo
                                    </a>
                                )}
                                {project.appLink && (
                                    <a
                                        className="flex items-center gap-1 text-left text-gray-600 text-sm transition group-hover:text-purple-500"
                                        href={project.appLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        App
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}