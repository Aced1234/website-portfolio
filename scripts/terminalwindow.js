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
    terminal.style.top = "40px";
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


window.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const body = terminal.querySelector(".terminal-body");

  // Prevent duplicate message on re-open
  const previousMessage = document.getElementById("terminal-welcome");
  if (previousMessage) previousMessage.remove();

  // ✅ Insert welcome message above the input line
  const welcome = document.createElement("div");
  welcome.classList.add("line");
  welcome.id = "terminal-welcome";
  welcome.textContent = "Hi and welcome to my portfolio! You may opt to use the command terminal or select the desktop icons on the right for more information. Type 'help' for a list of commands or 'about' to learn more about this portfolio.";

  const inputLine = body.querySelector(".line");
  if (inputLine) {
    body.insertBefore(welcome, inputLine);
  } else {
    body.appendChild(welcome);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("open-terminal-icon");
  const terminal = document.getElementById("terminal");
  const body = document.getElementById("terminal-body");

  if (icon) {
    icon.addEventListener("click", () => {
      // Show terminal if it's hidden
      terminal.style.display = "block";

      // If there's no input field, re-inject welcome + input
      if (!document.getElementById("terminal-input")) {
        // Insert welcome message
        const welcome = document.createElement("div");
        welcome.classList.add("line");
        welcome.id = "terminal-welcome";
        welcome.innerHTML = `Hi and welcome to my portfolio! You may opt to use the command terminal or select the desktop icons on the right for more information. Type 'help' to begin.`;
        body.appendChild(welcome);

        // Insert input line
        const inputLine = document.createElement("div");
        inputLine.classList.add("line");
        inputLine.innerHTML = `
          <span class="prompt">root@kali:~#</span>
          <input type="text" id="terminal-input" autocomplete="off" autofocus>
        `;
        body.appendChild(inputLine);

        bindTerminalInput(); // rebind input
      }
    });
  }
});
