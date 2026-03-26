/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Layout, 
  Palette, 
  Type, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: 'Branding' | 'Social Media' | 'Posters';
  image: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly Branding",
    category: "Branding",
    image: "https://picsum.photos/seed/brand1/800/600",
    description: "A complete visual identity for a sustainable startup."
  },
  {
    id: 2,
    title: "Summer Sale Campaign",
    category: "Social Media",
    image: "https://picsum.photos/seed/social1/800/600",
    description: "Engaging Instagram and Facebook visuals for a fashion brand."
  },
  {
    id: 3,
    title: "Typography Exploration",
    category: "Posters",
    image: "https://picsum.photos/seed/poster1/800/600",
    description: "Experimental poster design focusing on bold letterforms."
  },
  {
    id: 4,
    title: "Tech Conference Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/brand2/800/600",
    description: "Logo and brand guidelines for a modern tech event."
  },
  {
    id: 5,
    title: "Food Delivery Ads",
    category: "Social Media",
    image: "https://picsum.photos/seed/social2/800/600",
    description: "High-conversion social media ads for a local delivery service."
  },
  {
    id: 6,
    title: "Minimalist Movie Poster",
    category: "Posters",
    image: "https://picsum.photos/seed/poster2/800/600",
    description: "A conceptual poster design for an indie film."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display tracking-tighter text-white">
          SANTOSH SHRESTHA<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-display tracking-widest text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute top-32 left-10 md:left-20 z-20">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl md:text-2xl text-[#D4AF37] uppercase tracking-tighter"
        >
          Graphic Designer
        </motion.span>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          {/* PORTFOLIO Text with Wavy Blue Middle Stripe (White-Blue-White) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ WebkitTextStroke: "1.5px white" } as any}
            className="text-[18vw] md:text-[22vw] font-display leading-none tracking-tighter text-black relative z-10"
          >
            PORTFOLIO
            {/* 40% Height Jagged Pointed Blue Middle Stripe with Paper Texture */}
            <div 
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                color: "transparent",
                backgroundColor: "#0055FF",
                clipPath: "polygon(0% 30%, 5% 20%, 10% 40%, 15% 25%, 20% 45%, 25% 30%, 30% 40%, 35% 20%, 40% 45%, 45% 30%, 50% 40%, 55% 20%, 60% 45%, 65% 30%, 70% 40%, 75% 20%, 80% 45%, 85% 30%, 90% 40%, 95% 20%, 100% 30%, 100% 70%, 95% 80%, 90% 60%, 85% 70%, 80% 55%, 75% 70%, 70% 60%, 65% 80%, 60% 55%, 55% 70%, 50% 60%, 45% 80%, 40% 55%, 35% 70%, 30% 60%, 25% 80%, 20% 55%, 15% 70%, 10% 60%, 5% 80%, 0% 70%)",
                filter: "contrast(120%) brightness(100%)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.07'/%3E%3C/svg%3E")`,
                backgroundBlendMode: "multiply",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextStroke: "1.5px white"
              } as any}
            >
              PORTFOLIO
            </div>
          </motion.h1>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 md:right-20 text-right">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
          className="font-display text-4xl md:text-6xl text-white"
        >
          2026
        </motion.span>
      </div>

      <div className="mt-12 text-center px-6 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a href="#portfolio" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,51,255,0.3)]">
            View Portfolio
          </a>
          <a href="#contact" className="border border-white/20 hover:border-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const software = [
    { name: 'Ps', color: 'bg-[#001E36]', text: 'text-[#31A8FF]', label: 'Photoshop' },
    { name: 'Ai', color: 'bg-[#330000]', text: 'text-white', label: 'Illustrator' },
    { name: 'Canva', color: 'bg-[#00C4CC]', text: 'text-white', label: 'Canva' },
  ];

  return (
    <section id="about" className="relative py-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 relative">
        {/* Left Column */}
        <div className="lg:w-1/3 space-y-16">
          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">ABOUT ME</h2>
            <p className="text-sm leading-relaxed text-gray-800 font-medium">
              I'm a passionate Graphic Designer dedicated to creating clean, modern, and visually impactful designs that communicate ideas clearly and effectively. I specialize in branding and social media design, focusing on turning concepts into meaningful visuals that connect with people. I continuously improve my skills and stay updated with current design trends, aiming to blend creativity with simplicity to deliver designs that are both engaging and memorable.
            </p>
          </section>

          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">EDUCATION</h2>
            <div className="space-y-1">
              <p className="text-sm font-bold">2025 – Present Model Institute of Technology</p>
              <p className="text-sm text-gray-600 ml-4">Kamaladi, Kathmandu</p>
            </div>
          </section>

          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">LANGUAGES</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold">English</p>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <div>
                <p className="font-bold">Nepali</p>
                <p className="text-gray-500">Native Language</p>
              </div>
            </div>
          </section>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-blue-600 self-stretch mx-4"></div>

        {/* Middle Column */}
        <div className="lg:w-1/3 space-y-16">
          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">CONTACT</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold">9764641307</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold">santoshstha2004@gmail.com</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">SKILLS</h2>
            <p className="text-sm leading-relaxed text-gray-800 font-medium">
              Skilled graphic designer proficient in Photoshop, Illustrator, and Canva, creating modern, clean designs for branding and social media. Focused on creativity, clear communication, and staying updated with design trends.
            </p>
          </section>

          <section>
            <h2 className="text-5xl font-display text-blue-600 mb-6">SOFTWARE</h2>
            <div className="flex gap-4">
              {software.map((item) => (
                <div key={item.label} className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-xs font-bold ${item.text} shadow-md border border-white/10`}>
                  {item.name}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Character */}
        <div className="lg:w-1/3 flex justify-center items-center relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
             <div className="w-full h-full bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          </div>
          <div className="relative w-full max-w-[36rem]">
            <img 
              src="https://image2url.com/r2/default/images/1774453512841-69cfb9a6-2111-45dc-9fc9-f4b12ebc0033.png" 
              alt="Santosh Shrestha Illustration" 
              className="w-full h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Reflection effect */}
            <div className="w-full h-24 bg-gradient-to-t from-white to-transparent opacity-50 transform scale-y-[-1] blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Services = () => {
  const services = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Marketing & Social Media",
      desc: "Engaging posts, ads, and content visuals tailored for maximum audience engagement."
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Branding & Visual Identity",
      desc: "Logos, brand guidelines, and identity systems that tell your unique brand story."
    },
    {
      icon: <Type className="w-10 h-10" />,
      title: "Typography & Poster Design",
      desc: "Creative and impactful text-based visuals that command attention and clarity."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-display text-blue-600 mb-16 text-center">SERVICES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-gray-50 rounded-3xl border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-display mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Branding' | 'Social Media' | 'Posters'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-6xl font-display text-white mb-4">PORTFOLIO</h2>
            <p className="text-white/50">Selected works and creative explorations.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['All', 'Branding', 'Social Media', 'Posters'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-3xl overflow-hidden bg-white/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-display text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-6">{project.description}</p>
                  <button className="flex items-center gap-2 text-white font-bold group/btn">
                    View Project <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-7xl font-display mb-8 leading-none">LET'S WORK TOGETHER</h2>
            <p className="text-xl text-white/80 mb-12 max-w-md">
              Have a project in mind? I'm currently available for freelance work and collaborations.
            </p>

            <div className="space-y-6">
              <a href="tel:9764641307" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl font-semibold">9764641307</span>
              </a>
              <a href="mailto:santoshstha2004@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-semibold">santoshstha2004@gmail.com</span>
              </a>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 text-black">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                  <input type="text" className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                  <input type="email" className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-gray-100 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/40 text-sm">
          © 2026 Santosh Shrestha. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
