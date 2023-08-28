export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 💼 ✈ </em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You got everything! ready to go ✈"
      ) : (
        <em>
          💼 You have {numItems} items on your lits , and you already packed{" "}
          {packedItems}({percentage}%)
        </em>
      )}
    </footer>
  );
}
