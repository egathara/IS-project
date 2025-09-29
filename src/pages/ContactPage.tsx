import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');

  useEffect(() => {
    // If a product is specified in the URL, scroll to the contact form
    if (productParam) {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [productParam]);

  return (
    <>
      <Helmet>
        <title>Contact Us | Ignite Metals</title>
        <meta name="description" content="Contact Ignite Metals for quotes, custom orders, or general inquiries. Our team is ready to assist with all your metal product needs." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg">
              Have questions or need a quote? Our team is ready to help with all your metal product needs.
              {productParam && (
                <span className="block mt-4 text-primary font-medium">
                  Inquiry about: {productParam}
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-secondary/10 rounded-lg shadow-md p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm">
                        <a
                          href="mailto:info@ignitemetals.com"
                          className="hover:text-primary transition-colors"
                        >
                          info@ignitemetals.com
                        </a>
                      </p>
                      <p className="text-sm">
                        <a
                          href="mailto:sales@ignitemetals.com"
                          className="hover:text-primary transition-colors"
                        >
                          sales@ignitemetals.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm">
                        <a
                          href="tel:+15551234567"
                          className="hover:text-primary transition-colors"
                        >
                          (254) 123-4567
                        </a>
                      </p>
                      <p className="text-sm">Mon-Fri: 8am - 5pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-sm">
                        123 Metal Works Way<br />
                        Industrial Park, NYERI 12345<br />
                        KENYA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-sm">Monday - Friday: 8am - 5pm</p>
                      <p className="text-sm">Saturday: 9am - 1pm</p>
                      <p className="text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white dark:bg-secondary/10 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Ignite Metals Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63493.12345678901!2d36.9312345!3d-0.4167890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1823abcdef123456%3A0xdeadbeefcafebabe!2sNyeri%20Town%2C%20Kenya!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;