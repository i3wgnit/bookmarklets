( function() {
    var bufferArr = prompt( "Time", "mm:ss" ).split( ":" ),
        buffer = bufferArr.map( function( x ) {
            return parseInt( x || 0 );
        } ).reverse(),
        crrTime = buffer[0] + 60 * ( buffer[1] || 0 );

    [].slice.apply( document.querySelectorAll( "video,audio" ) ).forEach( function( obj ) {
        obj.currentTime = crrTime;
    } );
}() );
