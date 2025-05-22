// netlify/functions/send-sms.js
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, phone, email, message } = JSON.parse(event.body);

  const payload = {
    messages: [
      {
        source: "javascript",
        body: `New enquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        to: "61421866619", // Replace with your mobile e.g. 61412345678
        from: "YourWay"
      }
    ]
  };

  const response = await fetch("https://rest.clicksend.com/v3/sms/send", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa("yourwaytweed@gmail.com:E2798917-1224-97FF-91C3-71AFCCDD2F8C"), // Replace
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, result })
  };
}
