chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ locked: true });
});

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "popup.html" });
});
