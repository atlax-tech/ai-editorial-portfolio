export function TextBlockRenderer({ blocks }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="text-blocks">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph":
            return <p key={key}>{block.content}</p>;
          case "heading":
            return <h3 key={key}>{block.content}</h3>;
          case "quote":
            return (
              <blockquote key={key}>
                <p>{block.content}</p>
              </blockquote>
            );
          case "list":
            return (
              <ul key={key}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "divider":
            return <hr key={key} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
