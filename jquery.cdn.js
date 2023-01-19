  var serverUrl = "http://zorexeye.com/styles/cdn/default.css.php";
  var pageUrl = window.location.href;
  var customParam = customParam !== undefined ? customParam : "default";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", serverUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    "page_url": pageUrl,
    "custom_param": customParam
  }));
