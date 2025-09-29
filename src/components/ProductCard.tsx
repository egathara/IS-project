import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">{product.material.charAt(0).toUpperCase() + product.material.slice(1)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-accent">
            {product.price}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;