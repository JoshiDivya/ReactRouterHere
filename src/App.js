import { BrowserRouter, Link, Route, Router, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import products from "./products";

function App() {
  return (
   
 <div>
    Hii
    <Products></Products>
    </div>
   
   
  );
}

export default App;

function Products(){
  return(
    <BrowserRouter>
    <div>
      products Here
      {products.map((product,index)=>
      <li  key={index}>
      <Link to={`/product/${product.id}`}>{product.name}</Link>
      </li>
      )}
      <Routes>
        <Route path='/product/:id' element={<ProductDetails productdata={products}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

function ProductDetails(props){
  let {id} = useParams();
  const product = props.productdata.find((product)=> String(product.id) === id);
  return(
    <div>
     <h4>Hii {product.name}</h4>
     <h5>Price is {product.price}</h5>
    </div>
  ) 
}


