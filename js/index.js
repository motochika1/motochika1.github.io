
$(function() {
	$('.ef-fade01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	console.log(isInView);
	if(isInView){
		$(this).stop().addClass('fade01');
	}
	else{
		$(this).stop().removeClass('fade01');
	}
});
});