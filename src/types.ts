/**
 * Types Definitions for Rini Swing Hub
 */

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  impactMetrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  engagementPeriod: string;
  adSpendText?: string;
  roasText?: string;
  imagePath?: string;
  chartData: {
    name: string;
    organic: number;
    paid: number;
    conversion: number;
  }[];
}

export interface ToolItem {
  name: string;
  category: "AI Content & Video" | "Strategic Workflow" | "Analytics & Social Ad Operations" | "Verified Badges";
  icon: string;
  description: string;
  efficiencyGain: string;
}

export interface Milestone {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  outcomes: string[];
  tags: string[];
}

export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
  message: string;
  submittedAt: string;
}

export interface GCCAuditRequest {
  companyName: string;
  industry: string;
  targetMarket: string;
  monthlyAdSpend: string;
  currentObstacle: string;
}

export interface GCCAuditResponse {
  auditScore: number;
  executiveSummary: string;
  aestheticAuditComment: string;
  digitalFootprintStatus: string;
  suggestedPillars: {
    pillar: string;
    contentIdea: string;
    tacticalAngle: string;
  }[];
  aiToolkitIntegration: {
    tool: string;
    purpose: string;
    estimatedHrsSaved: string;
  }[];
  weeklySchedule: {
    day: string;
    action: string;
    engagementFocalPoint: string;
  }[];
  roiProjection: {
    metric: string;
    projectedGrowth: string;
    justification: string;
  }[];
}
