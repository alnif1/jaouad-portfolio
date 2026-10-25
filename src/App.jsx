
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GitBranch,
  Mail,
  Menu,
  X,
  Server,
  ShieldCheck,
  Workflow,
  Terminal,
  ExternalLink,
  Database,
  Award,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'OpsPilot',
    category: 'AI · DEVOPS · OBSERVABILITY',
    description:
      'An AI-powered DevOps copilot that analyzes incidents, identifies probable causes, and recommends troubleshooting actions.',
    stack: ['React', 'FastAPI', 'Docker', 'PostgreSQL', 'Prometheus'],
    icon: BrainCircuit,
    link: 'https://github.com/alnif1/AI-DevOps-Copilot',
  },
  {
    number: '02',
    title: 'AI ITSM Platform',
    category: 'LLM · RAG · AI AGENTS',
    description:
      'An intelligent IT service management platform using specialized AI agents to support ticket analysis and service workflows.',
    stack: ['Python', 'LangGraph', 'Azure OpenAI', 'FastAPI', 'Docker'],
    icon: Workflow,
    link: 'https://github.com/alnif1',
  },
  {
    number: '03',
    title: 'Formula One Data Pipeline',
    category: 'DATA ENGINEERING · AUTOMATION',
    description:
      'A data engineering project concept focused on collecting, processing, and orchestrating Formula One data workflows.',
    stack: ['Python', 'Apache Airflow', 'SQL', 'Data Pipelines'],
    icon: Database,
    link: 'https://github.com/alnif1',
  },
]

const skills = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    items: 'Microsoft Azure · OCI · AWS · Linux · Networking',
  },
  {
    icon: Server,
    title: 'DevOps & Platform',
    items: 'Docker · Kubernetes · Helm · Terraform · Ansible · CI/CD',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    items: 'Python · LLMs · RAG · LangGraph · AI Agents · MLOps',
  },
  {
    icon: Database,
    title: 'Data & Backend',
    items: 'FastAPI · REST APIs · PostgreSQL · Redis · SQL',
  },
  {
    icon: ShieldCheck,
    title: 'Monitoring & Security',
    items: 'Prometheus · Grafana · Git · SonarQube · Trivy',
  },
  {
    icon: Terminal,
    title: 'Automation',
    items: 'Python Scripting · Bash · GitHub Actions · Jenkins',
  },
]

const experience = [
  {
    company: 'DXC Technology',
    role: 'AI / DevOps Engineer',
    period: 'Feb 2026 – Aug 2026',
    location: 'Rabat, Morocco',
    description:
      'Developed an AI-powered IT service management platform, combining LangGraph agents and Azure OpenAI with retrieval-augmented generation (RAG) to support intelligent service workflows. Built backend APIs with FastAPI and worked across the delivery stack with Docker, Kubernetes, CI/CD pipelines, and monitoring tools.',
  },
  {
    company: 'ARK-X Talent Factory',
    role: 'AI / Automation',
    period: 'Oct 2025 – Mar 2026',
    description:
      'Designed and built automation workflows in Python, integrating large language models to support AI-driven tasks. Developed AI agents for multi-step workflows and packaged solutions with Docker to make them easier to run and deploy.',
  },
  {
    company: 'Synertic Cloud',
    role: 'Cloud / DevOps',
    period: 'Dec 2025 – Feb 2026',
    description:
      'Supported cloud and DevOps work across Microsoft Azure and Oracle Cloud Infrastructure (OCI). Worked with Linux environments and Docker, wrote scripts to streamline operational tasks, and contributed to CI/CD automation for software delivery.',
  },
  {
    company: 'CMI Maroc',
    role: 'Cloud / DevOps',
    period: 'Feb 2025 – Aug 2025',
    description:
      'Contributed to deploying containerized applications and automating infrastructure tasks. Used Kubernetes and Helm to manage application deployments, NGINX as part of the deployment stack, and Ansible to support repeatable configuration and automation.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">JB</span>
          <span>JAOUAD<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://github.com/alnif1"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              CLOUD · AI · AUTOMATION
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Jaouad
              <br />
              <span>Boulanouar</span>
            </h1>

            <h2 className="hero-role">
              AI &amp; Cloud Engineer<span className="cursor">_</span>
            </h2>

            <p className="hero-description">
              I build intelligent applications and reliable cloud
              infrastructure, combining AI, automation, and DevOps to solve
              real-world engineering problems.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <ArrowDownRight size={18} />
              </a>
              <a className="button-secondary" href="#contact">
                Contact me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/alnif1" target="_blank" rel="noreferrer">
                <GitBranch size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jaouad-boulanouar-811882291/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cloud and AI illustration">
            <div className="visual-glow" />
            <div className="orbit orbit-outer">
              <span className="orbit-node node-top"><Cloud size={19} /></span>
              <span className="orbit-node node-right"><Code2 size={19} /></span>
              <span className="orbit-node node-bottom"><Database size={19} /></span>
              <span className="orbit-node node-left"><Workflow size={19} /></span>
            </div>
            <div className="orbit orbit-inner" />
            <div className="core-card">
              <div className="core-topline">
                <span>CORE SYSTEM</span>
                <span className="core-live"><span /> ONLINE</span>
              </div>
              <BrainCircuit className="core-icon" size={66} strokeWidth={1.25} />
              <h3>AI_ENGINE</h3>
              <p>Intelligence meets infrastructure.</p>
              <div className="core-bars">
                <span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
            <div className="floating-tag tag-ai">✳ AI / LLM</div>
            <div className="floating-tag tag-cloud">⌘ CLOUD NATIVE</div>
            <div className="visual-caption">BUILD · AUTOMATE · INNOVATE</div>
          </div>

          <a className="scroll-hint" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Engineering ideas<br />into <span>real solutions.</span></h2>
          </div>

          <div className="about-content">
            <p>
              I'm an engineer with a background in Big Data and Cloud Computing,
              interested in building practical AI systems and scalable
              infrastructure. I enjoy connecting software engineering,
              intelligent automation, and reliable deployment practices.
            </p>
            <div className="about-stats">
              <div><strong>AI</strong><span>Intelligent systems</span></div>
              <div><strong>Cloud</strong><span>Scalable infrastructure</span></div>
              <div><strong>DevOps</strong><span>Automation &amp; delivery</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <span className="section-index">02 / EXPERIENCE</span>
            <h2>Where I’ve <span>made an impact.</span></h2>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="experience-mark" aria-hidden="true">
                  <BriefcaseBusiness size={19} />
                </div>
                <div className="experience-details">
                  <div className="experience-heading">
                    <div>
                      <h3>{item.company}</h3>
                      <p className="experience-role">{item.role}</p>
                    </div>
                    <p className="experience-period">{item.period}</p>
                  </div>
                  {item.location && <p className="experience-location">{item.location}</p>}
                  <p className="experience-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <span className="section-index">03 / TOOLKIT</span>
            <h2>Tools I work <span>with.</span></h2>
            <p className="section-subtitle">
              Technologies for building, deploying, and operating modern systems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon"><Icon size={22} /></div>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-index">04 / SELECTED WORK</span>
              <h2>Projects in <span>focus.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/alnif1" target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <Icon size={27} strokeWidth={1.5} />
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View project <ExternalLink size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-wrap credentials-section" id="credentials">
          <div className="section-heading">
            <span className="section-index">05 / CREDENTIALS</span>
            <h2>Learning with <span>purpose.</span></h2>
          </div>
          <div className="credentials-grid">
            <article className="credential-card">
              <Award size={25} />
              <div><span>MICROSOFT CERTIFICATION</span><h3>Azure AI Fundamentals</h3><p>AI-900</p></div>
            </article>
            <article className="credential-card">
              <Award size={25} />
              <div><span>MICROSOFT CERTIFICATION</span><h3>Azure AI Apps and Agents Developer Associate</h3><p>AI-103</p></div>
            </article>
            <article className="credential-card">
              <Code2 size={25} />
              <div><span>ACADEMIC BACKGROUND</span><h3>Master's in Big Data &amp; Cloud Computing</h3><p>Université Hassan II</p></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-index">06 / GET IN TOUCH</span>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p>
              Interested in AI engineering, cloud infrastructure, DevOps,
              or a challenging technical project? Let's connect.
            </p>
            <a className="button-primary" href="mailto:jaouadboulanour@gmail.com">
              <Mail size={18} /> Send me an email <ArrowUpRight size={17} />
            </a>
            <div className="contact-socials">
              <a href="https://github.com/alnif1" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/jaouad-boulanouar-811882291/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">JB</span><span>JAOUAD<span className="brand-dot">.</span></span></a>
        <p>Designed &amp; built with React. © {new Date().getFullYear()} Jaouad Boulanouar.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
