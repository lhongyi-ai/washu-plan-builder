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
  const MAX_RETRIES = 2;
  const TIMEOUT_MS = 90_000; // 90 seconds to allow Render cold-start

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (res.status === 502 || res.status === 503) {
        if (attempt < MAX_RETRIES) {
          // Render cold-start: wait and retry
          await new Promise((r) => setTimeout(r, 5000));
          continue;
        }
        throw new Error(
          "Backend service is starting up. Please wait 30-60 seconds and try again."
        );
      }

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(
          `Request failed (${res.status})${body ? ": " + body.slice(0, 200) : ""}`
        );
      }

      return res.json();
    } catch (err: any) {
      if (err.name === "AbortError") {
        if (attempt < MAX_RETRIES) {
          await new Promise((r) => setTimeout(r, 3000));
          continue;
        }
        throw new Error(
          "Request timed out. The backend may be waking up — please try again in 30 seconds."
        );
      }
      // Network error (Failed to fetch) — retry once
      if (attempt < MAX_RETRIES && err.message?.includes("Failed to fetch")) {
        await new Promise((r) => setTimeout(r, 5000));
        continue;
      }
      throw err;
    }
  }

  throw new Error("Request failed after retries. Please try again later.");
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
