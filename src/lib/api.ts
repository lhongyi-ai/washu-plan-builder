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
  type?: string;
  why_matched?: string;
}

export interface PlanResponse {
  answer: string;
  resources: Resource[];
}

export async function generatePlan(data: PlanRequest): Promise<PlanResponse> {
  const res = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: data.goal,
      major: data.major,
      year: data.year,
    }),
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
