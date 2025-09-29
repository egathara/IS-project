import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { categories, materials } from '../data/products';

interface ProductFilterProps {
  onFilterChange: (category: string, material: string, search: string) => void;
  initialCategory?: string;
  initialMaterial?: string;
  initialSearch?: string;
}

const ProductFilter = ({
  onFilterChange,
  initialCategory = 'all',
  initialMaterial = 'all',
  initialSearch = '',
}: ProductFilterProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState(initialMaterial);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  useEffect(() => {
    // Update filters when URL params change
    setCategory(initialCategory);
    setMaterial(initialMaterial);
    setSearchQuery(initialSearch);
  }, [initialCategory, initialMaterial, initialSearch]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    onFilterChange(newCategory, material, searchQuery);
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMaterial = e.target.value;
    setMaterial(newMaterial);
    onFilterChange(category, newMaterial, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearchQuery(newSearch);
    onFilterChange(category, material, newSearch);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(category, material, searchQuery);
  };

  return (
    <div className="bg-secondary/10 p-4 md:p-6 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label htmlFor="category-filter" className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            id="category-filter"
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-2 rounded-md border border-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label htmlFor="material-filter" className="block text-sm font-medium mb-2">
            Material
          </label>
          <select
            id="material-filter"
            value={material}
            onChange={handleMaterialChange}
            className="w-full p-2 rounded-md border border-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          >
            {materials.map((mat) => (
              <option key={mat.id} value={mat.id}>
                {mat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div>
          <label htmlFor="search-products" className="block text-sm font-medium mb-2">
            Search
          </label>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              id="search-products"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 rounded-md border border-secondary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;