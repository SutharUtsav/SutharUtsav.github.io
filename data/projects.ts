import { Project } from "@/types";


export const projects: Project[] = [
  {
    title: 'GoalTrackr',
    description:
      'GoalTrackr is a lightweight Jira clone designed for agile teams to efficiently plan, track, and manage projects. It features sprints, boards, backlogs, issue types, and role-based access — all built with a focus on simplicity, speed, and team productivity.',
    logo: '/logos/goaltrackr_logo.svg',
    links: [{
      link: 'https://goal-trackr.vercel.app/',
      type: 'live-link'
    }],
    slug: 'task-manager-app',
  },
  {
    title: 'EGrocer',
    description:
      'Built a responsive customer-facing panel using React and Redux with features for product browsing, cart management, and order tracking. Enabled seamless shopping experience across multiple vendors.',
    logo: '/logos/egrocer_logo.png',
    links: [
    {
      link: "https://egrocerweb.wrteam.me/",
      type: "live-link"    
    },
    {
      link: 'https://github.com/SutharUtsav/eGrocer',
      type: 'github'
    }],
    slug: 'ecommerce-website',
  },
  {
    title: 'CineReserve',
    description:
      'Online movie ticket booking system with real-time seat reservations, show scheduling, snack ordering, and admin panel for managing movies and bookings. Secured with JWT, refresh tokens, and OTP. Used MySQL and MongoDB for data storage.',
    logo: '/logos/cinereserve_logo.png',
    links: [{
      link: 'https://github.com/SutharUtsav/Online_Movie_Ticket_Booking_System',
      type: 'github'
    }],
    slug: 'movie-ticket-booking-app',
  },
  {
    title: 'CommunityGrid',
    description:
      'Built for a real client, CommunityGrid is a fully responsive community website with Google Sheets as the backend and Firebase Hosting for deployment. It embraces a serverless DevOps approach with automated workflows, authentication, and SEO-optimized architecture.',
    logo: '/logos/communitygrid-logo.svg',
    links: [{
      link: 'https://kutchmewadasuthar.org/',
      type: 'live-link'
    }],
    slug: 'community-web-app',
  },
  {
    title: 'RechargeX',
    description:
      'Developed an online mobile recharge system allowing users to recharge prepaid numbers, view transaction history, and manage accounts with secure authentication and real-time recharge status updates.',
    logo: '/logos/rechargex.jpg',
    links: [{
      link: 'https://github.com/SutharUtsav/Online_Mobile_Recharge_System',
      type: 'github'
    },
    {
      link: 'https://drive.google.com/file/d/10e7shlmjJ2o5IY82Na6ULJp6ZhguPOU-/view?usp=sharing',
      type: 'video'
    }
    ],
    slug: 'community-web-app',
  },
  {
    title: 'MailClone',
    description:
      'Built a Gmail-inspired web email system with features like sending/receiving emails, image sharing, search, draft saving, and sent mail management for smooth user communication.',
    logo: '/logos/mailclone_logo.jpg',
    links: [{
      link: 'https://github.com/SutharUtsav/Online-Email-System',
      type: 'github'
    }],
    slug: 'community-web-app',
  },
  {
    title: 'Portfolio',
    description:
      '🔥 My personal portfolio website, built to showcase my work and skills.',
    logo: '/logos/vsc.svg',
    links: [{ 
      link: 'https://github.com/SutharUtsav/SutharUtsav.github.io',
      type: 'github'
    }],
    slug: 'portfolio',
  },
];
