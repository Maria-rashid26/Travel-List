export default function Item({ item, handleDeletItems, handleToggleItem }) {
  return (
    <li style={item.packed === true ? { textDecoration: "line-through" } : {}}>
      <input type="checkbox" onChange={() => handleToggleItem(item.id)} />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeletItems(item.id)}>❌</button>
    </li>
  );
}
