// listen for tab updates and inject the code when necessary
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.status == "complete" &&
    tab.url != undefined
  ) {
    console.log("Tab updated! Tab URL: " + tab.url);
    console.log("Tabid: " + tabId);
    // tabUpdated = true;
    chrome.tabs.executeScript(tabId, {
      file: "inject.js",
    });
  }
});

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.ib, {
    file: "inject.js",
  });
});
