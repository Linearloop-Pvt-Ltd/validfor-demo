'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('https://api.google.com/v1/home')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-[var(--base-background)]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--base-border)] bg-[var(--base-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--base-background)]/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center">
              <Image
                src="/validfor-logo.png"
                alt="Validfor"
                width={127}
                height={22}
                className="h-6 w-auto"
                priority
              />
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#product"
                onClick={() => {
                  console.warn('Product');
                }}
                className="text-sm font-medium text-[var(--base-foreground)] hover:text-[var(--base-primary)] transition-colors"
              >
                Product
              </a>
              <a
                href="#company"
                onClick={() => {
                  console.info('Company');
                }}
                className="text-sm font-medium text-[var(--base-foreground)] hover:text-[var(--base-primary)] transition-colors"
              >
                Company
              </a>
              <a
                href="#blog"
                onClick={() => {
                  console.error('Blog');
                }}
                className="text-sm font-medium text-[var(--base-foreground)] hover:text-[var(--base-primary)] transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={() => {
                  console.error('Contact');
                }}
                className="text-sm font-medium text-[var(--base-foreground)] hover:text-[var(--base-primary)] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <button
            onClick={() => {
              console.log('Get a Demo');
            }}
            className="rounded-md border border-[var(--base-foreground)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--base-foreground)] hover:bg-[var(--base-surface)] transition-colors"
          >
            Get a Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--base-background)] py-24 sm:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--base-surface)]/80 border border-[var(--base-border)] px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--base-primary)] animate-pulse"></span>
              <p className="text-sm font-semibold text-[var(--base-foreground)]">
                Validfor Demo is available now!
              </p>
              <a
                href="#"
                className="text-sm font-medium text-[var(--base-primary)] hover:underline"
              >
                Discover →
              </a>
            </div>
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="text-[var(--base-primary)]">The First</span>{' '}
              <span className="text-[var(--base-secondary)]">Agentic</span>
              <br />
              <span className="text-[var(--base-foreground)]">
                Digital Validation Platform
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              The Validfor delivers the first agentic AI-powered digital
              validation platform that transform how life science companies
              handle compliance.
            </p>
            <div className="flex gap-4 justify-center">
              <div className="relative rounded-lg p-[2px] bg-gradient-to-r from-[var(--base-primary)] to-[var(--base-accent)]">
                <button className="relative rounded-lg bg-white px-6 py-3 text-base font-medium text-[var(--base-background)] hover:opacity-90 transition-opacity w-full">
                  Get a Demo
                </button>
              </div>
              <button className="rounded-lg border border-[var(--base-foreground)] bg-transparent px-6 py-3 text-base font-medium text-[var(--base-foreground)] hover:bg-[var(--base-surface)] transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--base-background)]">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--base-primary)] mb-2">
                90%
              </div>
              <div className="text-gray-400">Get work done faster.</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--base-primary)] mb-2">
                75%
              </div>
              <div className="text-gray-400">Cut costs instantly.</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--base-primary)] mb-2">
                80%
              </div>
              <div className="text-gray-400">Save key resources.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="product" className="py-24 bg-[var(--base-surface)]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--base-foreground)]">
              Digitalize Compliance activities
            </h2>
            <p className="text-lg text-gray-400">
              Validfor provides a next-generation digital validation platform
              that leverages agentic AI and automation to revolutionize how life
              science companies approach validation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Gold standard',
                desc: 'GAMP5, ISO9001 & ISO27001 aligned validation',
              },
              {
                title: 'Interactive visualization',
                desc: 'Dynamically reveal detailed insights with a modern UI',
              },
              {
                title: 'Fully configurable',
                desc: 'Workflows and field labels, fully QMS-aligned!',
              },
              {
                title: 'Traceability',
                desc: 'Stay precise with fully connected, traceable data',
              },
              {
                title: 'CSA ready',
                desc: 'CSA built-in, as others are still decoding!',
              },
              {
                title: 'Eco-Friendly',
                desc: 'Go fully green and stay 100% eco-friendly',
              },
              {
                title: 'Data integrity',
                desc: 'Trust our secure platform built for data integrity',
              },
              {
                title: 'Rapid implementation',
                desc: 'Pre-validated. It is ready to go-live in just 4 weeks!',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[var(--base-background)] p-6 rounded-lg border border-[var(--base-border)] hover:border-[var(--base-primary)] transition-colors"
              >
                <h3 className="font-semibold mb-2 text-[var(--base-foreground)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[var(--base-background)]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--base-foreground)]">
              Regulation-Ready Product Suite
            </h2>
            <p className="text-lg text-gray-400">
              Change with confidence, comply with ease.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Change Management',
                desc: 'Offers a centralized platform that streamlines the entire change lifecycle, improving traceability, collaboration and regulatory compliance.',
                feature: 'Seamless Integration',
              },
              {
                title: 'Deviation Management',
                desc: 'Provides a centralized platform to manage and resolve validation deviations, streamlining workflows, tracking actions, and ensuring regulatory compliance.',
                feature: 'Structured Action Tracking',
              },
              {
                title: 'Test Management',
                desc: 'Provides an efficient platform for managing the full testing process from creation to execution and reporting while ensuring CSA compliance.',
                feature: 'CSA Compliant',
              },
              {
                title: 'Periodic Review Management',
                desc: 'Eliminate manual scheduling with automated review generation, timely owner reminders, and a centralized dashboard for effortless tracking.',
                feature: 'Automated Process',
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-[var(--base-surface)] p-8 rounded-lg border border-[var(--base-border)] hover:border-[var(--base-primary)] transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3 text-[var(--base-foreground)]">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--base-primary)]">
                    {product.feature}
                  </span>
                  <button className="text-sm font-medium text-[var(--base-primary)] hover:underline">
                    Explore More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--base-surface)]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--base-foreground)]">
              Trusted. Verified. Validfor.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Melis T.',
                role: 'CEO, Validfor',
                rating: '4.9/5',
                title: 'Game Changer for Validation',
                desc: 'Validfor completely transformed how we handle system validations. The platform is intuitive, automates repetitive tasks, and gives our team more time to focus on critical work.',
              },
              {
                name: 'Eren K.',
                role: 'CEO, Validfor',
                rating: '4.9/5',
                title: 'Reliable & Efficient',
                desc: 'Since adopting Validfor, our validation workflows are faster and more reliable. Tracking and reporting compliance has never been easier.',
              },
              {
                name: 'Ömer A.',
                role: 'CEO, Validfor',
                rating: '4.9/5',
                title: 'Simplifying Compliance',
                desc: 'Keeping up with regulations used to be stressful. Validfor makes it straightforward and effortless, with clear dashboards and reminders that never let anything slip through.',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[var(--base-background)] p-6 rounded-lg border border-[var(--base-border)] hover:border-[var(--base-primary)] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold text-[var(--base-foreground)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[var(--base-primary)]">
                    {testimonial.rating}
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-[var(--base-foreground)]">
                  {testimonial.title}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[var(--base-background)]">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--base-foreground)]">
              Get in Touch with our team
            </h2>
            <p className="text-lg text-gray-400">
              Whether you're looking for support, information, or partnership,
              our teams are ready to assist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                city: 'Chicago',
                address: '3834 N Shefield Ave Apt 609 IL 60613',
              },
              {
                city: 'Tallinn',
                address:
                  'Harju maakond, Kesklinna linnaosa, Viru väljak 2, 3. korrus Tallinn 10111 Estonia',
              },
              {
                city: 'London',
                address: 'Flat 11, Fyfe House, Chadwell Lane N8 7RZ',
              },
            ].map((location, idx) => (
              <div
                key={idx}
                className="bg-[var(--base-surface)] p-6 rounded-lg border border-[var(--base-border)] hover:border-[var(--base-primary)] transition-colors"
              >
                <h3 className="font-semibold mb-2 text-[var(--base-foreground)]">
                  {location.city}
                </h3>
                <p className="text-sm text-gray-400">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--base-background)] border-t border-[var(--base-border)] text-[var(--base-foreground)] py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Validfor AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Digital Validation Platform
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Change Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Deviation Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Test Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">AI Policies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    EU AI Act Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    Responsible Use of AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--base-primary)] transition-colors"
                  >
                    LLM Usage Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--base-border)] pt-8 text-center text-sm text-gray-400">
            © 2025 Validfor | All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
