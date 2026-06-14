export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container split">
        <div className="about-visual">
          <div className="portrait">
            <img src="/projects/work-4.png" alt="kapo 个人形象" />
          </div>

          <div className="about-badges">
            <span className="badge">转行创作者</span>
            <span className="badge">AIGC 方向</span>
            <span className="badge">视觉设计</span>
          </div>
        </div>

        <div className="about-body">
          <div className="section-lead">
            <p className="section-eyebrow">个人经历</p>
            <h2 className="section-title">从转行者到 AIGC 创作者的自我重塑</h2>
            <p className="section-desc">
              我相信好的作品不只是技术堆叠，而是审美、逻辑、节奏和表达的综合结果。
              我正在把过去的经验重新整理，围绕 AIGC 内容创作建立更完整的能力结构。
            </p>
          </div>

          <p className="about-text">
            我叫 kapo，目前正专注于 AIGC 设计创作方向的学习与实践。比起单纯追求"像"，
            我更关注作品的气质、留白、结构感与叙事性。我希望通过作品集展现出一个转行者的诚意、
            学习能力以及对视觉品质的追求。
          </p>

          <p className="about-text">
            在这个过程中，我不断整理提示词策略、视觉语言、内容生成流程和排版逻辑，
            试图建立一套属于自己的创作方法论，而不是停留在单张图片的随机生成上。
          </p>

          <div className="about-contact">
            <div><small>姓名</small><strong>kapo</strong></div>
            <div><small>方向</small><strong>AIGC 设计创作</strong></div>
            <div><small>邮箱</small><strong>your-email@example.com</strong></div>
            <div><small>所在地</small><strong>中国</strong></div>
          </div>

          <div className="about-stats grid-2">
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">核心能力模块持续打磨</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">精选项目组合表达转行价值</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1</div>
              <div className="stat-label">围绕 AIGC 创作建立系统认知</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">投入在审美、生成与表达升级上</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
