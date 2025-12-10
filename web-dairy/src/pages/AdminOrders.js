import { useEffect, useState } from "react";
import API from "../api";
import "../styles/adminorders.css";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div className="admin-orders">
      <h2>Order Requests</h2>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Phone</th>
            <th>City</th>
            <th>Date</th>
            <th>Qty</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.firstName} {o.lastName}</td>
              <td>{o.productName}</td>
              <td>{o.contact}</td>
              <td>{o.city}</td>
              <td>{String(o.deliveryDate).slice(0,10)}</td>
              <td>{o.quantity}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
