import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { FaCirclePlay } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer}>
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={30}
              height={30}
              className={styles.logo}
              />
          </div>
          {project.links.length > 0 ? <div style={{display:"flex", gap: "5px"}}>
            {project.links.map((link, key) => (
              <a key={key} href={link.link} target="_blank" 
              style={{
                display:"flex", 
                alignItems:"center", 
                padding: "8px", 
                borderRadius:"50%", 
                border:"1px solid rgba(255, 255, 255, 0.1)"
              }}>
                {link?.type === 'live-link' && <GoLinkExternal size={"20px"} fill='#fff'/>}
                {link?.type === 'github' && <FaGithub size={"20px"} fill='#fff'/>}
                {link?.type === 'video' && <FaCirclePlay size={"20px"} fill='#fff'/>}
              </a>
            ))}
          </div> : <></>}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
