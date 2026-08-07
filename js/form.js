const API_URL = CONFIG.API_URL;

const form = document.getElementById("contactForm");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const button = document.getElementById("submitBtn");

// Character Counter
message.addEventListener("input", () => {
  counter.textContent = `${message.value.length} / 500`;
});

// Form Submit
form.addEventListener("submit", async (e) => {

  e.preventDefault();

  button.innerHTML = "⏳ Sending...";
  button.disabled = true;

  // Create Form Data
  const formData = {
  name: document.getElementById("name").value.trim(),
  business: document.getElementById("business").value.trim(),
  email: document.getElementById("email").value.trim(),
  phone: document.getElementById("phone").value.trim(),
  service: document.getElementById("service").value,
  message: document.getElementById("message").value.trim(),

  affiliateId: document.getElementById("affiliateId").value.trim(),
  affiliatePhone: document.getElementById("affiliatePhone").value.trim()
};

  try {

    // Convert object to URL encoded format
    const body = new URLSearchParams(formData);

    const response = await fetch(API_URL, {
      method: "POST",
      body: body
    });

    const result = await response.json();

    if (result.success) {

      alert("🎉 Thank you!\n\nYour enquiry has been received.\nOur team will contact you within 24 hours.");

      form.reset();
      counter.textContent = "0 / 500";

    } else {

      alert("❌ " + result.message);

    }

  } catch (error) {

    console.error(error);

    alert("⚠️ Unable to connect to the server. Please try again later.");

  }

  button.innerHTML = "🚀 Send Project Enquiry";
  button.disabled = false;

});