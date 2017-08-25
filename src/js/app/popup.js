$(function () {

	chrome.storage.sync.get("enabled", function (result) {
		$("#enable").find(".check,.x").prop("class", !!result.enabled ? "check" : "x");
		$("#enable").find("button,.button").html(!!result.enabled ? "Enabled" : "Disabled");
	});

	$("#enable").on("click", function () {
		$(this).find(".check,.x").prop("class", $(this).find(".check,.x").hasClass("check") ? "x" : "check");
		$(this).find("button,.button").html($(this).find(".check,.x").hasClass("check") ? "Enabled" : "Disabled");
		chrome.storage.sync.set({enabled: $(this).find(".check,.x").hasClass("check")});
	});

});