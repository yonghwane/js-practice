for (let i = 0; i < 3; i++) {
	$(".tab-button")
		.eq(i)
		.on("click", function () {
			$(".tab-button").removeClass("orange");
			$(".tab-button").eq(i).addClass("orange");
			$(".tab-content").hide();
			$(".tab-content").eq(i).show();
		});
}
