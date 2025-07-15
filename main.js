document.getElementById("toggleMode").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save preference
  const newMode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", newMode);

  // Optionally change icon
  document.getElementById("toggleMode").textContent = newMode === "dark" ? "☀️" : "🌙";
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("toggleMode").textContent = "☀️";
  }
});
