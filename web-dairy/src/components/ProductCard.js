export default function ProductCard({ p }) {
  return (
    <div className="product-soft-card">
      <img src={p.image} alt={p.productName} />

      <h4>{p.productName}</h4>
      <p className="price">₹{p.price}</p>

      <a href={`/order/${p.id}`} className="buy-btn">
        Buy Now →
      </a>
    </div>
  );
}
