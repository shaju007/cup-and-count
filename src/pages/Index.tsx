import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

import heroCoffee from "@/assets/hero-coffee.jpg";
import productBeans from "@/assets/product-beans.jpg";
import productPourover from "@/assets/product-pourover.jpg";
import productLatte from "@/assets/product-latte.jpg";
import productColdbrew from "@/assets/product-coldbrew.jpg";

const products = [
  {
    id: 1,
    name: "House Blend Whole Beans",
    description: "Rich, smooth, and perfectly balanced. Our signature roast.",
    price: 18.99,
    image: productBeans,
  },
  {
    id: 2,
    name: "Pour-Over Kit",
    description: "Everything you need for the perfect hand-brewed cup at home.",
    price: 34.99,
    image: productPourover,
  },
  {
    id: 3,
    name: "Classic Latte Mix",
    description: "Creamy, velvety latte — just add hot water and enjoy.",
    price: 14.99,
    image: productLatte,
  },
  {
    id: 4,
    name: "Cold Brew Concentrate",
    description: "Smooth, bold cold brew ready to pour over ice.",
    price: 12.99,
    image: productColdbrew,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <Coffee className="h-7 w-7 text-accent" />
            <span className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-foreground">
              Brew & Bean
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-background px-6 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCoffee}
            alt="Freshly roasted coffee beans with a cup of latte art"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Freshly Roasted, Lovingly Brewed
          </h1>
          <p className="mb-8 max-w-xl text-lg text-primary-foreground/80">
            From our roastery to your cup — ethically sourced beans crafted with
            care for coffee lovers who appreciate every sip.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold"
            onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Favorites
          </h2>
          <p className="text-muted-foreground">
            Hand-picked selections our customers love most.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/60 transition-shadow hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-1 font-[var(--font-heading)] text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Story
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
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Come Say Hello
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
          Visit us at 42 Roaster Lane, or drop us a line — we'd love to hear from
          you.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
          Get in Touch
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-accent" />
            © {new Date().getFullYear()} Brew & Bean. All rights reserved.
          </span>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
