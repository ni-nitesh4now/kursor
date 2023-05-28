// Create a context menu item
chrome.contextMenus.create({
  id: "ask-kursor",
  title: "Ask Kursor",
  contexts: ["all"],
});

// Listen for when the user clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ask-kursor") {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { type: "ASK_KURSOR" }, function (res) {
      if (res.text) {
        chrome.storage.sync.set({ dataValue1: res.text });
        chrome.windows.create({
          url: "dialogue.html",
          height: 150,
          width: 200,
          top: res.y,
          left: res.x,
          type: "popup",
        });
      }
    });
  }
});
