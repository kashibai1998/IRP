import React, { useState } from 'react';
import './style.css';

const data = [
  { id: 1, name: 'Apple iPhone 15' },
  { id: 2, name: 'Samsung Galaxy S25' },
  { id: 3, name: 'OnePlus 12' },
  { id: 4, name: 'Google Pixel 9' },
  { id: 5, name: 'Sony Xperia 10' },
];

export default function App() {
  const [products, setProducts] = useState(data);
  const [fltrProducts, setFltrProducts] = useState(data);
  const [searchText, setSeachText] = useState('');

  function handleSearch(e) {
    let value = e.target.value;
    setSeachText(value);

    if (value === '') {
      setFltrProducts(data);
    }

    const fltrProducts = products.filter(
      (prod) => prod.name.toLowerCase() === value
    );
    setFltrProducts(fltrProducts);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input onChange={(e) => handleSearch(e)} type="text" value={searchText} />
      <div>
        {products.map((product, idx) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    </div>
  );
}

// You are building a React e-commerce app.
// The product list can contain 50,000+ items, and the user can search by product name.

// Currently:

// Typing in the search box lags the UI

// The search function is called on every keystroke

// Rendering all items causes the app to freeze

// Requirements:

// Implement a search input that filters the product list.

// Ensure UI remains smooth for large datasets.

// Implement debouncing to reduce unnecessary computation.

// Prevent unnecessary re-renders of list items.
