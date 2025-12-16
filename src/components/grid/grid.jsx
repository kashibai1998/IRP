import React, { useState, useEffect } from 'react';

export default function Grid() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        data.products.sort((a, b) => a.price - b.price);
        return setProducts(data.products);
      });
    // .then((d)=>console.log(d))
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {/* //{JSON.stringify(products)} */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {products.map((product, index) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <img src={product.thumbnail} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
