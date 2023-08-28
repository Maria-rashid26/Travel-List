import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "harger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  // add items to the array

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  // delet items
  
  function handleDeletItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // toggle items

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //  clear list

  function handleClearList() {
    const confirmation = window.confirm(
      "Are you sure you want to delet all items.???"
    );
    if (confirmation) setItems([]);
    // confirmation(setItems([]));
  }

  return (
    <div>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDeletItems={handleDeletItems}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
