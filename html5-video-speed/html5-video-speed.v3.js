( function() {
    var speed = prompt( "Speed", "1.5" );
    [].slice.apply( document.querySelectorAll( "video,audio" ) ).forEach( function( obj ) {
        obj.playbackRate = speed;
    } );
}() );
