"use client"
import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" px-5 flex h-14 items-center justify-center">
          <div className="mr-4 hidden md:flex">
            {/* <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-normal">Kartik Sharma</span>
            </Link> */}
            <nav className="flex items-center space-x-6 text-sm font-medium">
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
              <Link href="https://www.youtube.com/@beingkartik4506" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
              <Link href="https://github.com/kartik126" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/kartik-sharma-9b0640172/" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:sharmakartik9921@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://x.com/beingatx" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">X (Twitter)</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-light tracking-tighter sm:text-4xl">Kartik Sharma 👋🏻</h1>
            <p className="max-w-[700px] text-base text-muted-foreground sm:text-sm">
              Fullstack Developer crafting elegant, efficient, and user-friendly web applications.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button>Get in touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline">View my work</Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className=" py-12 py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-light leading-[1.1] sm:text-2xl md:text-4xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-sm sm:leading-6">
              Dynamic Full Stack Developer with proven expertise at <a className="text-primary" href="https://nesoi.ai" target="_blank" rel="noreferrer">Nesoi.ai</a>, <a className="text-primary" href="https://estatedekho.com/" target="_blank" rel="noreferrer">Estatedekho.com</a>, <a className="text-primary" href="https://weazy.in/" target="_blank" rel="noreferrer">Weazy.in</a> and many other startups, specializing in MERN stack and Python. At Nesoi.ai I successfully led the creation of an Interactive AI video platform, enhancing e-learning experiences. Adept at mentoring teams and implementing CI/CD pipelines, ensuring high-quality code and seamless deployments. Strong in real-time applications and collaborative problem-solving.
            </p>
          </div>
        </section>
        <section id="skills" className=" py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-light leading-[1.1] sm:text-2xl md:text-4xl">Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-sm sm:leading-6 mb-8">
              Here are some of the technologies I work with:
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">React</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">Next.js</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">TypeScript</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">Node.js</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">Express</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">MongoDB</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">PostgreSQL</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">Tailwind CSS</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-light">Python</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className=" py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-light leading-[1.1] sm:text-2xl md:text-4xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-sm sm:leading-6 mb-8">
              Some of my recent work:
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/ed.png"
                      alt="Project 1"
                      className="h-full w-full object-cover  filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-normal">Real Estate Platform (Estatedekho.com)</h3>
                  <p className="mt-2 text-muted-foreground">
                    A real estate platform with a wide range of properties for sale and rent.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link href="https://estatedekho.com/" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        View Demo
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/iv.png"
                      alt="Project 2"
                      className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-normal">AI Interactive Video (Nesoi.ai)</h3>
                  <p className="mt-2 text-muted-foreground">
                    A platform where you can turn your boring lectures into AI interactive videos.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link href="https://www.loom.com/share/55547ccc0fcb48919382bd6886110107?sid=3d7449d6-6004-4031-9019-dedcc9cc8bbd" target="_blank" rel="noreferrer">
                      <Button onClick={() => window.open('https://www.loom.com/share/55547ccc0fcb48919382bd6886110107?sid=3d7449d6-6004-4031-9019-dedcc9cc8bbd', '_blank')} variant="outline" size="sm">
                        View Demo
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src="/cv.png"
                      alt="Project 2"
                      className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-normal">AI Interactive Video Platform Dashboard (Nesoi.ai)</h3>
                  <p className="mt-2 text-muted-foreground">
                    A platform to manage the AI Interactive Videos (Creating, Editing, Deleting, etc).
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link href="https://www.loom.com/share/55547ccc0fcb48919382bd6886110107?sid=3d7449d6-6004-4031-9019-dedcc9cc8bbd" target="_blank" rel="noreferrer">
                      <Button onClick={() => window.open('https://www.loom.com/share/55547ccc0fcb48919382bd6886110107?sid=3d7449d6-6004-4031-9019-dedcc9cc8bbd', '_blank')} variant="outline" size="sm">
                        View Demo
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-light leading-[1.1] sm:text-2xl md:text-4xl">Personal Achievements</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-sm sm:leading-6">
              Beyond coding, I'm passionate about sports and physical fitness
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
              <Card className="h-fit">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden mb-4">
                    <img
                      src="/59F1D93D-1686-4B2B-9E66-C495778513EA.JPG"
                      alt="State Level Powerlifting Medal"
                      className="w-[150px] h-[150px] rounded-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-normal mb-2">Delhi State Gold Medalist</h3>
                  <p className="text-muted-foreground text-sm">
                    Secured Gold Medal in Delhi State Powerlifting Competition.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-fit">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden mb-4">
                    <img
                      src="/IMG_4622.jpg"
                      alt="National Qualification Achievement"
                      className="w-[150px] h-[150px] rounded-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-normal mb-2">Uttarakhand State Silver Medalist</h3>
                  <p className="text-muted-foreground text-sm">
                    Qualified for National level competition in Powerlifting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className=" py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-light leading-[1.1] sm:text-2xl md:text-4xl">Get in Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-sm sm:leading-6 mb-8">
              Interested in working together? Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="mailto:sharmakartik9921@gmail.com">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/kartik-sharma-9b0640172/" target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="px-5 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Kartik Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/kartik126" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kartik-sharma-9b0640172/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:sharmakartik9921@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
