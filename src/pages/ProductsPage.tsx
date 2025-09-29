import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products, filterProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Get filter values from URL params
  const categoryParam = searchParams.get('category') || 'all';
  const materialParam = searchParams.get('material') || 'all';
  const searchParam = searchParams.get('search') || '';

  useEffect(() => {
    // Apply filters based on URL parameters
    const filtered = filterProducts(products, categoryParam, materialParam, searchParam);
    setFilteredProducts(filtered);
  }, [categoryParam, materialParam, searchParam]);

  const handleFilterChange = (category: string, material: string, search: string) => {
    // Update URL params
    const params: Record<string, string> = {};
    if (category !== 'all') params.category = category;
    if (material !== 'all') params.material = material;
    if (search) params.search = search;
    
    setSearchParams(params);
  };

  return (
    <>
      <Helmet>
        <title>Products | Ignite Metals</title>
        <meta name="description" content="Browse our extensive collection of high-quality metal products including steel, aluminum, copper, and more." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-secondary/10">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Products</h1>
          <p className="text-lg">
            Browse our extensive collection of high-quality metal products for every application.
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <ProductFilter 
            onFilterChange={handleFilterChange}
            initialCategory={categoryParam}
            initialMaterial={materialParam}
            initialSearch={searchParam}
          />
          
          {/* Results */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filters or search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;