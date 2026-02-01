import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  text: string;
  stars: number;
}

export interface FAQItem {
  question: string;
}