$(function () {

	function removeTagComments() {

		var comments = $("div[id^=comment_js_]").filter(function () {
			return $(this).find("span.UFICommentBody a[data-hovercard]").length > 0;
		});

		var parents = comments.closest("div[data-referrer^=substream_]");

		comments.each(function () {
			$(this).next().remove();
			$(this).remove();
		});
		parents.each(function() {
			if ($("div[id^=comment_js_]").length === 0) {
				$(this).find("a.UFIPagerLink").trigger("click");
			}
		});

		$("div.UFIReplyList + div.UFIReplyList").remove();

	}

	$(window).on("scroll", removeTagComments);

	removeTagComments();

});