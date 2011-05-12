function msieversion() {
	var ua = window.navigator.userAgent
	var msie = ua.indexOf ( "MSIE " )
	if ( msie > 0 )
		return parseInt ( ua.substring ( msie+5, ua.indexOf ( ".", msie ) ) )
	else
		return 0
}

jQuery(document).ready(function() {
    if ( msieversion() <= 6 && msieversion() != 0 ) {
        jQuery('#wrapper').commaDias();
        jQuery('title').commaDias();
    }
});
