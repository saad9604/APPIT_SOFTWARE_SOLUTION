export async function POST(request) {
  const body = await request.json();

  const response = await fetch("https://apiappit.appitsoftware.com/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}