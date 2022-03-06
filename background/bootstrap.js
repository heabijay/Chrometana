(function() {
  "use strict";
  var use_custom_engine;
  var custom_engine;
  var storageChange;
  var enable_open_website;
  var cortana_only;
  var exclude_settings_app;

  /**
   * @param {string} url 
   * @returns {string}
   */
  function convertURL(url) {
    url = url.replace(/%20/g, "+");
    return url.replace("terrasoft.ru/", "terrasoft.ua/");
  }

  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var newurl = convertURL(details.url);
      if (newurl !== details.url) {
        return { redirectUrl: newurl };
      }
    },
    { urls: ["*://*.terrasoft.ru/*"] },
    ["blocking"],
  );

  // Fallback when Chrome is not already running
  chrome.runtime.onMessage.addListener(onMessage);
  function onMessage(request, sender, callback) {
    if (request.action === "convertURL") {
      callback(convertURL(request.url));
    }
    return true;
  }
})();
