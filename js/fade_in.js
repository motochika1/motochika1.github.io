


const ef_fade01 = document.getElementsByClassName("ef-fade01");
const fade01 = document.getElementsByClassName("fade01");

$(function() {
	$(ef_fade01).on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	console.log(isInView);
	if(isInView){
		$(this).stop().addClass(fade01);
	}
	else{
		$(this).stop().removeClass(fade01);
	}
});
});