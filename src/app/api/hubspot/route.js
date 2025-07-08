export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, page } = body;

    const hubspotResponse = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/243215306/07cfc338-f421-4b64-ba6f-409c6dfc845d',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: name },
            { name: 'email', value: email },
            { name: 'phone', value: phone },
            { name: 'company', value: company },
            { name: 'message', value: message },
          ],
          context: {
            pageUri: page,
            pageName: 'Contact Form',
          },
        }),
      }
    );

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text();
      console.error('HubSpot API Error:', hubspotResponse.status, errorText);
      throw new Error('HubSpot submission failed');
    }

    return Response.json({ success: true, message: 'Submitted to HubSpot' });

  } catch (error) {
    console.error('Server error:', error.message);
    return Response.json({ success: false, message: 'Submission failed', error: error.message }, { status: 500 });
  }
}
