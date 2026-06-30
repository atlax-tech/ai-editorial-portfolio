export function ScreenshotPlaceholder({ labels }) {
  if (!labels || labels.length === 0) return null;

  return (
    <div className="screenshot-placeholder-group">
      {labels.map((label, index) => (
        <figure key={index} className="screenshot-placeholder">
          <div className="screenshot-placeholder__frame" aria-hidden="true">
            <div className="screenshot-placeholder__wire" />
          </div>
          <figcaption>{label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
