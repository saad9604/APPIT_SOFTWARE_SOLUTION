export async function loadApiBaseUrl() {
  const response = await fetch('/api.js');
  const text = await response.text();

  const match = text.match(/NEXT_PUBLIC_API_BASE_URL\s*=\s*"(.*)"/);
  if (match) {
    return match[1];
  } else {
    throw new Error("API base URL not found in api.js");
  }
}