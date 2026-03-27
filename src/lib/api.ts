export const API_BASE_URL = "https://washu-resource-ai-fc71.onrender.com";

export interface PlanRequest {
  goal: string;
  major: string;
  year: string;
}

export interface Resource {
  name: string;
  description: string;
  url?: string;
  category?: string;
}

export interface WeeklyAction {
  week: number;
  tasks: string[];
}

export interface PlanResponse {
  resources: Resource[];
  weekly_plan: WeeklyAction[];
  thirty_day_plan: string[];
  email_template?: string;
}

export async function generatePlan(data: PlanRequest): Promise<PlanResponse> {
  const res = await fetch(`${API_BASE_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }

  return res.json();
}

export const MAJORS = [
  "Computer Science",
  "Business",
  "Biology",
  "Economics",
  "Psychology",
  "Political Science",
  "Mathematics",
  "Engineering",
  "Chemistry",
  "English",
  "Pre-Med",
  "Finance",
  "Data Science",
  "Neuroscience",
  "Architecture",
  "Art",
  "Philosophy",
  "Other",
];

export const YEARS = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Graduate",
];
