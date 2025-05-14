"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Nav() {
    const pathname = usePathname()
    const showProfileImage = pathname === "/projects" || pathname === "/blogs"
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="mt-6 w-full max-w-2xl lg:max-w-5xl mx-auto">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                    {showProfileImage && (
                        <Link href="/">
                            <img src="/profile.jpeg" alt="Kartik Sharma" className="w-10 h-10 rounded-full" />
                        </Link>
                    )}
                </div>
                <div className="flex-1 flex justify-center">
                    <nav className="border border-gray-200 bg-white rounded-full shadow-[0_4px_24px_0_rgba(0,0,0,0.07)] px-8 py-2 flex space-x-8">
                        <Link
                            href="/projects"
                            className={`text-sm font-semibold transition ${pathname === "/projects"
                                ? "text-purple-500"
                                : "text-gray-900 hover:text-gray-700"
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blogs"
                            className={`text-sm font-semibold transition ${pathname === "/blogs"
                                ? "text-purple-500"
                                : "text-gray-900 hover:text-gray-700"
                                }`}
                        >
                            Blog
                        </Link>
                        <div
                            className={`cursor-pointer text-sm font-semibold transition text-gray-900 hover:text-gray-700`}
                            onClick={() => window.open("./resume/KartikSharmaResume - a.pdf", "_blank")}
                        >
                            Resume
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden items-center justify-between px-2">
                <div className="w-10 h-10 flex items-center justify-center ml-5">
                    {showProfileImage && (
                        <Link href="/">
                            <img src="/profile.jpeg" alt="Kartik Sharma" className="w-10 h-10 rounded-full" />
                        </Link>
                    )}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col items-center space-y-4">
                    <Link
                        href="/projects"
                        className={`text-base font-semibold transition ${pathname === "/projects"
                            ? "text-purple-500"
                            : "text-gray-900 hover:text-gray-700"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blogs"
                        className={`text-base font-semibold transition ${pathname === "/blogs"
                            ? "text-purple-500"
                            : "text-gray-900 hover:text-gray-700"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <div
                        className={`text-base font-semibold transition ${pathname === "/projects"
                            ? "text-purple-500"
                            : "text-gray-900 hover:text-gray-700"
                            }`}
                        onClick={() => window.open("./resume/KartikSharmaResume - a.pdf", "_blank")}
                    >
                        Resume
                    </div>
                </div>
            )}
        </div>
    )
}