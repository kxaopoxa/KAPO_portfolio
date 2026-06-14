import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import ContactFooter from './components/ContactFooter';

const projects = [
  {
    title: '都市漫步 — 光影情绪渲染',
    desc: '以日常街景为母题，用俯视构图与自然光线捕捉角色与城市之间的微妙情绪张力。',
    image: '/projects/work-2.png',
    tags: ['AIGC', '角色设计', '场景构图']
  },
  {
    title: '雨夜霓虹 — 氛围叙事',
    desc: '在湿润路面的反光与霓虹中重新演绎同一场景，探索雨夜对画面情绪的放大效果。',
    image: '/projects/work-3.png',
    tags: ['氛围设计', '色彩情绪', 'AIGC']
  },
  {
    title: '静谧光影 — 极简空间',
    desc: '用拱窗、自然光与人物剪影构建一幅极简主义的画面，强调留白与光影的诗意。',
    image: '/projects/work-4.png',
    tags: ['极简主义', '光影', '空间设计']
  }
];

const strengths = [
  {
    title: '跨领域转行视角',
    desc: '能够把过往经验迁移至 AIGC 创作，在技术、审美与业务之间找到更务实的平衡点。'
  },
  {
    title: 'AIGC 内容工程能力',
    desc: '熟悉文生图、图生图、风格迁移、提示词构建和内容迭代，能够快速验证创意方向。'
  },
  {
    title: '设计审美与留白控制',
    desc: '重视构图、节奏、层次与气质表达，让作品更像作品，而不是单纯堆叠效果。'
  },
  {
    title: '从想法到成片的落地力',
    desc: '能从主题出发完成策划、生成、修图、排版和呈现，把项目做成完整作品。'
  },
  {
    title: '持续学习与自驱力',
    desc: '具备强学习能力，愿意反复打磨细节，直到视觉表达和内容逻辑都更准确。'
  },
  {
    title: '作品集叙事能力',
    desc: '不只是展示单张图片，而是通过整体叙事把个人优势、项目价值和成长潜力讲清楚。'
  }
];

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects items={projects} />
        <Strengths items={strengths} />
        <ContactFooter />
      </main>
    </div>
  );
}
