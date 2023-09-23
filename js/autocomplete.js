let database = [
	'HTML',
	'CSS',
	'HOW TO',
	'CAR',
	'Easy tutorial',
	'Conect js to HTML'
	];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
	let result = [];
	let input = inputBox.value;
	if (input.length) {
		result=database.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase());
		});

	}
	displayResult(result);
	if (!result.length) {
		resultBox.innerHTML='';
	}
}

function displayResult(result){
	const content = result.map((list)=>{
		return "<li onclick='selectInput(this)'>" + list + "</li>";
	})

	resultBox.innerHTML = "<ul>" +  content.join('') +"</ul>";

}

function selectInput(list){
	inputBox.value=list.innerHTML;
	resultBox.innerHTML='';
}