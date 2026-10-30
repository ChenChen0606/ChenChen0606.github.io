export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  liveUrl?: string;
}

export type IconName = 'email' | 'phone' | 'github' | 'facebook' | 'instagram';

export interface ContactItem {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface SkillGroup {
  label?: string;
  items: string[];
}
