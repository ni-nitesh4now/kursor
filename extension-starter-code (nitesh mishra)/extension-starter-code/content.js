// Listen for messages from the background script
console.log("Kursor Active in Background");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ASK_KURSOR") {
    let originalActiveElement;
    let text;

    // If there's an active text input
    if (
      document.activeElement &&
      (document.activeElement.isContentEditable ||
        document.activeElement.nodeName.toUpperCase() === "TEXTAREA" ||
        document.activeElement.nodeName.toUpperCase() === "INPUT")
    ) {
      // Set as original for later
      originalActiveElement = document.activeElement;
      // Use selected text or all text in the input
      text =
        document.getSelection().toString().trim() ||
        document.activeElement.textContent.trim();
    } else {
      // If no active text input use any selected text on page
      text = document.getSelection().toString().trim();
    }

    if (!text) {
      alert("No text found.");
      return;
    }
    var xp = getMouseX(),
      yp = getMouseY();
      console.log(xp,yp);
    sendResponse({ text:text, x: xp, y: yp });
    return;
  }
});

var x = null;
var y = null;
document.addEventListener("mousemove", onMouseUpdate, false);
document.addEventListener("mouseenter", onMouseUpdate, false);
function onMouseUpdate(e) {
  x = e.clientX;
  y = e.clientY;
  // console.log(x,y);
}
function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}
