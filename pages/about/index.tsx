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

      const userData = await userRes.json();
      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData);
      setLoading(false);
    };

    fetchGithubData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Utsav Suthar</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              An individual who converts vague specifications and unrealistic expectations into usable software.
              Keeping calm while everything compiles... eventually.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I do?</h2>
            
            <div className={styles.sectionContainer}>
              <Image loading='lazy' src={'/logos/full_stack_development.jpg'} alt='' width={'450'} height={'250'}/>
              <div>
                <h3 className={styles.highlight} style={{marginBottom:"15px"}}>Full Stack Development</h3>
                <p className={styles.paragraph}>Creating application backend in Laravel PHP, C# .NET, Node, Express & Django</p>
                <p className={styles.paragraph}>Designing and implementing RESTful APIs for seamless integration</p>
                <p className={styles.paragraph}>Continuously learning and staying updated on the latest web development trends and technologies</p>
              </div>
            </div>

            <div className={styles.sectionContainer}>
              <div>
                <h3 className={styles.highlight} style={{marginBottom:"15px"}}>Cloud Infra-Architecture</h3>
                <p className={styles.paragraph}>Working on multiple cloud platforms</p>
                <p className={styles.paragraph}>Working with databases such as MySQL, MongoDB, or PostgreSQL</p>
                <p className={styles.paragraph}> Implementing continuous integration and deployment (CI/CD) pipelines for cloud-based applications</p>
                <p className={styles.paragraph}> Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
                <p className={styles.paragraph}> Deploying applications on cloud to use on mobile devices</p>
              </div>

              <Image loading='lazy' src={'/logos/cloud_infra_architecture.jpg'} alt='' width={'450'} height={'250'}/>

            </div>
          </section>

          <section className={styles.section}>
            {loading || !user ? (
              <p>Loading GitHub data...</p>
            ) : 
              <GithubPage repos={repos} user={user}/>
            }
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>            
            
            <div className={styles.educationContainer}>
              <Link href={'https://www.ddu.ac.in/'} target='_blank'>
                <Image src={'/logos/ddit_logo.png'} alt='Dharmsinh Desai University' width={150} height={150} style={{"borderRadius": "50%"}}/>
              </Link>
              <div className={styles.educationDetail}>
                <h3>Dharmsing Desai University, Nadiad</h3>
                <h4>B.Tech (Computer Engineering)</h4>
                <h5>2019-2023</h5>
              </div>
            </div>

            <p className={styles.paragraph}>
              I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
              Achieved a commendable CGPA of 8.51, showcasing strong academic performance and a solid understanding of the coursework throughout the degree program.
               Successfully completed several impactful projects, demonstrating practical application of theoretical knowledge and the ability to work on diverse topics within the field of computer science engineering.
            </p>
          </section>

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
