export function TagList({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <ul className="tag-list" aria-label="标签">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
