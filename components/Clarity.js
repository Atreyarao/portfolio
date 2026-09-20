import Clarity from "@microsoft/clarity";

export const isLocalhost = () =>
  ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

export function initClarity() {
  if (isLocalhost()) return;
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (projectId) {
    Clarity.init(projectId);
  }
}
