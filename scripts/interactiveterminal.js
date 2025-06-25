document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");

  const commands = {
    help: "Available commands: help, about, open-window, languages, tools",
    about: "OPEN_ABOUT_WINDOW", // signal to open about page
    languages: "Python, JavaScript, C++, Bash, HTML/CSS",
    tools: "Burp Suite, Wireshark, Metasploit, Nmap, SQLMap",
    python: "Python is a versatile programming language used for web development, data analysis, artificial intelligence, and more.",
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
        if (commands[cmd] === "OPEN_WINDOW") {
          openCustomWindow(); // You define this function
        } else if (commands[cmd] === "OPEN_ABOUT_WINDOW") {
          openAboutWindow(); // You define this function
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


//this is the test window function
function openCustomWindow() {
  const win = document.createElement("div");
  win.className = "terminal-container";
  win.style.top = "200px";
  win.style.left = "200px";
  win.innerHTML = `
    <div class="terminal-header">
      <span class="terminal-dot red" onclick="this.parentElement.parentElement.remove()"></span>
      <span class="terminal-title">custom@kali:~</span>
    </div>
    <div class="terminal-body">
      <p>This is a custom window opened from the terminal command!</p>
    </div>
  `;
  document.body.appendChild(win);
}

//this is the function that opens the window for the about page
function openAboutWindow() {
  const win = document.createElement("div");
  win.className = "terminal-container";
  win.style.top = "220px";
  win.style.left = "220px";
  win.innerHTML = `
    <div class="terminal-header">
      <span class="terminal-dot red" onclick="this.parentElement.parentElement.remove()"></span>
      <span class="terminal-title">about@kali:~</span>
    </div>
    <div class="terminal-body">
      <p>This is my digital portfolio, styled after Kali Linux — a popular tool for cybersecurity enthusiasts and hackers alike.</p>
      <p>Explore the terminal or click desktop icons to learn more. Thanks for visiting!</p>
    </div>
  `;
  document.body.appendChild(win);
}

