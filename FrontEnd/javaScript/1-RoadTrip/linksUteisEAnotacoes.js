CARACTERISTICAS
	Fracamente tipado
	operadores lógicos: + - * % ==(já muda o tipo para comparar '2' = 2) ===(recomendado, '2' != 2)
		or 
			this.swords = this.swords || []; //retorna o valor mais verdadeiro, se swords existe, swords, senão um array vazio é retornado
											//se as 2 forem falsas retorna o último
		 
		and 
			this.swords = "king" && "arthur"; //retorna o valor mais falso, ou o último verdadeiro
											//se as 2 forem falsas retorna o primeiro

	comandos while, for, switch, if, 
	        if ternario condicao ? seTrue : seFalse;
			
												
	switch fall through 
		function CaretakerMedallion(caretaker) {
		  switch(caretaker){
			case 'PixelPriest':
			  this.bronzeBanner = 'Omne initium est a pixel'; // e continua para os de baixo, pois não tem break (independente dos valores)
			case 'FontFriar':
			  this.circumscribedSquare  = 'Venit Comic Sans';
			case 'StyleSensei':
			  this.innerRing = 'Ars autem est in aeternum'; 
		  }  
		}	
		var medallion1 = new CaretakerMedallion('PixelPriest');
		/*
		  CaretakerMedallion {
			bronzeBanner: 'Omne initium est a pixel', 
			circumscribedSquare: 'Venit Comic Sans', 
			innerRing: 'Ars autem est in aeternum'
		  }
		*/

		var medallion2 = new CaretakerMedallion('StyleSensei'); 
		/*
		  CaretakerMedallion {
			innerRing: 'Ars autem est in aeternum'
		  }
		*/	
	
	
ARRAYS
	array.push() adiciona item no array
	array.pop() retorna o ultimo iten e retira do array
	array.shift() retira o 1o iten e retorna
	array.concat(otherArray) junta 2 arrays
	array.map -execulta uma função em cada iten do array
		var results = numbers.map(function (arrayCell) {
									return arrayCell * 2;
								  }
		);
	

FUNCTIONS EXPRESSIONS
	tratadas como expressões, pode ser retornada
	var teste = function teste(arg){ return x};
	console.log(teste)

CLOSURE
	Retorna a função de dentro, substituindo o valor das variáveis
	
	function makeTorpedoAssigner ( passengerArray ) {
		return function ( name ) {
			for (var i = 0; i<passengerArray.length; i++) {
				if (passengerArray[i] == name) {
					alert("Ahoy, " + name + "!\n" +
					"Man your post at Torpedo #" + (i+1) + "!");
				}
			}
		
		};
	}	
	
	var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", “C3PO”, “Boba”];
	var getTorpedoFor = makeTorpedoAssigner(subPassengers);
	getTorpedoFor( "R2-D2" );
	
OBJETOS
	var vehicle1 = {type:"Motorboat", capacity:6, storedAt:"Ammunition Depot"};
	delete vehicle.type; //remove a propriedade totalmente
	objeto.novapropriedade;//add uma propriedade
	
	construtores
	
		var Fencepost = function(x, y, postNum){
		  this.x = x;
		  this.y = y;
		  this.postNum = postNum;
		  this.connectionsTo = [];
		  this.sendRopeTo = function(connectedPost) {
			this.connectionsTo.push(connectedPost);
		  };
		};
		
PROTOTYPES - junta o que é comum num só lugar

	var canyonCows = [
	  {name: "Bessie", type: "cow", hadCalf: "Burt"},
	  {name: "Donald", type: "bull", hadCalf: null}
	];

	var valleyCows = [
	  {name: "Danielle", type: "cow", hadCalf: null},
	  {name: "Brittany", type: "cow", hadCalf: "Christina"},
	  {name: "Jordan", type: "bull", hadCalf: null}
	];

	Array.prototype.countForBreeding = function() {
	  var numToBreed = 0;
	  for (var i = 0; i < this.length; i++) {
		if (this[i].noCalvesYet()) {
		  numToBreed++;
		}
	  }
	  return numToBreed;
	};

	// set up your numPriorityCows variable
	var numPriorityCows = canyonCows.countForBreeding() +
						  valleyCows.countForBreeding() +
						  forestCows.countForBreeding() +
						  badlandsCows.countForBreeding();
	
GANHO DE PERFORMANCE
	FOR - declarar o tamanho em uma variavel, dentro do loop
		function populationGetter(location) {
		  var list = '';
		  for (var i = 0, NUMCRITTERS = LOCATION.CRITTERS.LENGTH; i < numCritters; i++) {
			list += location.critters[i];
		  }
		  return list.trim();
		}	
	
	EVITAR "FOR IN" se usar prototypes, pois lista funções adicionadas pelo prototype eg "removeAll", "addOne" etc
		
	COLOCAR a tag <script> o mais abaixo possível no html(antes de </body>), para carregar por último | ou usar o atributo async na tag <script>
	
	USAR PROTOTYPES =)
	
	NÃO ADICIONAR elementos 1 a 1 ao DOM, usar fragment
	
	USAR MENOS "VAR", e sim vírgulas 
	
	CONCATENAÇÕES INTELIGENTES
		var arrayPagina = ['html', 'body', '...', '/body', '/html'];
		pagina = arrayPagina.join('\n') - junta os valores de cada indice de um array em uma string
	
	MEDIR VELOCIDADE, USAR console.time("string") E  
	                       console.timeEnd("string")
						   ou
						   rightNow = +new Date(); (mais indicado, ocupa menos tempo, o + indica que quer o tempo exato)
	
	COMPARAÇÕES
		USAR TRIPLO =, E NÃO O DUPLO
		PARA TESTAR se objetos são instancias de uma classe "instanceof"
		
	CONTROLAR EXCECÕES
		try{
			//codigo1
		}catch(error){
			//codigo caso codigo1 de erro
			if (error instanceof(ReferenceError){
			   alert(error + "n" + "blablabla")	;
			}
			if (error instanceof(TypeError){
			   alert(error + "n" + "blebleble")	;
			}
		}
	
	EVITAR
		with
			caro no processamento
			não fica claro qual propriedade pertence a qual objeto
		eval
			não é claro
			não é seguro	
		omissão de "{" "}"	
		
	NUMBER NONSENSE
		Decimais - usar num.toFixed(2) para casas decimais
			retorna string
			usar parseFloat(arg) para converter para float
			usar parseInt(arg, 10) para converter para integer
			
	MODULARIDADE
		Usar namespaces/wrappers para que as variaveis não fujam do escopo desejado
		var ESCOPO1 = {
			list : [],
			list2 : [],
			CÓDIGO
		};
		var ESCOPO2 = {
			list : [],//não reescreve a variável acima
			list2 : [],
			CÓDIGO,
			SUBESCOPO1: {
				list : [],//não reescreve a variável acima
				list2 : [],
				CÓDIGO
			}
		};
		usar uma closure, para deixar propriedades privadas ou publicas
		var CAVESOFCLARITY = function() {

		  var treasureChests = 3;

		  return {
			stalactites: 4235,
			stalagmites: 3924,
			bats: 345,
			SECRET: {
			  openChest: function() {
				treasureChests--;
				alert('DA DADADA DAAAAAAA!');
			  }
			}
		  };
		}();		
		VARIAVEIS GLOBAIS DENTRO DO ESCOPO
			-Passar como parametro (global import)
			
		AUGMENTATION
			var CAVESOFCLARITY = function() ...
			CAVESOFCLARITY = function(caves) {
			  var sandScript = '';
			  caves.setSandScript = function(message){
				 sandScript = message;
			  };
			  return caves;
			}(CAVESOFCLARITY);			
		
11156825 1/09 AS 17:52	
	
***LINKS***

	JAVASCRIPT ROADTRIP PART2

		Useful Methods for Strings
		http://www.impressivewebs.com/javascript-string-methods-reference/

		Special Characters and Escape Sequences
		http://www.javascriptkit.com/jsref/escapesequence.shtml

		File Organization with HTML, CSS, and JavaScript Files
		http://appcropolis.com/blog/web-technology/organize-html-css-javascript-files/


		Eloquent Javascript
		http://eloquentjavascript.net/

		Mozilla Development Network Javascript
		https://developer.mozilla.org/en-US/docs/Web/JavaScript

		JSFiddle
		http://jsfiddle.net/

		DailyJS
		http://dailyjs.com/

	JAVASCRIPT ROADTRIP PART3

		http://www.smashingmagazine.com/2009/02/50-extremely-useful-javascript-tools/
		http://www.javascriptkit.com/cutpastejava.shtml
		http://scripterlative.com/


		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
		https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
		http://eloquentjavascript.net/1st_edition/chapter8.html	

	JAVASCRIPT BEST PRACTICES
		http://www.thinkful.com/learn/javascript-best-practices-1/
		http://modernweb.com/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/
		http://jstherightway.org
		http://javascript.crockford.com/code.html //Code Conventions for the JavaScript	
		https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-3/numbers //Binary Floating Point Values
