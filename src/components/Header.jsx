export function Header({ meta, navItems }) {
  return (
    <header className="site-header">
      <a className="brand" href="#index" aria-label="返回首页">
        <span className="brand-mark" aria-hidden="true">
          <span className="brand-mark__letters">QL</span>
          <span className="brand-mark__scan" />
          <span className="brand-mark__dot brand-mark__dot--a" />
          <span className="brand-mark__dot brand-mark__dot--b" />
        </span>
        <span>
          <strong>{meta.name}</strong>
          <small>{meta.role}</small>
        </span>
      </a>

      <nav className="top-nav" aria-label="主要导航">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            <span>{item.number}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-meta" aria-label="站点信息">
        <span>{meta.year}</span>
        <span>{meta.language}</span>
      </div>
    </header>
  );
}
