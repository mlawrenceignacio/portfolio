export type ProjectCategory = "web" | "mobile" | "desktop";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  year: number;
  repo_url: string | null;
  live_url: string | null;
  is_featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "others";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number | null;
  type: "cert" | "award";
}

export interface MessageFormData {
  name: string;
  email: string;
  message: string;
}
