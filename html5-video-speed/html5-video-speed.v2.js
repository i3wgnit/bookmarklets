( function( doc ) {

    // Return an array of html DOM elements
    function find( selector, context ) {
        return ( context || doc ).querySelectorAll( selector );
    }

    // Show/Hide toggle
    function toggle() {
        var boolean = html5VideoControllerElement.classList;
        boolean.toggle( "1" );
        if ( boolean.contains( "1" ) ) {
            html5VideoControllerElement.style.opacity = 1;
            $input.style.display = "block";
        } else {
            html5VideoControllerElement.style.opacity = .5;
            $input.style.display = "none";
        }
    }

    // Changes the playbackRate of Video elements
    function refresh( videoSpeedChange ) {
        var videoElement = [].slice.apply( find( "video,audio" ) ),
            i = 0,
            k = 0;
        input.value = ( parseFloat( input.value ) * 100 + videoSpeedChange ) / 100 ||
            1;
        if ( videoElement[0] ) {
            videoElement.forEach( function( obj ) {
                obj.playbackRate = input.value;
            } );
        } else {
            alert( "This page does not have any HTML5 videos or they are not reachable." );
        }
    }

    // Remove previous instance of Video Controllers
    if ( i = find( "#_i3h5v" )[0] ) {
        doc.body.removeChild( i );
    } else {

        // Create controller
        var html5VideoControllerElement = doc.createElement( "div" ),
            btnStyle = "style='box-sizing:box-border;border-radius:0;" +
            "border:1px solid #000;margin:2px;background:#fff;outline:0;width:24px;" +
            "height:24px;padding:0;'>";
        html5VideoControllerElement.setAttribute( "id", "_i3h5v" );
        html5VideoControllerElement.setAttribute( "style", "position:fixed;left:4px;top:4px;" +
            "z-index:2147483647;background:#fff;padding:2px;border:1px solid #000;" +
            "font:18px monospace;color:#000" );
        html5VideoControllerElement.innerHTML = "<input type='text'style='" +
            "font:18px monospace;margin:2px;padding:0;border:0;outline:0;height:21px;" +
            "text-align:center;'maxlength='4'size='4'>" +
            "<div id='input'style='margin:0;padding:0;'>" +
            "<button id='minus'" + btnStyle + "-</button>" +
            "<button id='plus'" + btnStyle + "+</button>" +
            "</div>";
        doc.body.appendChild( html5VideoControllerElement );
        var input = find( "input", html5VideoControllerElement )[0],
            $input = find( "#input", html5VideoControllerElement )[0];
        refresh( 0 );

        // On hover
        html5VideoControllerElement.addEventListener( "mouseenter", toggle, false );

        // On leave
        html5VideoControllerElement.addEventListener( "mouseleave", toggle, false );

        // Add .25 to playbackRate
        find( "#plus", html5VideoControllerElement )[0].onclick = function() {
            refresh( 25 );
        };

        // Remove .25 to playbackRate
        find( "#minus", html5VideoControllerElement )[0].onclick = function() {
            refresh( -25 );
        };

        // Set the playbackRate each time the input value changes
        input.onchange = function() {
            refresh( 0 );
        };
    }
}( document ) );
