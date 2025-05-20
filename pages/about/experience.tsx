import styles from '@/styles/ExperiencePage.module.css';
import { ExperienceItem } from '@/types';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { motion } from 'framer-motion';

const ExperiencePage = () => {

 const experiences: ExperienceItem[] = [
  {
    company: "Mocha Technologies",
    role: "Software Engineer II",
    duration: "Jun 2024 - Present",
    location: "Remote",
    logo: "/logos/mocha-logo.jpg",
    description: [
      "Led a team of 4 engineers to deliver core features for an accounting SaaS platform, ensuring timely delivery and business alignment.",
      "Architected a FIFO-based inventory system with GST/HSN compliance, reducing errors and enhancing audit readiness.",
      "Built a recurring transaction engine with automated reminders (cron jobs) to boost user engagement and retention.",
      "Optimized financial reports by refining complex SQL queries, cutting report generation time significantly.",
      "Implemented double-entry ledger accounting with RBAC, enabling secure, multi-tenant data access."
    ],
    skills: ["PHP", "Laravel", "React.js", "AWS", "CI/CD"],
  },
  {
    company: "Confidosoft Solution Pvt Ltd",
    role: "Jr. Software Engineer",
    duration: "May 2023 - Jun 2024",
    location: "Vadodate, Ind",
    logo: "/logos/confidosoft-logo.jpg",
    description: [
      "Built a data migration pipeline between Veeva Vault and IRMS for pharma clients.",
      "Developed .NET Core Web APIs for GST, handling full lifecycle from research to deployment.",
      "Migrated pharma client data with focus on accuracy and compliance.",
      "Implemented debugging on enterprise PaaS, improving issue resolution.",
      "Collaborated with cross-functional teams for seamless tech integration."
    ],
    skills: ["C#", ".NET Core", "Angular", "MSSQL", "RabitMQ", "Azure", "Socket.io", "REST API", "Neuron ESB"]
  },
  {
    company: "WRTeam",
    role: "Software Engineer Intern",
    duration: "Dec 2022 - April 2023",
    location: "Bhuj, Ind",
    logo: "/logos/wrteam-logo.jpg",
    description: [
      "Built a responsive grocery e-commerce platform using React.js and Redux",
      "Implemented real-time delivery location capture with Google Maps API",
      "Integrated Razorpay and Stripe APIs for payment processing"
    ],
    skills: ["JavaScript", "React.js", "Redux", "Postman"],
    refs: [{label: "live", link: "https://egrocerweb.wrteam.me/"}],
  }
];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My career journey and key accomplishments
          </motion.p>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  };
}

export default ExperiencePage;  