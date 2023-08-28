import { useState } from "react";

export default function Form({ handleItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleDesrciption(e) {
    setDescription(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    handleItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for yout 😍 trip..??</h3>

      <select onChange={handleQuantity} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        onChange={handleDesrciption}
        value={description}
      />
      <button>Add</button>
    </form>
  );
}
