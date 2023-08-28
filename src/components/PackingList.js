import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeletItems,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("");

  const sortedItems = [...items];

  // Sorting function based on the selected sort option
  sortedItems.sort((a, b) => {
    if (sortBy === "Description") {
      return a.description.localeCompare(b.description);
    } else if (sortBy === "input") {
      return a.id - b.id;
    } else if (sortBy === "packed") {
      return a.packed - b.packed;
    }
    return 0;
  });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              items={items}
              handleDeletItems={handleDeletItems}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="Description">Sort by input Description</option>
          <option value="packed">Sort by input packed</option>
        </select>
        <button onClick={handleClearList}>Clear All</button>
      </div>
    </div>
  );
}
