import React from 'react';
import { createRoot } from 'react-dom/client';
import { contactDetails, featuredProjects } from './data';
import './styles.css';

function ExternalLink({ href, children, className = '' }) {
  return href ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a> : <span className={`${className} unavailable-link`}>{children}<small>Pendiente de añadir</small></span>;
}

function PortfolioApp() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header page-container">
      <a className="site-brand" href="#inicio" aria-label="Iker Hernández, inicio">iker<span>.</span></a>
      <nav aria-label="Navegación principal">
        <a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a className="site-navigation__contact" href="#contacto">Contacto <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <main id="contenido">
      <section className="introduction page-container" id="inicio" aria-labelledby="introduction-title">
        <div className="introduction__content">
          <p className="section-label"><span className="availability-indicator" /> EN BUSCA DE MI PRIMERA OPORTUNIDAD</p>
          <h1 id="introduction-title">Hola, soy<br />Iker Hernández<span className="text-accent">.</span></h1>
          <p className="introduction__role">Desarrollador junior<span className="introduction__role-divider" /></p>
          <p className="introduction__summary">He terminado SMX y DAMvi. Quiero dar el siguiente paso: incorporarme a un equipo y seguir creciendo a través del desarrollo.</p>
          <div className="introduction__actions"><a className="button button--primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a><a className="text-link" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="developer-illustration">
          <div className="developer-illustration__header"><span>IKER / DEV</span><span>SMX · DAMvi</span></div>
          <div className="developer-illustration__symbol">IH<span>.</span></div>
          <div className="developer-illustration__footer"><span>De una aplicación de compras<br />a un videojuego con decisiones.</span><a href="#proyectos">Ver mis trabajos ↓</a></div>
        </div>
        <div className="introduction__footer"><span>DESARROLLO WEB & MÓVIL</span><a href="#sobre-mi">Conoce mi perfil <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="about-section page-section page-container" id="sobre-mi" aria-labelledby="about-title">
        <div><p className="section-label">SOBRE MÍ</p><h2 id="about-title">Mi formación y<br />lo que he desarrollado.</h2></div>
        <div className="about-section__content"><p>Me llamo Iker Hernández y he terminado los ciclos de SMX y DAMvi. Ahora busco prácticas o mi primer empleo en desarrollo.</p><p>Mi recorrido incluye proyectos con Laravel, React, Java y Android además de un videojuego en equipo hecho en Unity. Este portafolio reúne esos trabajos y será el lugar donde compartiré sus detalles.</p><div className="education-summary"><span>FORMACIÓN COMPLETADA</span><strong>SMX <span aria-hidden="true">↗</span></strong><strong>DAMvi <span aria-hidden="true">↗</span></strong></div></div>
      </section>
      <section className="technologies-section" aria-labelledby="technology-title"><div className="page-container technologies-section__content"><div><p className="section-label">TECNOLOGÍAS</p><h2 id="technology-title">En mis proyectos</h2></div><ul className="technology-list">{['Laravel', 'React', 'C#', 'Android'].map((technology) => <li key={technology}>{technology}</li>)}</ul></div></section>
      <section className="projects-section page-section page-container" id="proyectos" aria-labelledby="projects-title">
        <div className="section-header"><div><p className="section-label">PROYECTOS DESTACADOS</p><h2 id="projects-title">Proyectos que<br />he desarrollado.</h2></div><p>Tres proyectos individuales y un videojuego en equipo.<br /><span className="text-muted">Código, tecnologías y mi aportación en cada uno.</span></p></div>
        <div className="project-list">{featuredProjects.map(project => <article className="project-card" key={project.id}><div className={`project-card__illustration ${project.illustrationClassName}`} aria-hidden="true"><img className="project-card__icon" src={project.iconUrl} alt="" width="96" height="96" loading="lazy" /><span className="project-card__technologies">{project.technologySummary}</span></div><div className="project-card__metadata"><span>{project.category}</span><span className="project-card__badge">{project.categoryLabel || 'Ficha pendiente'}</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.features && <ul className="project-card__features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}{project.authorship && <p className="project-card__authorship"><strong>Autoría</strong><br />{project.authorship}</p>}{project.contribution && <p className="project-card__authorship"><strong>Mi aportación</strong><br />{project.contribution}</p>}<div className="project-card__links"><ExternalLink href={project.repositoryUrl}>GitHub</ExternalLink>{project.trailerUrl && <ExternalLink href={project.trailerUrl}>Ver tráiler</ExternalLink>}</div></article>)}</div>
        <div className="projects-section__more">
          <p>Explora el resto de mis repositorios en GitHub.</p>
          <ExternalLink className="button button--primary" href="https://github.com/DrikerHC?tab=repositories">Ver más proyectos</ExternalLink>
        </div>
      </section>
      <section className="contact-section" id="contacto" aria-labelledby="contact-title"><div className="page-container"><p className="section-label">CONTACTO</p><div className="contact-section__header"><h2 id="contact-title">¿Hablamos?<br /><span>Busco mi primera oportunidad.</span></h2></div><p className="contact-section__summary">Busco prácticas o mi primer empleo como desarrollador junior.<br />Si mi perfil encaja en tu equipo, me gustaría conoceros.</p><div className="contact-section__links"><ExternalLink href={contactDetails.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactDetails.email)}` : null}>Gmail</ExternalLink><ExternalLink href={contactDetails.githubUrl}>GitHub</ExternalLink><ExternalLink href={contactDetails.linkedinUrl}>LinkedIn</ExternalLink><ExternalLink href={contactDetails.resumeUrl}>Ver CV</ExternalLink></div></div></section>
    </main>
    <footer className="site-footer page-container"><span>© {new Date().getFullYear()} Iker Hernández</span><span>Hecho con React y CSS.</span><a href="#inicio">Volver arriba ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><PortfolioApp /></React.StrictMode>);
