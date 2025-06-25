document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const header = document.getElementById("terminalHeader");
  

  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  header.addEventListener("mousedown", (e) => {
    if (terminal.classList.contains("maximised")) return;

    const rect = terminal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    isDragging = true;
    document.body.style.userSelect = "none"; // prevent text highlighting
    header.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    terminal.style.left = `${e.clientX - offsetX}px`;
    terminal.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    header.style.cursor = "grab";
    document.body.style.userSelect = "";
  });

  header.style.cursor = "grab";
});


// this is to resize the terminal window
const resizeHandle = document.querySelector(".resize-handle");

resizeHandle.addEventListener("mousedown", function (e) {
  e.preventDefault();

  const startX = e.clientX;
  const startY = e.clientY;
  const startWidth = parseInt(document.defaultView.getComputedStyle(terminal).width, 10);
  const startHeight = parseInt(document.defaultView.getComputedStyle(terminal).height, 10);

  function doDrag(e) {
    terminal.style.width = startWidth + (e.clientX - startX) + "px";
    terminal.style.height = startHeight + (e.clientY - startY) + "px";
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }

  document.documentElement.addEventListener("mousemove", doDrag, false);
  document.documentElement.addEventListener("mouseup", stopDrag, false);
});
