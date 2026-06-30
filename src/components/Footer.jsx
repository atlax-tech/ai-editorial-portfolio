export function Footer({ meta }) {
  return (
    <footer className="site-footer">
      <span>© {meta.year} {meta.owner}. ALL RIGHTS RESERVED.</span>
      <span>OBSERVE · TRANSLATE · PLAN</span>
    </footer>
  );
}
