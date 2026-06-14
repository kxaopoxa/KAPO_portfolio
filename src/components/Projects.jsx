export default function Projects({ items = [] }) {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-lead">
          <p className="section-eyebrow">精选项目</p>
          <h2 className="section-title">用作品说明能力，而不是只用文字解释</h2>
          <p className="section-desc">
            我更倾向用完整的项目去表达思考过程、审美倾向和执行能力。
            这些项目会继续迭代，也会逐步形成更清晰的个人创作体系。
          </p>
        </div>

        <div className="grid-3">
          {items.map((item, index) => (
            <article className="project-card card" key={index}>
              <div className="project-media">
                <img src={item.image} alt={item.title} />
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.desc}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
