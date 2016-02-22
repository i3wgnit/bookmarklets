( function( doc ) {

    // Return an array of html DOM elements
    function find( selector, context ) {
        return ( context || doc ).querySelectorAll( selector );
    }

    // Show/Hide toggle
    function toggle() {
        var boolean = html5VideoControllerElement.classList;
        boolean.toggle( "1" );
        html5VideoControllerElement.style.opacity = boolean.contains( "1" ) ? 1 : .5;
    }

    // Remove previous instance of Video Controller
    if ( i = find( "#_i3h5v" )[0] ) {
        doc.body.removeChild( i );
    } else {

        // Create controller
        var html5VideoControllerElement = doc.createElement( "div" );
        html5VideoControllerElement.setAttribute( "id", "_i3h5v" );
        html5VideoControllerElement.setAttribute( "style", "position:fixed;left:4px;top:4px;" +
            "z-index:2147483647;background:#fff;padding:2px;border:1px solid #000;" +
            "font:18px monospace;color:#000" );
        html5VideoControllerElement.innerHTML = "<input type=\"text\" style=\"" +
            "font:18px monospace;height:24px;margin:2px;border:0;padding:0;outline:0;" +
            "text-align:right\" maxlength=\"6\" size=\"5\" value=\"00:00\">";
        doc.body.appendChild( html5VideoControllerElement );
        var input = find( "input", html5VideoControllerElement )[0];

        // On hover
        html5VideoControllerElement.addEventListener( "mouseenter", toggle, false );

        // On leave
        html5VideoControllerElement.addEventListener( "mouseleave", toggle, false );

        // Set the currentTime each time the input value changes
        input.onchange = function() {
            var videoElement = [].slice.apply( find( "video,audio" ) ),
                i = 0,
                k = 0,
                bufferArr = input.value.split( ":" ),
                buffer = bufferArr.map( function( x ) {
                    return parseInt( x || 0 );
                } ).reverse(),
                crrTime = buffer[0] + 60 * ( buffer[1] || 0 ),
                minute = parseInt( crrTime / 60 ),
                second = crrTime % 60;
            input.value = ( minute ? minute + ":" : "" ) + ( second > 10 ? "" : "0" ) + second;

            if ( videoElement[0] ) {
                videoElement.forEach( function( obj ) {
                    obj.currentTime = crrTime;
                } );
            } else {
                alert( "This page does not have any HTML5 videos or they are not reachable." );
            }
        };
    }
}( document ) );
