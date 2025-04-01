// app/products/page.js
'use client';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard/productCard';
import { mockProducts } from '../MockData/mock';

const ProductsPage = () => {
  
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const filtered = mockProducts.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    console.log(filtered);
  }
  const resetFilter = () => {
    setQuery('');
    setFilteredProducts(mockProducts);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification(`${product.title} added to cart!`);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 mt-10">محصولات ما</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} className='mb-10 w-[40vw] px-3 border-2 border-stone-950' onChange={handleQuery} placeholder='محصول مورد نظر خود را جست و جو کنید'/>
        <button className='bg-blue-400 mr-3 px-3 text-black font-bold rounded text-lg' type='submit' >جست و جو</button>
        {query && (
          <button 
            type="button" 
            onClick={resetFilter}
            className="bg-blue-400 mr-3 px-3 text-black font-bold rounded text-lg"
          >
            نمایش همه
          </button>
        )}
      </form>
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {notification}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_minmax(150px,1fr)_minmax(200px,1fr)] gap-6 relative mt-10">
        {filteredProducts.map((product) => (
          <div key={product.id}>
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
          />
          </div>
        ))}

    {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg text-white">محصولی یافت نشد</p>
          <button 
            onClick={resetFilter}
            className="mt-4 text-blue-500 hover:underline"
          >
            بازگشت به همه محصولات
          </button>
        </div>
      )}
      </div>
      <div className='bg-product rounded-3xl w-full h-[80vh] left-0 top-48 absolute skew-y-3 -z-10'></div>
    </div>
  );
};

export default ProductsPage;