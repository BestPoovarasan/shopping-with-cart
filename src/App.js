import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import List from "./components/List items";
import { useState } from "react";
function App() {
  const products = [
    {
      id: 1,
      Brand: "Apple",
      price: 70000,
      des: "iPhone, the world's most powerful personal device",
      img: "./img/1.png",
    },
    {
      id: 2,
      Brand: "Sony",
      price: 86000,
      des: "Sony's range of award-winning Xperia™ smartphones.",
      img: "./img/2.png",
    },
    {
      id: 3,
      Brand: "Nokia",
      price: 42000,
      des: "Browse our best Android phones and discover your new model.",
      img: "./img/3.png",
    },
    {
      id: 4,
      Brand: "Samsung",
      price: 78000,
      des: "Samsung offers latest smartphones with advanced technology.",
      img: "./img/4.png",
    },
    {
      id: 5,
      Brand: "LG",
      price: 55000,
      des: "LG mobile phones merge functionality with a sleek design.",
      img: "./img/5.png",
    },
    {
      id: 6,
      Brand: "Vivo",
      price: 32000,
      des: "vivo offer's best mobile phones with great features.",
      img: "./img/6.png",
    },
  ];

  const [cartitems, setcartitems] = useState([]);
  const [total, setTotal] = useState(0);

  let handletocart = (id) => {
    const productIndex = products.findIndex((obj) => obj.id === id);
    const product = products[productIndex];
    setcartitems([...cartitems, product]);
    setTotal(total + product.price);
  };
  let removecart = (id) => {
    const cartitemIndex = cartitems.findIndex((obj) => obj.id === id);
    setTotal(total - cartitems[cartitemIndex].price);
    cartitems.splice(cartitemIndex, 1);
    setcartitems([...cartitems]);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Mobile Products</h2>
            <div className="d-flex">
              {products.map((Product) => {
                return <Card data={Product} handletocart={handletocart}></Card>;
              })}
            </div>
            {cartitems.map((items) => {
              return <List data={items} removecart={removecart}></List>;
            })}
            <div class="d-grid col-6 mx-auto">
              <button type="button" class="btn btn-primary total">
                Total: {total}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
