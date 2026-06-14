/**
 * メンバー名一覧
 */
const memberNames = [
	"大谷映美里",
	"大場花菜",
	"音嶋莉沙",
	"齋藤樹愛羅",
	"佐々木舞香",
	"髙松瞳",
	"瀧脇笙古",
	"野口衣織",
	"諸橋沙夏",
	"山本杏奈"
	];
//ランダムな番号を取得する
function getRandomNumber(){
	return Math.floor(Math.random() * 10);
}
//おみくじ開始
function playOmikuji(){
	const timer = setInterval(function(){
		const number = getRandomNumber();
		document.querySelector("#js-result")
			.setAttribute(
				"src",
				`./image/love${number}.png`
			);
		document.querySelector("#js-name")
			.textContent =
			memberNames[number];
			
		//検証 名前ごとに、面からに変更
		
		switch(number){

			case 0:
		
				document.querySelector("#js-name")
					.style.color = "#d8b4ff";
				break;
		
			case 1:
		
				document.querySelector("#js-name")
					.style.color = "orange";
				break;
		
			case 2:
		
				document.querySelector("#js-name")
					.style.color = "skyblue";
				break;
		
			case 3:
		
				document.querySelector("#js-name")
					.style.color = "lightpink";
				break;
		
			case 4:
		
				document.querySelector("#js-name")
					.style.color = "white";
				break;
		
			case 5:
		
				document.querySelector("#js-name")
					.style.color = "red";
				break;
		
			case 6:
		
				document.querySelector("#js-name")
					.style.color = "yellow";
				break;
		
			case 7:
		
				document.querySelector("#js-name")
					.style.color = "purple";
				break;
		
			case 8:
		
				document.querySelector("#js-name")
					.style.color = "green";
				break;
		
			case 9:
		
				document.querySelector("#js-name")
					.style.color = "blue";
				break;
		
			default:
		
				document.querySelector("#js-name")
					.style.color = "#db7093";

}
			
	},100);
	setTimeout(function(){
		clearInterval(timer);
	},3000);
}
/**
 * ボタンイベント
 */
document.querySelector("#js-button")
	.addEventListener(
		"click",
		playOmikuji
	);

document.querySelector("#start-button")
	.addEventListener("click", function(){

		location.href = "index.html";

	});

document.querySelector("#hamburger")
	.addEventListener("click", function(){

		document.querySelector("#menu")
			.classList.toggle("open");

	});