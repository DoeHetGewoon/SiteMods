const listEl = document.getElementsByClassName(`list`)[0];

const duolingo_adbox = document.getElementById(`duolingo-adbox`);
const duolingo_pluscard = document.getElementById(`duolingo-pluscard`);

load();

listEl.addEventListener("click", (e) => {
	save();
});

async function load() {
	chrome.storage.sync.get(["options"], (items) => {
		const options = items.options;

		duolingo_adbox.checked = options.duolingo_adbox;
		duolingo_pluscard.checked = options.duolingo_pluscard;
	});
}

async function save() {
	const options = {
		duolingo_adbox: duolingo_adbox.checked,
		duolingo_pluscard: duolingo_pluscard.checked,
	};
	chrome.storage.sync.set({ options: options }, () => {
		console.log(`saved`);
	});
}
