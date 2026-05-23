/**
 * Types declarations for Rapid Business Consultancy website.
 */

export type PageId =
  | "home"
  | "about"
  | "services"
  | "compliance"
  | "scholarships"
  | "blog"
  | "portfolio"
  | "testimonials"
  | "contact"
  | "booking";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name mapping
  bulletPoints: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  services: ServiceDetail[];
}

export interface ComplianceAgency {
  id: string;
  name: string;
  fullName: string;
  logoText: string;
  description: string;
  requirements: string[];
  ctaText: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  type: "Zambian" | "International" | "Study Abroad";
  location: string;
  coverage: string; // Fully Funded, Partial, etc.
  description: string;
  eligibility: string[];
  deadline: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Business" | "Scholarship" | "Compliance" | "Tax" | "HR" | "Branding";
  author: string;
  date: string;
  readTime: string;
  imageAlt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Company Profiles" | "Branding & Identity" | "Social Media Design" | "Business Documents";
  client: string;
  description: string;
  features: string[];
  imageSource: string; // fallback SVG representation mapping
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1-5
  category: "Business" | "Scholarship" | "Compliance";
}

export interface ConsultationBooking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  inquiryDetails: string;
  status: "Pending" | "Confirmed";
  createdAt: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
