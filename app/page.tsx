import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Code, Database, Globe, Layers, MessageSquare, Users } from "lucide-react"
import BackgroundAnimation from "@/components/background-animation"
import CodeDisplay from "@/components/code-display"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Connect Software</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <BackgroundAnimation />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex" variant="outline">
                    Innovative Software Solutions
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connecting businesses with powerful software solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create custom software solutions that help businesses transform, scale, and stay ahead of the
                    competition.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start your project <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Book a consultation
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CodeDisplay />
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the page content remains the same */}
        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by industry leaders</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our solutions power some of the world's most innovative companies
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src="/placeholder-logo.svg"
                      width={120}
                      height={60}
                      alt={`Client logo ${i + 1}`}
                      className="grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We offer a comprehensive range of software development services
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Custom Software Development",
                    description: "Tailored solutions designed to meet your specific business needs and challenges.",
                    icon: <Code className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Web Application Development",
                    description: "Responsive, scalable web applications built with modern frameworks and technologies.",
                    icon: <Globe className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Mobile App Development",
                    description: "Native and cross-platform mobile applications for iOS and Android devices.",
                    icon: <Layers className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "Cloud Solutions",
                    description: "Secure, scalable cloud infrastructure and migration services.",
                    icon: <Database className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "AI & Machine Learning",
                    description:
                      "Intelligent solutions that leverage the power of artificial intelligence and machine learning.",
                    icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  },
                  {
                    title: "DevOps & Continuous Integration",
                    description: "Streamlined development processes with automated testing and deployment.",
                    icon: <Users className="h-10 w-10 text-primary" />,
                  },
                ].map((service, i) => (
                  <Card key={i} className="flex flex-col items-center text-center">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Case Studies</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See how we've helped our clients achieve their business goals
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "E-commerce Platform Redesign",
                    description:
                      "Increased conversion rates by 45% through UX improvements and performance optimization.",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Healthcare Management System",
                    description:
                      "Streamlined patient care with an integrated solution that reduced administrative time by 30%.",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Fintech Mobile Application",
                    description:
                      "Developed a secure, user-friendly mobile banking app with 100,000+ downloads in the first month.",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                ].map((study, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={study.title}
                      className="aspect-video object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{study.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-1">
                        View case study <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <Button variant="outline" size="lg">
                View all case studies
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Our Team</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet our experts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our talented team of professionals is dedicated to delivering exceptional results
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Alex Johnson",
                    role: "CEO & Founder",
                    image: "/placeholder.svg?height=400&width=400",
                  },
                  {
                    name: "Sarah Chen",
                    role: "CTO",
                    image: "/placeholder.svg?height=400&width=400",
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Lead Developer",
                    image: "/placeholder.svg?height=400&width=400",
                  },
                  {
                    name: "Emily Patel",
                    role: "UX/UI Designer",
                    image: "/placeholder.svg?height=400&width=400",
                  },
                ].map((member, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      width={400}
                      height={400}
                      alt={member.name}
                      className="aspect-square object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center gap-4">
                      {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                        <Button key={social} variant="ghost" size="icon" className="h-8 w-8">
                          <span className="sr-only">{social}</span>
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your business?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Let's discuss how our software solutions can help you achieve your goals
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Schedule a consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Connect Software</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building innovative software solutions for forward-thinking businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                {["About", "Services", "Case Studies", "Team", "Careers"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "Documentation", "Help Center", "FAQ", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">123 Connect Avenue, San Francisco, CA 94107</li>
                <li>
                  <Link
                    href="mailto:info@connectsoftware.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@connectsoftware.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+1-555-123-4567"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +1 (555) 123-4567
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Connect Software. All rights reserved.
              </p>
              <div className="flex gap-4">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
