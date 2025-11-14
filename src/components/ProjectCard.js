import React from "react";
import styles from "../components/PortafolioPage.module.css"; 

function ProjectCard({ project }) {
  const { title, description, image, link } = project;

  return (
    <article className={styles.projectCard}>
      <figure className={styles.cardFigure}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={`Proyecto para ${title}`} className={styles.projectImage}/>
        </div>
        <figcaption className={styles.cardCaption}>
          <h3 className={styles.clientName}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewProjectLink}>
            Ver Proyecto
          </a>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProjectCard;
