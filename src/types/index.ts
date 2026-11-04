export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'Full-Stack' | 'Mobile' | 'AI & System' | 'Desktop';
  technologies: string[];
  features: string[];
  architecture?: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Development' | 'Prototype';
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Familiar'
    tag?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  category: 'Education' | 'OJT' | 'Project' | 'Learning';
  description: string;
  highlights: string[];
  technologies?: string[];
  isPlaceholder?: boolean;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
}

