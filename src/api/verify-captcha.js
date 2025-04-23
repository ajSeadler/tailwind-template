const fetch = require("node-fetch");

const verifyRecaptcha = async (recaptchaToken) => {
  const secretKey = "YOUR_SECRET_KEY"; // Replace with your reCAPTCHA secret key
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  const response = await fetch(url, {
    method: "POST",
  });

  const data = await response.json();
  return data.success;
};
