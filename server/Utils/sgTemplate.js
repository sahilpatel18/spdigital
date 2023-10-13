const sgTemplate = (name, company, email, phone, message) => ({
  to: "sahilwebdev@gmail.com",
  from: "sahilwebdev@gmail.com",
  subject: `Contact Request ${name}`,
  text: "hello",
  html: `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
        </head>
        <body>
            <h2>SPDIGITAL: ${name}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </body>
    `,
});

module.exports = sgTemplate;
