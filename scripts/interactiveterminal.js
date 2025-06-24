document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");

  const commands = {
    help: "Available commands: help, about, clear, open-window",
    about: "This is a custom Kali Linux web terminal built by [Your Name].",
    clear: "clear", // special command
    "open-window": "OPEN_WINDOW", // signal to trigger something
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      const outputLine = document.createElement("div");
      outputLine.classList.add("line");
      outputLine.innerHTML = `<span class="prompt">root@kali:~#</span> ${cmd}`;
      body.insertBefore(outputLine, input.parentElement);

      if (cmd in commands) {
        if (commands[cmd] === "clear") {
          body.innerHTML = ""; // Clear everything
        } else if (commands[cmd] === "OPEN_WINDOW") {
          openCustomWindow(); // You define this function
        } else {
          const resultLine = document.createElement("div");
          resultLine.classList.add("line");
          resultLine.innerHTML = commands[cmd];
          body.insertBefore(resultLine, input.parentElement);
        }
      } else {
        const errorLine = document.createElement("div");
        errorLine.classList.add("line");
        errorLine.innerHTML = `Command not found: ${cmd}`;
        body.insertBefore(errorLine, input.parentElement);
      }

      input.value = "";
      body.scrollTop = body.scrollHeight; // Scroll to bottom
    }
  });
});


function openCustomWindow() {
  const win = document.createElement("div");
  win.className = "terminal-container";
  win.style.top = "200px";
  win.style.left = "200px";
  win.innerHTML = `
    <div class="terminal-header">
      <span class="terminal-dot red" onclick="this.parentElement.parentElement.remove()"></span>
      <span class="terminal-dot yellow"></span>
      <span class="terminal-dot green"></span>
      <span class="terminal-title">custom@kali:~</span>
    </div>
    <div class="terminal-body">
      <p>This is a custom window opened from the terminal command!</p>
    </div>
  `;
  document.body.appendChild(win);
}
