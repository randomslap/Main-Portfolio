
$(document).ready(function() {
	sticky();

});

function sticky() {
	$(".ui.sticky").sticky({
		context: "#2",
	});
	if ($(".ui.sticky").hasClass("fixed")) {
		console.log("menu is sticky");
	}
}

function fullPage() {
	$("#fullpage").fullpage({
		autoScrolling: false,
		scrollHorizontally: false,
	});

	$.fn.fullpage.setAllowScrolling(false);
}

