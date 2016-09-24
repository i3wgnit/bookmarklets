( function( doc ) {
    function find( selector, context ) {
        return ( context || doc ).querySelectorAll( selector );
    }

    function iframeDocument( node ) {
        try {
            return node.contentWindow ? node.contentWindow.document : node.contentDocument;
        } catch ( error ) {
            return console.log( "iframe document is not reachable: " + node.src ), 0;
        }
    }

    function check( context ) {
        var frames = [].slice.apply( find( "iframe", context ) ),
            videoElements = [].slice.apply( find( "video,audio", context ) );

        frames.forEach( function( element ) {
            var frameDoc = iframeDocument( element );
            if ( frameDoc ) {
                [].push.apply( videoElements,
                              check( frameDoc ) );
            }
        } );

        return videoElements;
    }

    var buffer = prompt( "Time", "mm:ss" ).split( ":" ),
        crrTime = buffer.map( function( x ) {
            return parseInt( x || 0 );
        } )
    .reverse()
    .reduce( function( prev, curr, index ) {
        return curr * Math.pow( 60, index ) + prev;
    } );

    check( doc ).forEach( function( obj ) {
        obj.currentTime = crrTime;
    } );
}( document ) );
