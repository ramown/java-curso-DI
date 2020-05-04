function clicou(){

	document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
//	alert("Obrigado por clicar")	
}

function redirecionar(){
	//window.open("http://www.pm.pb.gov.br/minhaescala") em outra aba
	window.location.href = "http://www.pm.pb.gov.br/minhaescala"
}

function trocar() {
	document.getElementById("trocar").innerHTML = "Você passou o mouse"	
}

function trocar(element) {
	element.innerHTML = "Você passou o mouse"	
}


function saiu(element) {
	element.innerHTML = "Passe o mouse aqui"	
}

function load(){
	alert("Página Carregada com sucesso")
}

function change(element){
	console.log(element.value)
}
