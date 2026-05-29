import React, { useState } from 'react';
import ProductList from './components/ProductList';
import dashboardTitle from './index';

const App = () => {
  // TODO: Define initial product data
  let products = [
    {
      id: 1,
       name: 'Laptop',
       price: '$999',
       inStock: true ,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
      inStock: false,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    { id: 3, name: 'Tablet', price: '$499', inStock: true,
      image: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
     },
    
    {
      id: 3,
      name: "Earpods",
      price: 150,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 4,
      name: "Watchs",
      price: 250,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 75,
      inStock: false,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 6,
      name: "Keyboard",
      price: 100,
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    },
  ];

 
  // TODO: Implement state to manage filtering
  const [newProduct, setContent] = useState(products)
  const [filter, setFilter] = useState(null);
  // TODO: Implement logic to filter products based on availability
   console.log(newProduct)
  function removeItem(productId) {
    
    const updatedProducts = newProduct.filter(
      product => product.id !== productId
    );
    console.log(updatedProducts)
     setContent(updatedProducts)
  }

  function filterProducts (){

    return newProduct.filter((product) => {
      if (filter === true) return product.inStock;
      if (filter === false) return !product.inStock;
      return true;
  })
}

  // function filterProducts() {
  //   if (!Array.isArray(newProduct)) {
  //     console.log("BROKEN STATE:", newProduct);
  //     return [];
  //   }

  //   return newProduct;
  // }
 
  return (
    <div>
  
       <>
        <h1>{/* TODO: Add 'Product Dashboard' title here */}{dashboardTitle}</h1>

        {/* TODO: Add buttons to allow filtering by availability */}
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter(true)}>In Stock</button>
        <button onClick={() => setFilter(false)}>Out of Stock</button>
        {/* TODO: Render the ProductList component and pass filtered products */}
        <ProductList products={filterProducts() || []} 
          remove = {removeItem}
        />
      

       </>
      
    </div>
  );
};

export default App;
