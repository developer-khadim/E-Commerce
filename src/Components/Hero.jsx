import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: "Woman's Fashion", subcategories: ["Dresses", "Tops", "Accessories"] },
  { name: "Men's Fashion", subcategories: ["Shirts", "Pants", "Accessories"] },
  { name: "Electronics", subcategories: [] },
  { name: "Home & Lifestyle", subcategories: [] },
  { name: "Medicine", subcategories: [] },
  { name: "Sports & Outdoor", subcategories: [] },
  { name: "Baby's & Toys", subcategories: [] },
  { name: "Groceries & Pets", subcategories: [] },
  { name: "Health & Beauty", subcategories: [] }
];

const Hero = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className='w-full'>
      <div className='px-6 py-8 border-r-2 w-64 h-[calc(100vh-80px)] border-gray overflow-y-auto'>
        <ul className='flex flex-col gap-4'>
          {categories.map((category, index) => (
            <li 
              key={index} 
              className='relative'
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className='flex items-center justify-between'>
                <h4 className='text-sm text-black hover:text-gray-600 transition-colors cursor-pointer'>
                  {category.name}
                </h4>
                {category.subcategories.length > 0 && <FaChevronRight className="text-gray-400" />}
              </div>
              {category.subcategories.length > 0 && hoveredCategory === index && (
                <div className='absolute left-full top-0 ml-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'>
                  {category.subcategories.map((subcat, subIndex) => (
                    <a 
                      key={subIndex}
                      href="#" 
                      className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      <FaChevronRight className="mr-2 text-gray-400" />
                      {subcat}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;