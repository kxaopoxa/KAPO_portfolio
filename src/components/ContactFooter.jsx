export default function ContactFooter() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-bg">
        <img src="/ink.svg" alt="" aria-hidden="true" />
      </div>

      <div className="container contact-inner">
        <div className="section-lead contact-lead">
          <p className="section-eyebrow">联系我</p>
          <h2 className="section-title">如果你在找一个有审美追求的 AIGC 创作者</h2>
          <p className="section-desc contact-desc">
            我愿意参与视觉创作、内容生成、个人作品集搭建、创意实验与内容系统优化相关项目。
            如果你觉得我的方向和气质契合，欢迎联系我。
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-item">
            <small>邮箱</small>
            <strong>your-email@example.com</strong>
          </div>
          <div className="contact-item">
            <small>微信</small>
            <strong>your-wechat-id</strong>
          </div>
          <div className="contact-item">
            <small>小红书 / 社交账号</small>
            <strong>@kapo</strong>
          </div>
          <div className="contact-item">
            <small>合作方向</small>
            <strong>AIGC 视觉设计 / 内容创作 / 作品集优化</strong>
          </div>
        </div>

        <div className="contact-actions">
          <a className="btn light" href="mailto:your-email@example.com">发送邮件</a>
          <a className="btn ghost" href="#top">回到顶部</a>
        </div>

        <footer className="footer-note">
          <span>© {new Date().getFullYear()} KAPO</span>
          <span className="dot" />
          <span>以更克制的方式做更有气质的创作</span>
        </footer>
      </div>
    </section>
  );
}
