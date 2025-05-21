import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import Link from 'next/link';

import { ExperienceItem } from '@/types';
import styles from '@/styles/ExperienceTimeline.module.css';

const ExperienceTimeline = ({ experiences }: { experiences: ExperienceItem[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className={styles.container}>
      {/* Timeline line */}
      <div className={styles.timelineLine} />
      
      <motion.div
        className={styles.itemsContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight
            }`}
            variants={itemVariants}
          >
            <div className={`${styles.contentWrapper} ${
              index % 2 === 0 ? styles.contentWrapperLeft : styles.contentWrapperRight
            }`}>
              
              {/* Experience card with hover animation */}
              <motion.div 
                className={styles.experienceCard}
                whileHover={{ y: -5 }}
              >
                {/* Company header */}
                <div className={styles.companyHeader}>
                  <div className={styles.logoContainer}>
                    {exp.logo ? (
                      <Image 
                        src={exp.logo} 
                        alt={exp.company} 
                        width={64} 
                        height={64}
                        unoptimized={exp.logo.startsWith('http')}
                      />
                    ) : (
                      <FiBriefcase className="text-2xl text-gray-400" />
                    )}
                  </div>
                  <div className={styles.companyInfo}>
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                  </div>
                  <div className={styles.refs}>
                    {exp.refs?.map((ref, index) => (
                        <Link href={ref.link} target="_blank" key={index} className={styles.refLink}>
                            {ref.label === 'live' && <GoLinkExternal size={"20px"} fill='#3b82f6' />}
                            {ref.label === 'github' && <FaGithub size={"20px"} />}
                        </Link>
                        
                    ))}
                  </div>
                </div>
                
                {/* Experience details */}
                <div className={styles.experienceDetails}>
                  <div className={styles.metaInfo}>
                    <FiCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  
                  {exp.location && (
                    <div className={styles.metaInfo}>
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  )}
                  
                  <ul className={styles.descriptionList}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={styles.descriptionItem}>
                        <span className={styles.bulletPoint}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.skills && exp.skills.length > 0 && (
                    <div className={styles.skillsContainer}>
                      <div className={styles.skillsList}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;