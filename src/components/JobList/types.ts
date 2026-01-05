export interface FeaturedJob {
  // id: number;
  title: string;
  company: string;
  location: string;
  timeAgo: string;
  applicants: number;
  salary?: string;
  isFeatured?: boolean;
  logoUrl?: string;
}
