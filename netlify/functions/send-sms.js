// netlify/functions/send-sms.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { name, phone, message } = JSON.parse(event.body);

  const body = {
    messages: [
      {
        source: "javascript",
        body: `New contact from ${name}, ${email} (${phone}): ${message}`,
        to: "+61421866619", // Your number here in international format
        from: "YourWay"
      }
    ]
  };

  const response = await fetch("https://rest.clicksend.com/v3/sms/send", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + Buffer.from("yourwaytweed@gmail.com:E2798917-1224-97FF-91C3-71AFCCDD2F8C").toString("base64"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SMS sent successfully!" })
    };
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send SMS", details: data })
    };
  }
};
