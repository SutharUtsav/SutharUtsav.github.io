import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GithubPage from '../github';

import { Repo, User } from '@/types';
import styles from '@/styles/AboutPage.module.css';

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
          <h2 className={styles.sectionTitle}>What I do?</h2>
          <div className={styles.whatIDoSectionContainer}>
            <div className={styles.fullStackDevelopment}>
              <ul>
                <h3 className={styles.highlight}>Full Stack Development</h3>
                <li className={styles.paragraph}>Creating application backend in Laravel PHP, C# .NET, Node, Express & Django</li>
                <li className={styles.paragraph}>Designing and implementing RESTful APIs for seamless integration</li>
                <li className={styles.paragraph}>Continuously learning and staying updated on the latest web development trends and technologies</li>
              </ul>
            </div>
          </div>

          <div className={styles.whatIDoSectionContainer}>
            <div className={styles.cloudInfraArchitechture}>
              <ul>
                <h3 className={styles.highlight}>Cloud Infra-Architecture</h3>
                <li className={styles.paragraph}>Working on multiple cloud platforms</li>
                <li className={styles.paragraph}>Working with databases such as MySQL, MongoDB, or PostgreSQL</li>
                <li className={styles.paragraph}>Implementing continuous integration and deployment (CI/CD) pipelines for cloud-based applications</li>
                <li className={styles.paragraph}>Hosting and maintaining websites on virtual machine instances along with integration of databases</li>
                <li className={styles.paragraph}>Deploying applications on cloud to use on mobile devices</li>
              </ul>
            </div>
          </div>
        </div>

        {loading || !user ? (
          <></>
        ) : 
          <GithubPage repos={repos} user={user}/>
        }

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
