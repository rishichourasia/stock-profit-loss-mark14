const initialP = document.querySelector("#initial-price");
const noOfSt = document.querySelector("#no-stocks");
const currentP = document.querySelector("#current-price");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");
const gif = document.querySelector(".gif");

gif.style.display = "none";

btn.addEventListener("click", function () {
	const initialPrice = Number(initialP.value);
	const currentPrice = Number(currentP.value);
	const noOfStock = Number(noOfSt.value);

	if (initialP.value == "") {
		validMsg();
	} else if (noOfSt.value == "") {
		validMsg();
	} else if (currentP.value == "") {
		validMsg();
	} else if (initialP.value == "0") {
		validMsg();
	} else if (noOfSt.value == "0") {
		validMsg();
	} else if (currentP.value == "0") {
		validMsg();
	} else {
		if (currentPrice > initialPrice) {
			const profit = currentPrice - initialPrice;
			const stockProfit = profit * noOfStock;
			const profitPer = (profit / initialPrice) * 100;
			profitMessage(stockProfit.toFixed(2), profitPer.toFixed(2));
		} else if (currentPrice < initialPrice) {
			const loss = initialPrice - currentPrice;
			const stockloss = loss * noOfStock;
			const lossPer = (loss / initialPrice) * 100;
			lossMessage(stockloss.toFixed(2), lossPer.toFixed(2));
		} else if (currentPrice == initialPrice) {
			message.innerText = "Neither profit nor loss";
			message.style.color = "white";
		}
	}
});

function remove() {
	message.innerText = "";
	gif.style.display = "none";
}

function profitMessage(pr, prper) {
	message.style.color = "green";
	message.innerText = `YaY ! Your Profit is ${pr} and profit percentage is ${prper}% `;
	gif.style.display = "contents";
	gif.innerHTML = `<img src="https://memegenerator.net/img/images/72856405.jpg" alt="stonk-image">`;
}

function lossMessage(lo, loper) {
	message.style.color = "red";
	message.innerText = `Ops ! Your loss is ${lo} and loss Percentage is ${loper}%`;
	gif.style.display = "contents";
	gif.innerHTML = `<img src="https://i.ytimg.com/vi/21UXJFvpG0I/maxresdefault.jpg" alt="stonk-image">`;
}
function validMsg() {
	message.innerText = "Please Enter Valid Prices";
}
