export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  material: string;
  price: string;
  dimensions: string;
  finish: string;
  weight: string;
  features: string[];
  applications: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Precision Steel Beams',
    description: 'High-strength structural steel beams with precision engineering for maximum durability and load-bearing capacity.',
    category: 'structural',
    material: 'steel',
    price: 'Custom Quote',
    dimensions: 'Various sizes available (W8x10 to W44x335)',
    finish: 'Hot-dipped galvanized',
    weight: '10-335 pounds per foot',
    features: [
      'High tensile strength',
      'ASTM A992/A572 certified',
      'Excellent load-bearing capacity',
      'Corrosion-resistant coating option',
      'Custom length cuts available'
    ],
    applications: [
      'Commercial construction',
      'Industrial buildings',
      'Bridges and infrastructure',
      'Heavy equipment manufacturing'
    ],
    images: [
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg'
    ]
  },
  {
    id: '2',
    name: 'Aluminum Sheet Metal',
    description: 'Lightweight, corrosion-resistant aluminum sheets ideal for aerospace, automotive, and architectural applications.',
    category: 'sheet',
    material: 'aluminum',
    price: 'KSH 450 - KSH 1200 per sq ft',
    dimensions: '0.5mm - 6.0mm thickness, 4ft x 8ft standard sheets',
    finish: 'Mill, brushed, or anodized',
    weight: '0.18 - 1.08 lbs per sq ft',
    features: [
      'Excellent strength-to-weight ratio',
      '3003, 5052, and 6061 alloys available',
      'Corrosion resistant',
      'Good thermal conductivity',
      'Easy to form and fabricate'
    ],
    applications: [
      'Aerospace components',
      'Automotive panels',
      'Food processing equipment',
      'Architectural cladding',
      'Marine applications'
    ],
    images: [
      'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg',
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg'
    ]
  },
  {
    id: '3',
    name: 'Copper Tubing',
    description: 'Premium quality copper tubing for plumbing, HVAC, and industrial applications with excellent thermal conductivity.',
    category: 'tubing',
    material: 'copper',
    price: 'KSH 325 - KSH 850 per foot',
    dimensions: '3/8" - 4" diameter, Type K, L, and M',
    finish: 'Bright',
    weight: '0.15 - 4.2 lbs per foot',
    features: [
      'ASTM B88 certified',
      'Excellent thermal conductivity',
      'Naturally antimicrobial',
      'Corrosion resistant',
      'Long service life'
    ],
    applications: [
      'Plumbing systems',
      'HVAC refrigerant lines',
      'Medical gas systems',
      'Solar water heating',
      'Industrial process piping'
    ],
    images: [
      'https://images.pexels.com/photos/19825178/pexels-photo-19825178/free-photo-of-metal-bars-pipes-and-tubing-on-display.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/12587565/pexels-photo-12587565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '4',
    name: 'Stainless Steel Plate',
    description: 'High-grade stainless steel plates offering exceptional corrosion resistance and durability for demanding environments.',
    category: 'plate',
    material: 'stainless-steel',
    price: 'KSH 675 - KSH 1850 per sq ft',
    dimensions: '1/8" - 1" thickness, 4ft x 8ft standard sheets',
    finish: '2B, #4 Brushed, or Mirror',
    weight: '5.2 - 41.7 lbs per sq ft',
    features: [
      '304, 316, and 430 grades available',
      'Excellent corrosion resistance',
      'High temperature tolerance',
      'Hygienic surface properties',
      'Low maintenance'
    ],
    applications: [
      'Food processing equipment',
      'Chemical processing vessels',
      'Architectural features',
      'Medical equipment',
      'Marine environments'
    ],
    images: [
      'https://images.pexels.com/photos/11687360/pexels-photo-11687360.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg'
    ]
  },
  {
    id: '5',
    name: 'Custom Metal Fabrication',
    description: 'Tailored metal fabrication solutions for unique projects, from simple components to complex assemblies.',
    category: 'custom',
    material: 'various',
    price: 'Custom Quote',
    dimensions: 'Custom per specification',
    finish: 'Various options available',
    weight: 'Varies by project',
    features: [
      'Design assistance available',
      'Multiple material options',
      'Precision CNC machining',
      'Welding and assembly services',
      'Quality inspection and reporting'
    ],
    applications: [
      'Specialized equipment',
      'Architectural features',
      'Industrial machinery',
      'Prototyping',
      'Art installations'
    ],
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      'https://images.pexels.com/photos/3822850/pexels-photo-3822850.jpeg'
    ]
  },
  {
    id: '6',
    name: 'Brass Fittings',
    description: 'Precision-machined brass fittings and components with excellent corrosion resistance and electrical conductivity.',
    category: 'components',
    material: 'brass',
    price: 'KSH 1.25 - KSH 45.00 per unit',
    dimensions: 'Various sizes available',
    finish: 'Natural or Chrome Plated',
    weight: 'Varies by size',
    features: [
      'Lead-free options available',
      'Excellent machinability',
      'Good corrosion resistance',
      'High electrical conductivity',
      'Thread standards: NPT, BSPT, BSPP'
    ],
    applications: [
      'Plumbing fixtures',
      'Electrical components',
      'Musical instruments',
      'Marine hardware',
      'Decorative architectural elements'
    ],
    images: [
      'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg',
      'https://images.pexels.com/photos/1571734/pexels-photo-1571734.jpeg'
    ]
  },
  {
    id: '7',
    name: 'Steel Angle Iron',
    description: 'Versatile steel angle iron for structural support, framing, and fabrication projects.',
    category: 'structural',
    material: 'steel',
    price: 'KSH 2.50 - KSH 6.00 per foot',
    dimensions: '1" x 1" to 8" x 8", various thicknesses',
    finish: 'Mill or galvanized',
    weight: '0.5 - 10 lbs per foot',
    features: [
      'ASTM A36 certified',
      'High strength and durability',
      'Easy to weld and fabricate',
      'Corrosion-resistant option available',
      'Custom lengths available'
    ],
    applications: [
      'Structural framing',
      'Support brackets',
      'Railing systems',
      'Machinery bases',
      'Custom fabrication projects'
    ],
    images: [
      'https://images.pexels.com/photos/17134142/pexels-photo-17134142/free-photo-of-rusty-metal-construction.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/12587565/pexels-photo-12587565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '8',
    name: 'Sheet Metal Brackets',
    description: 'Custom sheet metal brackets for various applications, including HVAC, automotive, and construction.',
    category: 'components',
    material: 'steel',
    price: 'KSH 0.50 - KSH 5.00 per unit',
    dimensions: 'Custom per specification',
    finish: 'Mill or powder-coated',
    weight: 'Varies by size',
    features: [
      'Custom designs available',
      'Precision laser cutting',
      'Bending and forming services',
      'Durable and corrosion-resistant finishes',
      'Quick turnaround times'
    ],
    applications: [
      'HVAC systems',
      'Automotive assemblies',
      'Construction projects',
      'Furniture manufacturing',
      'Signage'
    ],
    images: [
      'https://images.pexels.com/photos/6800730/pexels-photo-6800730.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/12587565/pexels-photo-12587565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '9',
    name: 'Custom Tubing Solutions',
    description: 'Custom tubing solutions for various applications, including automotive, aerospace, and industrial.',
    category: 'tubing',
    material: 'various',
    price: 'Custom Quote',
    dimensions: 'Custom per specification',
    finish: 'Mill or powder-coated',
    weight: 'Varies by size',
    features: [
      'Custom designs available',
      'Precision laser cutting and bending',
      'Durable finishes available',
      'Quick turnaround times',
      'Quality inspection and reporting'
    ],
    applications: [
      'Automotive exhaust systems',
      'Aerospace components',
      'Industrial machinery',
      'Furniture manufacturing',
      'Art installations'
    ],
    images: [
      'https://images.pexels.com/photos/8297847/pexels-photo-8297847.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/12587565/pexels-photo-12587565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
  
];

// Categories and materials for filtering
export const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'structural', name: 'Structural' },
  { id: 'sheet', name: 'Sheet Metal' },
  { id: 'tubing', name: 'Tubing & Pipes' },
  { id: 'plate', name: 'Plates' },
  { id: 'components', name: 'Components & Fittings' },
  { id: 'custom', name: 'Custom Solutions' }
];

export const materials = [
  { id: 'all', name: 'All Materials' },
  { id: 'steel', name: 'Steel' },
  { id: 'aluminum', name: 'Aluminum' },
  { id: 'copper', name: 'Copper' },
  { id: 'stainless-steel', name: 'Stainless Steel' },
  { id: 'brass', name: 'Brass' },
  { id: 'various', name: 'Various' }
];

// Function to filter products
export const filterProducts = (
  productList: Product[],
  categoryFilter: string = 'all',
  materialFilter: string = 'all',
  searchQuery: string = ''
): Product[] => {
  return productList.filter((product) => {
    // Apply category filter
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;

    // Apply material filter
    const materialMatch = materialFilter === 'all' || product.material === materialFilter;

    // Apply search query
    const search = searchQuery.toLowerCase();
    const searchMatch = !search ||
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return categoryMatch && materialMatch && searchMatch;
  });
};