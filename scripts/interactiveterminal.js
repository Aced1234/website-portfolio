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
//this test window will be the code that should be copied when another window is needed to be created.
//to create a new window, just copy this function and change the name of the function and the innerHTML of the win variable
//an example of how to modify this function is provided below for the about window. Look above at the const commands to find how to make the window openable
//an "else if" statement will also need to be added to the input event listener above to ensure the window can be opened from the terminal command
function openCustomWindow() {
  const win = document.createElement("div");
  win.className = "terminal-container";
  win.style.top = "200px";
  win.style.left = "200px";
  win.style.position = "absolute";
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

  makeDraggable(win);
}

//this is the function that opens the window for the about page
function openAboutWindow() {
  const win = document.createElement("div");
  win.className = "terminal-container";
  win.style.top = "200px";
  win.style.left = "200px";
  win.style.position = "absolute";
  win.innerHTML = `
<div class="terminal-header" style="cursor: move;">
  <span class="terminal-dot red" onclick="this.parentElement.parentElement.remove()"></span>
  <span class="terminal-title">about@kali:~</span>
</div>
<div class="terminal-body" style="padding: 24px 32px; font-family: sans-serif; background: #fff; color: #000; max-height: 400px; overflow-y: auto; border-radius: 0 0 6px 6px;">

  <h1 style="text-align: center; font-size: 24px; margin-top: 0; margin-bottom: 16px;"><strong>Welcome to my Portfolio!</strong></h1>

  <p style="font-size: 16px; margin-bottom: 18px;">
    <strong><u>This is my digital portfolio, styled after Kali Linux</u></strong>, a powerful platform used by cybersecurity professionals and ethical hackers.
  </p>

  <p style="font-size: 15px; margin-bottom: 18px;">
    The <strong>Desktop</strong> interface includes clickable icons representing key tools, experiences, and projects from my career in cybersecurity. Everything is designed to emulate the environment I'm most comfortable working in.
  </p>

  <p style="font-size: 15px; margin-bottom: 18px;">
    The <strong>Top Bar</strong> features access to important system functions, while the <strong>Terminal</strong> is fully interactive — allowing you to type custom commands to explore my portfolio or open new windows.
  </p>

  <p style="font-size: 15px; margin-bottom: 18px;">
    You can navigate the site by clicking desktop icons or by typing commands like <code>help</code>, <code>about</code>, <code>languages</code>, or <code>tools</code> into the terminal.
  </p>

  <p style="font-size: 15px; margin-bottom: 18px;">
    <strong>This portfolio is optimised for desktop viewing.</strong> Mobile experience may be limited.
  </p>

  <ul style="font-size: 15px; padding-left: 20px; margin-bottom: 0;">
    <li><strong>Windows</strong> can be <strong>dragged</strong> and optionally <strong>resized</strong>.</li>
    <li><strong>Red</strong> = close, <strong>Yellow</strong> = minimise, <strong>Green</strong> = maximise to full screen.</li>
  </ul>
</div>
  `;
  document.body.appendChild(win);

  makeDraggable(win);
}

