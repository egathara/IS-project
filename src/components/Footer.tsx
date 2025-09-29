import { Link } from 'react-router-dom';
import { Flame, Instagram, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const productLinks = [
    { to: '/products?category=steel', label: 'Steel' },
    { to: '/products?category=aluminum', label: 'Aluminum' },
    { to: '/products?category=copper', label: 'Copper' },
    { to: '/products?category=custom', label: 'Custom Solutions' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Flame className="h-6 w-6 text-accent" />
              <span>Ignite Metals</span>
            </Link>
            <p className="mb-4 text-sm">
              Premier provider of quality metal products and solutions for industrial and commercial applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/20 hover:bg-primary hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest products and industry news.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-6 border-t border-secondary/20">
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a href="mailto:info@ignitemetals.com" className="hover:text-primary transition-colors">
              info@ignitemetals.com
            </a>
          </div>
          <div className="text-sm">
            <p>123 Metal Works Way, Industrial Park, NYERI 12345</p>
          </div>
          <div className="text-sm">
            <p>Phone: (254) 123-4567</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-secondary/20 text-center text-sm">
          <p>© {currentYear} Ignite Metals. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;