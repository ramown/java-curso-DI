/*
var idade = prompt("Qual a sua idade? ")

if (idade >=18) {
	alert('Você é Maior de idade')
} else {
	alert('Você é Menor de idade')
}
*/

var count = 5

while (count >0 ){
	console.log('While: '+count)
	count--
}

for(i=0; i <=5; i++ ){
	console.log("for: "+i)
}


var instrumentos = [
	{"nome": "violão", "tipo": "cordas"}, 
	{"nome": "flauta", "tipo": "sopro"}, 
	{"nome": "teclado", "tipo": "eletrônico"}
]

for (var instrumento in instrumentos) {
	console.log("forin: "+instrumento)
}

var d = new Date()
alert(d)

console.log(d.getMonth()+1)
console.log(d.getDate())
console.log(d.getMinutes())
