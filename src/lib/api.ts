export const API_BASE_URL = "https://washu-resource-ai-fc71.onrender.com";

export interface ChatRequest {
  year: string;
  major: string;
  question: string;
}

export interface Resource {
  name: string;
  type?: string;
  description: string;
  url?: string;
  why_matched?: string;
}

export interface ChatResponse {
  answer: string;
  resources: Resource[];
}

export async function sendChat(data: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE_URL}/chat`, {
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
  "Aerospace Engineering",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Engineering",
  "Computer Science",
  "Data Science",
  "Electrical Engineering",
  "Environmental Engineering",
  "Mechanical Engineering",
  "Systems Science & Engineering",
  "Undeclared Engineering",
];

export const YEARS = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Graduate",
];
