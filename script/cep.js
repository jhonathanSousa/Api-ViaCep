
// btn-consulta

let btnConsulta = document.querySelector("#btn-consulta");

btnConsulta.addEventListener("click", function () {

	// CEP
	let cep = document.querySelector("#cep").value;

	// Link api
	let api = `https://viacep.com.br/ws/${cep}/json/`;
	
	// Requisição no servidor
	let request =  new XMLHttpRequest();

	request.open("GET",api);

	request.onload = function (){

		let endereco = JSON.parse(request.responseText);

		// Logradouro
		let logradouro = document.querySelector("#logradouro");
		logradouro.innerHTML = endereco.logradouro + " ,";

		// Bairro
		let bairro = document.querySelector("#bairro");
		bairro.innerHTML = endereco.bairro + " ,";

		// localidade
		let localidade = document.querySelector("#localidade");
		localidade.innerHTML = endereco.localidade + " ,";

		// UF
		let uf = document.querySelector("#uf");
		uf.innerHTML = endereco.uf;
	}


	request.send();
});