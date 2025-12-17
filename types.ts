import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionContent {
  title: string;
  content: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}