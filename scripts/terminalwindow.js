// 🔴 Close button
document.getElementById("btn-close").addEventListener("click", () => {
  terminal.style.display = "none";
});

// 🟡 Minimise button
document.getElementById("btn-minimise").addEventListener("click", () => {
  const body = terminal.querySelector(".terminal-body");
  const resize = terminal.querySelector(".resize-handle");
  const isMinimised = terminal.classList.toggle("minimised");

  if (isMinimised) {
    body.style.display = "none";
    resize.style.display = "none";
  } else {
    body.style.display = "block";
    resize.style.display = "block";
  }
});

// 🟢 Maximise button
document.getElementById("btn-maximise").addEventListener("click", () => {
  terminal.classList.toggle("maximised");

  if (terminal.classList.contains("maximised")) {
    terminal.style.top = "0";
    terminal.style.left = "0";
    terminal.style.width = "100%";
    terminal.style.height = "100vh";
    terminal.style.borderRadius = "0";
  } else {
    terminal.style.width = "700px";
    terminal.style.height = "auto";
    terminal.style.top = "100px";
    terminal.style.left = "100px";
    terminal.style.borderRadius = "8px";
  }
});

document.getElementById("open-terminal").addEventListener("click", () => {
  const terminal = document.getElementById("terminal");

  terminal.style.display = "block"; // Show terminal if hidden
  terminal.classList.remove("minimised"); // Optional: remove minimised state
  terminal.classList.remove("maximised"); // Optional: prevent stuck fullscreen

  // Reset styles if needed
  terminal.style.width = "700px";
  terminal.style.height = "auto";
  terminal.style.top = "100px";
  terminal.style.left = "100px";

  const body = terminal.querySelector(".terminal-body");
  const resize = terminal.querySelector(".resize-handle");
  body.style.display = "block";
  resize.style.display = "block";
});
