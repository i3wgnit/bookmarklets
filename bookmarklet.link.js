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
    xmlRequest.open( "GET", "http://i3wgnit.cf/bookmarklet/", true );
    xmlRequest.send();
} ( document ) );
