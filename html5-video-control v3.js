( function() {
    var buffer = prompt( "Time", "mm:ss" ).split( ":" ),
        crrTime = buffer.map( function( x ) {
            return parseInt( x || 0 );
        } )
        .reverse()
        .reduce( function( prev, curr, index ) {
            return curr * Math.pow( 60, index ) + prev;
        } );

    [].slice.apply( document.querySelectorAll( "video,audio" ) ).forEach( function( obj ) {
        obj.currentTime = crrTime;
    } );
}() );
