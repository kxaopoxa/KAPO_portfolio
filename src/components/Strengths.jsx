export default function Strengths({ items = [] }) {
  return (
    <section className="section strengths" id="strengths">
      <div className="container split">
        <div className="section-lead">
          <p className="section-eyebrow">个人优势</p>
          <h2 className="section-title">我更想展示的，是持续进化的能力结构</h2>
          <p className="section-desc">
            优势不是一句口号，而是能不断复用、不断打磨、不断落到作品里的东西。
            下面是我当前最想坚持和强化的几项能力。
          </p>
        </div>

        <div className="grid-2 strengths-grid">
          {items.map((item, index) => (
            <article className="strength-card card" key={index}>
              <div className="strength-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
