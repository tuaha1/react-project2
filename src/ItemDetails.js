import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function Item() {
  const { id } = useParams();
  const requestUrl = "https://fortnite-api.theapinetwork.com/item/get?id=" + id;

  useEffect(() => {
    fetchItem();
  }, []);

  const [itemz, setItems] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(requestUrl);
    const items = await fetchItem.json();
    setItems(items.data.item);
  };

  return (
    <div className="App">
      <h1>{itemz.name}</h1>
      <h1>{itemz.description}</h1>
      <h1>{itemz.rarity}</h1>
      <h1>{itemz.type}</h1>
    </div>
  );
}

export default Item;
