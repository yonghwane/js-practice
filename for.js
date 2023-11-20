var button = $(".tab-button");

$(".tab-button")
	.eq(0)
	.on("click", function () {
		$(".tab-button").removeClass("orange");
		$(".tab-button").eq(0).addClass("orange");
		$(".tab-content").hide();
		$(".tab-content").eq(0).show();
	});
