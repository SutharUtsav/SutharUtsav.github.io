import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GithubPage from '../github';

import { Repo, User } from '@/types';
import styles from '@/styles/AboutPage.module.css';
import services from '@/data/service';

const AboutPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true);
      const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`),
      ]);

      if(userRes.ok && repoRes.ok) {
        const userData = await userRes.json();
        const repoData = await repoRes.json();
  
        setUser(userData);
        setRepos(repoData);
      }

      setLoading(false);
    };

    fetchGithubData();
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>Utsav Suthar</h1>
        <h2 className={styles.jobTitle}>Software Engineer</h2>

        <p className={styles.pageSubtitle}>
          An individual who converts vague specifications and unrealistic expectations into usable software.
          Keeping calm while everything compiles... eventually.
        </p>
      </div>

      <div className={styles.aboutPage}>
        <div className={styles.whatIDoSection}>
          {services.map((service, index) => (
            <div className={styles.whatIDoSectionContainer} key={index}>
              <h3 className={styles.highlight}>{service.title}</h3>
              <p className={styles.subDescription} style={{color: "rgba(255, 255, 255, 0.7)"}}>{service.shortDescription}</p>
              <p className={styles.description} style={{marginTop:"0.75rem"}}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* {loading || !user ? (
          <></>
        ) : 
          <GithubPage repos={repos} user={user}/>
        } */}

        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>            
          
          <div className={styles.educationContainer}>
            <Link href={'https://www.ddu.ac.in/'} target='_blank'>
              <Image src={'/logos/ddit_logo.png'} alt='Dharmsinh Desai University' width={150} height={150} style={{"borderRadius": "50%"}}/>
            </Link>
            <div className={styles.educationDetail}>
              <h3 className={styles.jobTitle}>Dharmsing Desai University, Nadiad</h3>
              <p className={styles.pageSubtitle}>B.Tech (Computer Engineering)</p>
              <p className={styles.pageSubtitle}>2019-2023</p>
            </div>
          </div>

          <p className={styles.paragraph}>
            I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
            Achieved a commendable CGPA of 8.51, showcasing strong academic performance and a solid understanding of the coursework throughout the degree program.
            Successfully completed several impactful projects, demonstrating practical application of theoretical knowledge and the ability to work on diverse topics within the field of computer science engineering.
          </p>
        </div>

      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
