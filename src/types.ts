export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  video?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  certificate?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'Certificate' | 'Award' | 'Hackathon';
  image?: string;
}