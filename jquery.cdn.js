    var websiteUrl = window.location.href;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/hk/Track_Website/listener.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("websiteUrl="+websiteUrl);
