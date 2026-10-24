import React from 'react';
import { createRoot } from 'react-dom/client';
import { contact, projects } from './data';
import './styles.css';

function ExternalLink({ url, children, className = '' }) {
  return url ? <a className={className} href={url} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a> : <span className={`${className} pending-link`}>{children}<small>Pendiente de añadir</small></span>;
}

function App() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="header container">
      <a className="brand" href="#inicio" aria-label="Iker Hernández, inicio">iker<span>.</span></a>
      <nav aria-label="Navegación principal">
        <a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a className="nav-contact" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main id="contenido">
      <section className="hero container" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> EN BUSCA DE MI PRIMERA OPORTUNIDAD</p>
          <h1 id="hero-title">Hola, soy<br />Iker Hernández<span className="accent">.</span></h1>
          <p className="hero-role">Desarrollador junior<span className="role-line" /></p>
          <p className="intro">He terminado SMX y DAMvi. Quiero dar el siguiente paso: incorporarme a un equipo y seguir creciendo a través del desarrollo.</p>
          <div className="hero-actions"><a className="button primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a><a className="text-link" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-top"><span>IKER / DEV</span><span>01 — PORTFOLIO</span></div>
          <div className="code-mark">&lt;<span>/</span>&gt;</div>
          <div className="art-bottom"><span>APRENDER.<br />CONSTRUIR.<br />SEGUIR CRECIENDO.</span><span className="art-star">✳</span></div>
        </div>
        <div className="hero-footer"><span>DESARROLLO WEB & MÓVIL</span><a href="#sobre-mi">Conoce mi perfil <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="about section container" id="sobre-mi" aria-labelledby="about-title">
        <div><p className="eyebrow">01 / SOBRE MÍ</p><h2 id="about-title">Una base técnica.<br />Un camino por construir.</h2></div>
        <div className="about-content"><p>Me llamo Iker Hernández y he terminado los ciclos de SMX y DAMvi. Ahora busco prácticas o mi primer empleo en desarrollo.</p><p>Mi recorrido incluye proyectos con Laravel, React, Java y Android además de un videojuego en equipo hecho en Unity. Este portafolio reúne esos trabajos y será el lugar donde compartiré sus detalles.</p><div className="education"><span>FORMACIÓN COMPLETADA</span><strong>SMX <span aria-hidden="true">↗</span></strong><strong>DAMvi <span aria-hidden="true">↗</span></strong></div></div>
      </section>
      <section className="tech-section" aria-labelledby="tech-title"><div className="container tech-inner"><div><p className="eyebrow">02 / TECNOLOGÍAS</p><h2 id="tech-title">En mis proyectos</h2></div><ul className="tech-list">{['Laravel', 'React', 'C#', 'Android'].map((tech) => <li key={tech}>{tech}<span aria-hidden="true">↗</span></li>)}</ul></div></section>
      <section className="projects section container" id="proyectos" aria-labelledby="projects-title">
        <div className="section-heading"><div><p className="eyebrow">03 / PROYECTOS DESTACADOS</p><h2 id="projects-title">Del aprendizaje<br />a la práctica.</h2></div><p>Una selección de mis proyectos.<br /><span className="muted">Detalles y enlaces pendientes de incorporar.</span></p></div>
        <div className="project-grid">{projects.map(project => <article className="project" key={project.id}><div className={`project-visual ${project.visual}`} aria-hidden="true"><span className="visual-number">{project.id} /</span><span className="visual-symbol">{project.symbol}</span><span className="visual-caption">{project.technology}</span></div><div className="project-meta"><span>{project.category}</span><span className="pending-badge">{project.status || 'Ficha pendiente'}</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.features && <ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}{project.authorship && <p className="project-contribution"><strong>Autoría</strong><br />{project.authorship}</p>}{project.contribution && <p className="project-contribution"><strong>Mi aportación</strong><br />{project.contribution}</p>}<div className="project-links"><ExternalLink url={project.repository}>GitHub</ExternalLink>{project.trailer && <ExternalLink url={project.trailer}>Ver tráiler</ExternalLink>}</div></article>)}</div>
        <div className="more-projects">
          <p>Explora el resto de mis repositorios en GitHub.</p>
          <ExternalLink className="button primary" url="https://github.com/DrikerHC?tab=repositories">Ver más proyectos</ExternalLink>
        </div>
      </section>
      <section className="contact-section" id="contacto" aria-labelledby="contact-title"><div className="container"><p className="eyebrow">04 / CONTACTO</p><div className="contact-heading"><h2 id="contact-title">El siguiente paso,<br /><span>en equipo.</span></h2><span className="contact-arrow" aria-hidden="true">↗</span></div><p className="contact-copy">Busco prácticas o mi primer empleo como desarrollador junior.<br />Si mi perfil encaja en tu equipo, me gustaría conoceros.</p><div className="contact-links"><ExternalLink url={contact.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}` : null}>Gmail</ExternalLink><ExternalLink url={contact.github}>GitHub</ExternalLink><ExternalLink url={contact.linkedin}>LinkedIn</ExternalLink><ExternalLink url={contact.cv}>Ver CV</ExternalLink></div></div></section>
    </main>
    <footer className="footer container"><span>© {new Date().getFullYear()} Iker Hernández</span><span>Hecho con React y CSS.</span><a href="#inicio">Volver arriba ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
