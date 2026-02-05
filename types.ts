import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface StatItem {
  value: string;
  label: string;
  color: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  highlight: string;
  icon: React.ComponentType<any>;
  bgColor: string;
  dotColor: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  points: string[];
  highlight: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  cta?: string;
}