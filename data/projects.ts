export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'CommunityGrid',
    description:
      'Built for a real client, CommunityGrid is a fully responsive community website with Google Sheets as the backend and Firebase Hosting for deployment. It embraces a serverless DevOps approach with automated workflows, authentication, and SEO-optimized architecture.',
    logo: '/logos/communitygrid-logo.svg',
    link: 'https://kutchmewadasuthar.org/',
    slug: 'community-web-app',
  },
  {
    title: 'Portfolio',
    description:
      '🔥 My personal portfolio website, built to showcase my work and skills.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/SutharUtsav/SutharUtsav.github.io',
    slug: 'portfolio',
  },
];
