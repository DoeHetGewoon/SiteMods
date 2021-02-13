run();
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "TabUpdated") {
		run();
	}
});

function run() {
	run2();

	setTimeout(run2, 2500);
	setTimeout(run2, 5000);
	setTimeout(run2, 7500);
	setTimeout(run2, 10000);
}

function run2() {
	chrome.storage.sync.get(["options"], (items) => {
		const options = items.options;

		const adbox = document.getElementsByClassName("_1UOwI _3bfsh")[0];
		const pluscard = document.getElementsByClassName("_3yqw1 np6Tv")[0];
		const pluscard2 = document.getElementsByClassName("_3o_lc _1vljO")[0];

		if (adbox && options.duolingo_adbox) adbox.remove();
		if (pluscard && options.duolingo_pluscard) pluscard.remove();
		if (pluscard2 && options.duolingo_pluscard) pluscard2.remove();
	});
}
