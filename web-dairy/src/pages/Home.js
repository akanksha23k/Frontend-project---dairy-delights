import "../styles/home.css";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <h1>Fresh Milk, That’s What You’ll Love</h1>
          <p>100% Pure | Organic | Natural Dairy directly from farms.</p>

          <div className="hero-btns">
            <a href="/products" className="hero-btn primary">Explore Products</a>
            <a href="/about" className="hero-btn secondary">Learn More</a>
          </div>
        </div>

        <img src={hero} alt="milk" className="hero-img" />
      </section>

      <section className="categories">
        <h2>Our Dairy Categories</h2>

        <div className="cat-grid">
          <Link to="/products?cat=milk" className="cat-card">Milk</Link>
    <Link to="/products?cat=yogurt" className="cat-card">Yogurt</Link>
    <Link to="/products?cat=cheese" className="cat-card">Cheese</Link>
    <Link to="/products?cat=desserts" className="cat-card">Desserts</Link>
        </div>
      </section>

      <section className="why">
        <h2>Why Dairy Delight?</h2>

        <div className="why-grid">
          <div>
            <h4>100% Organic</h4>
            <p>No added chemicals.</p>
          </div>
          <div>
            <h4>Farm to Home</h4>
            <p>Delivered fresh.</p>
          </div>
          <div>
            <h4>Super Affordable</h4>
            <p>Premium quality.</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <p>“Fresh taste, creamy texture, happy family!”</p>
      </section>

    </div>
  );
}
