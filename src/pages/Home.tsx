import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Hammer, Shield, Truck, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Ignite Metals | Premium Metal Products & Solutions</title>
        <meta name="description" content="Ignite Metals offers high-quality metal products and custom metalwork solutions for industrial and commercial applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="container relative z-10 slide-up">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Premium Metal Solutions for Every Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              From structural steel to precision components, Ignite Metals delivers exceptional quality and customized solutions to meet your exact specifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-text transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary/5">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Ignite Metals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-secondary/10 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our metal products meet or exceed industry standards for quality and durability.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-secondary/10 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our expert fabricators can create custom metal solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-secondary/10 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Efficient logistics and nationwide distribution ensure your order arrives on time.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-secondary/10 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Certified</h3>
              <p className="text-gray-600 dark:text-gray-300">
                ISO 9001 certified with rigorous quality control at every stage of production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title mb-0">Featured Products</h2>
            <Link 
              to="/products" 
              className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg)' }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Metal Solution?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Our team of experts can help bring your project to life with precision engineering and premium materials.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-white/90 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;