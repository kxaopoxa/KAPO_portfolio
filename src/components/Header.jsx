const links = [
  { label: '个人经历', href: '#about' },
  { label: '精选项目', href: '#projects' },
  { label: '个人优势', href: '#strengths' },
  { label: '联系我', href: '#contact' }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="logo" href="#top">
          <span className="logo-mark">K</span>
          <span>KAPO</span>
        </a>

        <nav className="nav-links">
          {links.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="btn small" href="#contact">联系我</a>
      </div>
    </header>
  );
}
