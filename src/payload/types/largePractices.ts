export interface LargePracticeStat {
  value: string;
  label: string;
}

export interface LargePracticeGoal {
  label: string;
  iconName?: string;
}

export interface LargePracticeHighlight {
  title: string;
  description: string;
}

export interface LargePracticeKpi {
  number: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface LargePracticeMetric {
  value: string;
  label: string;
  subtitle?: string;
}

export interface LargePracticeServiceItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface LargePracticeFlowchartStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface LargePracticeProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface LargePracticesPageData {
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
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    goals: LargePracticeGoal[];
  };
  infrastructure: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    description: string;
    highlights: LargePracticeHighlight[];
  };
  kpis: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    cards: LargePracticeKpi[];
  };
  auditMetrics: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    metrics: LargePracticeMetric[];
  };
  personalizedServices: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
    services: LargePracticeServiceItem[];
  };
  billingFlowchart: {
    badge: string;
    titlePlain: string;
    titleHighlight: string;
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
    services: LargePracticeServiceItem[];
  };
}
