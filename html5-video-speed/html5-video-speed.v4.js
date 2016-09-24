( function() {
    function find( selector, context ) {
        return ( context || document ).querySelectorAll( selector );
    }

    function iframeDocument( node ) {
        try {
            return node.contentWindow ? node.contentWindow.document : node.contentDocument;
        } catch ( error ) {
            return console.log( "iframe document is not reachable: " + node.src ), 0;
        }
    }

    function check( context ) {
        var frames = find( "iframe", context ),
            videoElements = [].slice.apply( find( "video,audio", context ) );

        frames.forEach( function( element ) {
            [].push.apply( videoElements,
                          check( iframeDocument( element ) ) );
        } );

        return videoElements;
    }

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

    function refresh( videoSpeedChange ) {
        var videoElement = check(),
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

    if ( i = find( "#_i3h5v" )[0] ) {
        document.body.removeChild( i );
    } else {
        var html5VideoControllerElement = document.createElement( "div" ),
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

        document.body.appendChild( html5VideoControllerElement );

        var input = find( "input", html5VideoControllerElement )[0],
            $input = find( "#input", html5VideoControllerElement )[0];
        refresh( 0 );

        html5VideoControllerElement
            .addEventListener( "mouseenter", toggle, false );

        html5VideoControllerElement
            .addEventListener( "mouseleave", toggle, false );

        find( "#plus", html5VideoControllerElement )[0]
            .onclick = function() {
            refresh( 25 );
        };

        find( "#minus", html5VideoControllerElement )[0]
            .onclick = function() {
            refresh( -25 );
        };

        input.onchange = function() {
            refresh( 0 );
        };
    }
}() );
