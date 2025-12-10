import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

export default function Products() {
  const [list, setList] = useState([]);
  const { search } = useLocation();
  const category = new URLSearchParams(search).get("cat");

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = category
    ? list.filter(p => p.category === category)
    : list;

  return (
    <div className="products">
      <h2 className="page-title">Dairy Products</h2>


      <div className="prod-grid">
        {filtered.map(item => (
          <ProductCard key={item.id} p={item} />
        ))}
      </div>
    </div>
  );
}
