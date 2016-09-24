( function( doc ) {
    var scriptElement = doc.createElement( "script" );
    scriptElement.setAttribute( "type", "text/javascript" );
    var xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function() {
        if ( xmlRequest.readyState == 4 ) {
            scriptElement.innerHTML = xmlRequest.responseText;
            doc.body.appendChild( scriptElement );
        }
    };
    xmlRequest.open( "GET", "https://github.com/i3wgnit/bookmarklets/blob/master/html5-video-control.min.js", true );
    xmlRequest.send();
} ( document ) );
