$(function(){
	$("#nav > ul > li").hover(
		function(){
			$("#nav > ul").addClass("active");
		},
		function(){
			$("#nav > ul").removeClass("active");
		}
	);

	$("#nav > ul > li > a").focusin(function(){
		if($(this).parent().index() == 0){
			$("#nav > ul").addClass("active");
		}

		$(this).parent().addClass("active");
	});

	$("#nav li li:last-child a").focusout(function(){
		if($(this).parent().parent().parent().index() == 5){
			$("#nav > ul").removeClass("active");
		}
		$(this).parent().parent().parent().removeClass("active");
	});

	let slider=$(".slider .slider_area ul");

	let w;
	let total=4;
	let amount=0;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1020){
			distance=w;
		}
		else{
			distance=1020;
		}

		slider.css({ width: distance*total });
	});

	$(window).trigger("resize");

	$(".direction_nav .left").click(function(e){
		e.preventDefault();

		if(slider.is(":animated")){
			return;
		}

		slider.prepend(slider.find("li").last());
		amount-=distance;
		slider.css({ left: amount });

		amount+=distance;
		slider.animate({ left: amount }, 500);
	});

	$(".direction_nav .right").click(function(e){ // left
		e.preventDefault();

		if(slider.is(":animated")){
			return;
		}

		amount-=distance;

		slider.animate({ left: amount }, 500, function(){
			$(this).append(slider.find("li").first());
			amount+=distance;
			$(this).css({ left: amount });
		});
	});
});