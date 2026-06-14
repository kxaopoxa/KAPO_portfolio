export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img
          className="hero-image"
          src="/projects/work-3.png"
          alt="AIGC 创作背景"
        />
        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content container">
        <p className="hero-eyebrow">AIGC Design Creator</p>

        <h1 className="hero-title">
          <span className="hero-title-main">KAPO</span>
          <span className="hero-title-sub">以水墨留白的克制，做更有气质的 AIGC 创作</span>
        </h1>

        <p className="hero-desc">
          我是一名正在转向 AIGC 设计创作的创作者，关注视觉表达、内容生成、图像审美与作品叙事，
          希望把传统美学中的留白、节奏与现代设计语言结合，打造更有辨识度的个人作品集。
        </p>

        <div className="hero-actions">
          <a className="btn" href="#projects">查看精选项目</a>
          <a className="btn outline" href="#contact">联系我</a>
        </div>

        <div className="hero-scroll">
          <span>向下探索</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
