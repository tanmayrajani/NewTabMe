$(document).ready(function() {
	var xPressed = false;
	$(document).keydown(function(event){
	    if(event.which=="88")
	        xPressed = true;
	});

	$(document).keyup(function(event){
		if(event.which=="88")
	    	xPressed = false;
	});

	$("a").on('click',function(event){
        var url = $(this).context.href;
        if(url.indexOf("/#")==-1 && url.indexOf("#")!=url.length-1 && !xPressed && url.toLowerCase()!="javascript:void(0)" && url.toLowerCase()!="javascript:void(0);" && url.toLowerCase()!="javascript:;"){
        	event.preventDefault();
        	var win = window.open(url, '_blank');
        	win.focus();
        }
        
    });
});