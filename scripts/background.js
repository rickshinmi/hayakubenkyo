chrome.browserAction.onClicked.addListener(
  () => {
    chrome.tabs.getSelected(
      null,
      (tabRef) => {
        let tabUrl = tabRef.url;
        if (tabUrl.indexOf("chrome.google.com/webstore") >= 0) {
          alert("この拡張機能はChrome Web Storeで動かないよ！\n" +
                "別のタブで試してみてね！.\n" +
                "早く勉強しろぉ、ばか、");
        } 
        else if (tabUrl.indexOf("chrome://") >= 0) {
          alert("この拡張機能はこのたぶで動かないよ！\n" +
                "別のタブで試してみてね！\n" +
                "早く勉強しろぉ、ばか、");
        }
        chrome.tabs.executeScript(
          null,
          { file: "scripts/jquery.min.js" },
          () => {
            chrome.tabs.executeScript(
              null,
              { file: "scripts/doit.js" },
              null
            );
          }
        );
      }
    );
  }
);
