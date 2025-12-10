import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import "../styles/order.css";

export default function Order() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    deliveryDate: "",
    quantity: 1
  });

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setItem(res.data));
  }, [id]);

  const placeOrder = () => {
    const body = { ...form, productName: item.productName };

    API.post("/orders", body)
      .then(() => alert("Order placed successfully!"))
      .catch(() => alert("Something went wrong!"));
  };

  return (
    <div className="order-page">

      <div className="order-left">
        <h2>{item.productName}</h2>
        <p>{item.description}</p>
        <h3>₹{item.price}</h3>
      </div>

      <div className="order-right">
        <h2>Enter Delivery Details</h2>

        <div className="order-form">
          {Object.keys(form).map(key => (
            <input
              key={key}
              placeholder={key.replace(/([A-Z])/g, " $1")}
              type={key === "deliveryDate" ? "date" : "text"}
              value={form[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ))}

          <button onClick={placeOrder}>Place Order</button>
        </div>
      </div>

    </div>
  );
}
