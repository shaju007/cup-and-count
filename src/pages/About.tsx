import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import heroCoffee from "@/assets/hero-coffee.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Coffee className="h-7 w-7 text-accent" />
            <span className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Brew & Bean
            </span>
          </Link>
          <ul className="flex items-center gap-8">
            <li>
              <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#shop" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm font-medium text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCoffee}
            alt="Coffee beans and latte art"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            Our Story
          </h1>
          <p className="max-w-xl text-lg text-primary-foreground/80">
            A passion for coffee, a love for community.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How It All Began
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Brew & Bean started with a simple dream: to share the warmth of a
              perfectly brewed cup of coffee with our neighborhood. What began as
              a tiny corner shop has grown into a community of coffee lovers who
              believe every bean tells a story.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We source our beans directly from family farms across Ethiopia,
              Colombia, and Guatemala — roasting them in small batches right here
              in our shop to bring out every unique note and flavor.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={heroCoffee}
              alt="Coffee beans and latte art"
              className="h-72 w-full object-cover md:h-96"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Coffee className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Ethically Sourced</h3>
            <p className="text-sm text-muted-foreground">
              Direct trade relationships with family farms around the world.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Coffee className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Small Batch Roasted</h3>
            <p className="text-sm text-muted-foreground">
              Every batch is roasted with precision to unlock the best flavors.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Coffee className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Community First</h3>
            <p className="text-sm text-muted-foreground">
              More than a shop — we're a gathering place for coffee lovers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight">Visit Us</h2>
        <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
          Come experience the warmth of Brew & Bean in person at 42 Roaster Lane.
        </p>
        <Link to="/#contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
            Get in Touch
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-accent" />
            © {new Date().getFullYear()} Brew & Bean. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link to="/#shop" className="transition-colors hover:text-foreground">Shop</Link>
            <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link to="/#contact" className="transition-colors hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
