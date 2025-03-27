import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const productsData = [
    { id: 1, name: 'Product 1', img: 'img1.jpg', description: 'Description 1', avgRating: 3.5, totalRatings: 10 },
    { id: 2, name: 'Product 2', img: 'img2.jpg', description: 'Description 2', avgRating: 4.0, totalRatings: 5 },
  ];

  const [products, setProducts] = useState(productsData);

  const handleRatingSubmit = (productId, newRating) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / (product.totalRatings + 1);
        return {
          ...product,
          avgRating: newAvgRating.toFixed(1),
          totalRatings: product.totalRatings + 1
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
};

export default App;
