const $ = (selector) => document.querySelector(selector);

function openChat() {
  $("#chatbox").hidden = false;
  $("#chatInput").focus();
}

function toggleChat() {
  const chatbox = $("#chatbox");
  chatbox.hidden = !chatbox.hidden;
  if (!chatbox.hidden) $("#chatInput").focus();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function answerQuestion(question) {
  const text = question.toLowerCase();
  if (text.includes("apply") || text.includes("application") || text.includes("admission")) {
    return "For direct admission support, tap the WhatsApp button and message Edu Pedia at +995 579 263 930.";
  }
  if (text.includes("whatsapp") || text.includes("phone") || text.includes("contact")) {
    return "Use the WhatsApp contact section. It opens a ready message to +995 579 263 930 for admission and questions.";
  }
  if (text.includes("university") || text.includes("universities")) {
    return "The Universities section shows BAU International University Batumi, KMI Medical Institute, and European University.";
  }
  if (text.includes("visa") || text.includes("travel") || text.includes("process")) {
    return "The admission process goes from WhatsApp contact to university choice, documents, visa and travel, then flying abroad.";
  }
  if (text.includes("social") || text.includes("instagram") || text.includes("youtube") || text.includes("facebook")) {
    return "The social links are in the footer: YouTube, X, Instagram, and Facebook.";
  }
  return "I can help with WhatsApp contact, universities, admission steps, visa support, travel guidance, and social links.";
}

$("#exploreUniversities").addEventListener("click", () => {
  document.querySelector("#universities").scrollIntoView({ behavior: "smooth" });
});

const languageMenu = $(".language-menu");
const languageTrigger = $(".language-trigger");

languageTrigger.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("open");
  languageTrigger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".language-options button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".language-options button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    languageTrigger.querySelector("span:last-child").textContent = button.textContent;
    languageMenu.classList.remove("open");
    languageTrigger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!languageMenu.contains(event.target)) {
    languageMenu.classList.remove("open");
    languageTrigger.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 },
);

document.querySelectorAll(".reveal-process, .reveal-stories, .reveal-universities").forEach((section) => {
  revealObserver.observe(section);
});

$("#chatToggle").addEventListener("click", toggleChat);
$("#closeChat").addEventListener("click", () => {
  $("#chatbox").hidden = true;
});

$("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#chatInput");
  const question = input.value.trim();
  if (!question) return;

  const messages = $("#chatMessages");
  messages.insertAdjacentHTML("beforeend", `<p class="user-message">${escapeHtml(question)}</p>`);
  messages.insertAdjacentHTML("beforeend", `<p class="bot-message">${escapeHtml(answerQuestion(question))}</p>`);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});

const dot = $(".cursor-dot");
const ring = $(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseenter", () => ring.classList.add("active"));
  element.addEventListener("mouseleave", () => ring.classList.remove("active"));
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();
