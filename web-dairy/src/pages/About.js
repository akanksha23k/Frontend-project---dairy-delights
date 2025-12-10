import React from "react";
import "../styles/about.css";


export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>Dairy Delight</h1>
        <p>
          We bring you 100% pure, fresh and organic dairy products made with love.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="about-text">
        <h2>Why Choose Us?</h2>
        <p>
          Dairy Delight sources milk from trusted farms and follows the highest standards of
          quality. Our products are delivered fresh every day and are free from harmful 
          additives and preservatives.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <h2>Benefits of Dairy Products</h2>

        <div className="benefits-grid">

          <div className="box">
            <h3>Bone Strength</h3>
            <p>Rich in calcium for strong bones & teeth.</p>
          </div>

          <div className="box">
            <h3>Healthy Digestion</h3>
            <p>Curd and yogurt improve gut health.</p>
          </div>

          <div className="box">
            <h3>Muscle Growth</h3>
            <p>Milk protein supports muscle recovery.</p>
          </div>

          <div className="box">
            <h3>Immune Boost</h3>
            <p>Probiotics help with immunity & metabolism.</p>
          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="cat-section">
        <h2>What We Offer</h2>

        <ul>
          <li>Milk & Cream</li>
          <li>Curd & Yogurt</li>
          <li>Paneer</li>
          <li>Cheese & Butter</li>
          <li>Milkshakes & Lassi</li>
          <li>Desserts & Kulfi</li>
        </ul>
      </section>

    </div>
  );
}
