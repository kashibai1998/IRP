import { useEffect, useState } from "react";
import "./index.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="card">
      <div>{title}</div>
      <img src={image} width={50} height={50} />
    </div>
  );
};

const PAGE_SIZE = 10;
function App() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currPage * PAGE_SIZE;
  const end = start+PAGE_SIZE
  return (
    <>
      {/* {JSON.stringify(products)} */}
      <div>
        {[...Array(noOfPages).keys()].map((n) => (
          <spna className="page-number" onClick={() => setCurrPage(n)}>
            {n}
          </spna>
        ))}
      </div>
      <div className="container">
        {products.slice(start,end).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

// export default App;
// * {
//   background-color: white;
//   /* color: blue; */
// }

// .card {
//   border: 1px solid black;
//   display: flex;
//   width: 100px;
//   padding:5px;
//   margin: 5px;
//   flex-wrap: wrap;
// }

// .container{
//   display: flex;
//   flex-wrap: wrap;
//   margin :10px
// }

// .page-number{
//   padding:10px;
//   margin:2px;
//   border:1px solid black;
//   cursor: pointer;
// }
