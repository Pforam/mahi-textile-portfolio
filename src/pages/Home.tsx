
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-line" /> DESIGN PORTFOLIO · 2026
          </span>

          <h1>
            Stories woven<br />
            in <em>texture and tales.</em>
          </h1>

          <p className="hero-intro">
            I’m Mahi Patel, a textile design student exploring the meeting point
            of tradition, material and contemporary expression.
          </p>

          <div className="hero-actions">
            <Link className="button button-dark" to="/work">
              Explore my work <ArrowUpRight size={16} />
            </Link>
            <a
              className="text-link"
              href="https://www.behance.net/mahipatel15"
              target="_blank"
              rel="noreferrer"
            >
              View Behance <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="hero-art-wrap">
          <img
            src="/images/hero/Textile feature artwork.png"
            alt="Featured textile artwork by Mahi Patel"
            className="hero-art"
          />
          <span className="hero-stamp">
            MADE WITH<br />CURIOSITY <b>✳</b>
          </span>
          <span className="hero-caption">
            A practice shaped by stories, surfaces and the handmade.
          </span>
        </div>

        <a href="#selected-work" className="scroll-cue">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-grid">
          <span className="eyebrow">A LITTLE ABOUT ME!</span>
          <p>
            From a first sketch to the texture of a finished surface, I’m drawn
            to the details that give textiles their <em>character.</em>
          </p>
          <Link to="/about" className="text-link">
            More about me <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <section className="section-wrap work-section" id="selected-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A SELECTION OF PROJECTS</span>
            <h2>Latest <em>work.</em></h2>
          </div>
          <Link className="text-link" to="/work">
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="project-grid home-project-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="craft-strip">
        <div className="section-wrap craft-strip-inner">
          <span className="eyebrow">THE THINGS I LOVE TO EXPLORE</span>

          <div className="craft-words">
            <span>Surface</span>
            <i>✳</i>
            <span>Print</span>
            <i>✳</i>
            <span>Weave</span>
            <i>✳</i>
            <span>Craft</span>
          </div>

          <Link to="/skills" className="text-link">
            Explore skills & craft <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-grid">
          <span className="eyebrow"></span>
          <p>
            "There is nothing like outside the box, you just have to <em>look
              differently in it. </em>"
          </p>
        </div>
      </section>
    </>
  )
}
