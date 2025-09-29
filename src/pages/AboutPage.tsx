import { Helmet } from 'react-helmet-async';
import { Shield, Users, Target, Flame } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ignite Metals</title>
        <meta name="description" content="Learn about Ignite Metals, our history, mission, values, and the dedicated team behind our premium metal products." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg">
              Founded in 2010, Ignite Metals has grown from a small local supplier to a national leader in premium metal products and custom fabrication services. We combine traditional craftsmanship with cutting-edge technology to deliver exceptional quality and precision.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Target className="mr-2 text-primary" size={28} />
                Our Mission
              </h2>
              <p className="mb-4">
                At Ignite Metals, our mission is to provide premium quality metal products that meet the highest industry standards while delivering exceptional customer service. We strive to be the most trusted partner for all metal fabrication needs across industries.
              </p>
              <p>
                We're committed to sustainable practices that minimize environmental impact while maximizing resource efficiency throughout our production processes.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Flame className="mr-2 text-accent" size={28} />
                Our Vision
              </h2>
              <p className="mb-4">
                We envision being the premier provider of innovative metal solutions that enable our customers to excel in their industries. Through continuous improvement and technological advancement, we aim to set new standards for quality and service.
              </p>
              <p>
                Our goal is to expand our reach globally while maintaining the personal touch and attention to detail that has defined our company since its founding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p>
                We never compromise on quality. Every product we create undergoes rigorous testing to ensure it meets our exacting standards.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>
                We conduct our business with honesty and transparency, building trust with our customers, suppliers, and employees.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We continuously seek better ways to design, produce, and deliver our products, embracing new technologies and methods.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary/10 p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                <Flame size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p>
                We're committed to environmentally responsible practices that reduce waste and conserve resources across our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="CEO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Reynolds</h3>
                <p className="text-sm text-primary mb-4">Chief Executive Officer</p>
                <p className="text-sm">
                  With over 25 years in the metals industry, Michael brings extensive experience and a passion for innovation to Ignite Metals.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg"
                alt="COO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Martinez</h3>
                <p className="text-sm text-primary mb-4">Chief Operations Officer</p>
                <p className="text-sm">
                  Sarah oversees all production operations, ensuring efficient processes while maintaining the highest quality standards.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                alt="CTO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Chen</h3>
                <p className="text-sm text-primary mb-4">Chief Technology Officer</p>
                <p className="text-sm">
                  David leads our R&D efforts, exploring cutting-edge technologies and solutions for the most challenging metal applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Facilities */}
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">State-of-the-Art Facilities</h2>
              <p className="mb-4">
                Our 50,000 square foot manufacturing facility is equipped with the latest CNC machinery, precision cutting equipment, and advanced welding stations. This technology enables us to deliver exceptional accuracy and consistency across all our products.
              </p>
              <p className="mb-4">
                We've invested in specialized equipment for working with a wide range of metals, from structural steel to precision aluminum and copper components. Our facility is ISO 9001 certified, ensuring we maintain the highest standards throughout our production process.
              </p>
              <p>
                Located strategically with excellent logistics connections, we're able to efficiently serve customers across the nation with rapid turnaround times.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
                alt="Ignite Metals manufacturing facility"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;