import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const url = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await url.json();
    setItems(items.data);
  };

  const [onBackground, setBackground] = useState();

  return (
    <div className="App">
      {items.map((item, index) => {
        return (
          <div
            style={index === onBackground ? { boxShadow: "0 0 15px" } : null}
            id={index}
            className="divo"
            key={index}
            onMouseOver={() => {
              setBackground(index);
            }}
            onMouseOut={() => {
              setBackground();
            }}
          >
            <h1>
              <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
