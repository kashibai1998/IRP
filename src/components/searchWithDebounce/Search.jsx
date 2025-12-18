import React, { useState, useCallback, useMemo } from 'react';
import useDebounce from '../../hooks/useDebounce';
import data from '../../products/data.json'


// const data = [
//   { id: 1, name: 'Apple iPhone 15' },
//   { id: 2, name: 'Samsung Galaxy S25' },
//   { id: 3, name: 'OnePlus 12' },
//   { id: 4, name: 'Google Pixel 9' },
//   { id: 5, name: 'Sony Xperia 10' },
// ];

const ProductRow = React.memo(({index,style,data})=>{
  console.log("hello in prd")
  return (
    <div style={style}>
     {data[index].title}
    </div>
  )
})

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const debounceVal = useDebounce(searchText,300)

  const fltrProducts = useMemo(() => {
    console.log("debounceVal",debounceVal)
    if(!debounceVal) return data;

    return data.filter((prod,id)=>{
      return prod.title.toLowerCase().includes(debounceVal.toLowerCase())
    })
  }, [debounceVal]);

  const handleSearch = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz! </h1>
      <input onChange={(e) => handleSearch(e)} type="text" value={searchText} />
      <div>
        {fltrProducts.map((product, idx) => {
          return <div key={product.id}>{product.title}</div>;
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
