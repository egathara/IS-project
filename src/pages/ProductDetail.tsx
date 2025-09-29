import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Package, Ruler, Scale as Scales, Award, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ImageCarousel from '../components/ImageCarousel';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  // If product not found
  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} | Ignite Metals`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumbs */}
      <section className="pt-32 pb-6 bg-secondary/5">
        <div className="container">
          <nav className="flex items-center text-sm">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="font-medium">{product.name}</span>
          </nav>
        </div>
      </section>
      
      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ImageCarousel images={product.images} alt={product.name} />
            </div>
            
            {/* Product Information */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg mb-6">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Package size={18} className="text-primary" />
                  <span className="text-sm">
                    <strong>Material:</strong> {product.material.charAt(0).toUpperCase() + product.material.slice(1)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Ruler size={18} className="text-primary" />
                  <span className="text-sm">
                    <strong>Dimensions:</strong> Various
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Scales size={18} className="text-primary" />
                  <span className="text-sm">
                    <strong>Weight:</strong> {product.weight}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  <span className="text-sm">
                    <strong>Finish:</strong> {product.finish}
                  </span>
                </div>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-md mb-8">
                <h3 className="font-bold mb-2">Price</h3>
                <p className="text-accent text-xl font-medium">{product.price}</p>
              </div>
              
              <a 
                href="#inquiry"
                className="btn btn-primary w-full md:w-auto mb-4"
              >
                Request a Quote
              </a>
            </div>
          </div>
          
          {/* Detailed Specifications */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">Applications</h2>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-secondary/20 pb-2">Specifications</h2>
              <div className="space-y-2">
                <p><strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p><strong>Material:</strong> {product.material.charAt(0).toUpperCase() + product.material.slice(1)}</p>
                <p><strong>Dimensions:</strong> {product.dimensions}</p>
                <p><strong>Finish:</strong> {product.finish}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
              </div>
            </div>
          </div>
          
          {/* Inquiry Section */}
          <div id="inquiry" className="mt-16 p-8 bg-secondary/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <p className="mb-6">
              Interested in this product? Fill out our contact form for a detailed quote and to discuss your specific requirements.
            </p>
            <Link 
              to={`/contact?product=${product.name}`} 
              className="btn btn-primary inline-flex items-center"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;