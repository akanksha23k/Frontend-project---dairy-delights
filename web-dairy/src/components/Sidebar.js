import "../styles/sidebar.css";

export default function Sidebar({ setCategory }) {
  const list = [
    "milk", "yogurt", "curd", "cream", "paneer", "cheese",
    "butter", "buttermilk", "ghee", "desserts"
  ];

  return (
    <aside className="sidebar">
      <h3>Categories</h3>

      {list.map(cat => (
        <p key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </p>
      ))}

      <p className="clear" onClick={() => setCategory("")}>
        Clear filters
      </p>
    </aside>
  );
}
