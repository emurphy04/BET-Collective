import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // Import Navigate
import ProductList from '../components/ProductList/ProductList';
import items from '../components/ProductCard/products.json';

const CategoryPage = () => {
  const { category } = useParams();

  // Redirect to /category/all if category is not provided
  if (!category) {
    return <Navigate to="/category/all" replace />;
  }

  return (
    <div>
      <h2>{category}</h2>
      <ProductList products={items} category={category} />
    </div>
  );
};

export default CategoryPage;
