export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}


export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  logo?: string;
  description: string[];
  skills?: string[];
  refs?: Refs[]
}

interface Refs {
  label: string,
  link: string
}

export interface SkillSet {
  title: string,
  items: Skills[]
}

interface Skills {
  label: string,
  logo: string
}

export interface IServiceItem {
  title: string,
  icons: string[],
  shortDescription: string,
  description: string
}