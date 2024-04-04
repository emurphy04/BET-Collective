import React from 'react';
import ProductCard from '../ProductCard/card'; // Assuming you have a ProductCard component


const ProductList = ({ products, category }) => {
  // Filter products by category
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;