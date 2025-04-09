import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { H1, H2, P, Small } from "@/components/typography"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-normal">Kartik Sharma</span>
            </Link>
            <nav className="flex items-center space-x-6 text-xs font-light">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-normal">Kartik Sharma</span>
                </Link>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/kartiksharma" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/kartiksharma" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:contact@kartiksharma.dev">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-20 sm:py-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <H1>Kartik Sharma</H1>
            <P className="max-w-[700px]">
              Fullstack Developer crafting elegant, efficient, and user-friendly web applications.
            </P>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button size="sm">Get in touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline" size="sm">
                  View my work
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="container py-10 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <H2>About Me</H2>
            <P className="max-w-[85%]">
              I'm a passionate fullstack developer with expertise in building modern web applications. I enjoy solving
              complex problems and creating intuitive user experiences. With a strong foundation in both frontend and
              backend technologies, I bring ideas to life through clean, efficient code.
            </P>
          </div>
        </section>
        <section id="skills" className="container py-10 md:py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <H2>Skills</H2>
            <P className="max-w-[85%] mb-6">Here are some of the technologies I work with:</P>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">React</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">Next.js</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">TypeScript</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">Node.js</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">Express</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">MongoDB</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">PostgreSQL</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span className="font-light text-sm">Tailwind CSS</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="container py-10 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <H2>Projects</H2>
            <P className="max-w-[85%] mb-6">Some of my recent work:</P>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Project 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-light">E-commerce Platform</h3>
                  <P className="mt-1">
                    A full-featured online store with product management, cart functionality, and payment processing.
                  </P>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm">
                      <Small>View Demo</Small>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Small>Source Code</Small>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Project 2"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-light">Task Management App</h3>
                  <P className="mt-1">
                    A collaborative task management tool with real-time updates, user roles, and analytics.
                  </P>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm">
                      <Small>View Demo</Small>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Small>Source Code</Small>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="container py-10 md:py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <H2>Get in Touch</H2>
            <P className="max-w-[85%] mb-6">Interested in working together? Feel free to reach out!</P>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="mailto:contact@kartiksharma.dev">
                <Button size="sm">
                  <Mail className="mr-2 h-3 w-3" />
                  <Small>Email Me</Small>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/kartiksharma" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-3 w-3" />
                  <Small>LinkedIn</Small>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-4 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <Small className="text-center md:text-left">
            © {new Date().getFullYear()} Kartik Sharma. All rights reserved.
          </Small>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/kartiksharma" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-3 w-3" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/kartiksharma" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-3 w-3" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@kartiksharma.dev">
              <Button variant="ghost" size="icon">
                <Mail className="h-3 w-3" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
