const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update button text
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Enable Light Mode";
  } else {
    toggleBtn.textContent = "Enable Dark Mode";
  }
});
