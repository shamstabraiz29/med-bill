export interface LargePracticeStat {
  value: string;
  label: string;
}

export interface LargePracticeGoal {
  label: string;
  iconName?: string;
}

export interface LargePracticeKpiChartItem {
  label: string;
  value: number;
}

export interface LargePracticeAuditMetricItem {
  title: string;
  description: string;
}

export interface LargePracticeServiceItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface LargePracticeFlowchartStep {
  title: string;
  description: string;
  iconName?: string;
}

export interface LargePracticeProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName?: string;
}

import type { PageSeo } from './seo';

export interface LargePracticesPageData {
  seo?: PageSeo;
  hero: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    ctaText: string;
    ctaHref: string;
    stats: LargePracticeStat[];
  };
  commonGoals: {
    titlePlain: string;
    titleHighlight: string;
    goals: LargePracticeGoal[];
  };
  infrastructure: {
    titlePlain: string;
    titleHighlight?: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    ctaText: string;
    ctaHref: string;
  };
  kpis: {
    titlePlain: string;
    titleHighlight: string;
    description: string;
    chartItems: LargePracticeKpiChartItem[];
  };
  auditMetrics: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    metrics: LargePracticeAuditMetricItem[];
  };
  personalizedServices: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    ctaText: string;
    ctaHref: string;
    imageSrc?: string;
    imageAlt?: string;
  };
  billingFlowchart: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    steps: LargePracticeFlowchartStep[];
  };
  workProcess: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    steps: LargePracticeProcessStep[];
  };
  addOnServices: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    services: LargePracticeServiceItem[];
  };
}
