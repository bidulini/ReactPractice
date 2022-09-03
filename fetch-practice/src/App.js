import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import DisplayProducts from "./DisplayProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((message) => console.log(message));
  }, []);

  const handleInput = (inputedValue) => {
    if (inputedValue === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((el) =>
          el.title.toLowerCase().includes(inputedValue.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <SearchInput handleOnChange={handleInput} />
      <DisplayProducts products={filteredProducts} />
    </div>
  );
};

export default App;
