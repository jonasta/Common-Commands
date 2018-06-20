DOM
	- uma arvore em que componentes html são nós
	
USAR APENAS QUANDO BROWSER JÁ RESPONDEU A REQUISIÇÃO	
	$(document).ready(function(){
	});
	
TRABALHA COM SELECIONAR->MODIFICAR
    SELECIONAR 
        $("noh")
        $(".classe")
        $("#elemento")
        FILHOS
            $("#elemento li")
        SOMENTE FILHOS DIRETOS
            $("#elemento > li")
        MULTIPLOS ELEMENTOS
            $(".classe, #elemento")
        ITEM DE UMA LISTA : PRIMEIRO, ULTIMO, IMPARES, PARES
            $("#lista li:first") $("#lista li:last") $("#lista li:odd") $("#lista li:even")
			
	PROPRIEDADES
		$("elemento").attr("atributo");//retorna atributo
		            .prop("propriedade");//retorna propriedade
					.removeAttr();//remove atributo
					.removeProp();//remove propriedade
					.val();//retorna valor
        
    TRAVERSING - ATRAVESSAR
        $("#lista").find("li"); //procura por elemento abaixo
        $("#lista").first(); //last
        $("lista").first().next(); //segundo elemento
        //localizando o pai
        $("lista").first().parent(); // retorna a propria lista
        //localizando filho
        $("lista").children("li"); //retorna os filhos diretos da lista
        $("lista").filter('.ativo');//filtra somente ativos
        
    ADICIONAR ELEMENTO
		.append(<element>)
		.prepend(<element>)
		.after(<element>)
		.before(<element>)
		ou
		(<element>).appendTo($('elemento'));
		...
		
	REMOVER ELEMENTO
		$(<elemento>).remove();
		
	INTERAÇÕES
		.on(<event>, <event handler>);
		//ex
		$('button').on('click', function(){
			//codigos
		});
	
	REFATORAR USANDO TRAVERSING
		$('button').on('click', function(){
			$(this)//retorna o botão
			       .closest('.vacation') //retorna o elemento antecessor .vacation mais próximo
				                        .append(price);
		});
	
	EVENT DELEGATION
        $(document).ready(function() {
          $('#filters').on('click', '.on-sale', function() {
              $('.tour').filter('.on-sale').addClass('highlight');//retorna tours com a classe .on-sale. e muda o estilo adicionando a classe highlight
          });
        });
        
    SHOW/HIDE ELEMENT
        .slideDown(); //mostra um elemento html "deslizando"
        .slideUp();//esconde um elemento html "deslizando" 
        .slideToggle();//mostra/esconde um elemento html "deslizando" (inverte o estado)
        
    DEBUG
        //usar document.ready + alerts para fazer o debug
        $(document).ready(function(){
          alert($('img').length); //length - quantos elementos 'img' há na página
        });        
		
	CONVERSÃO
		+$(this).val();//em número
		$(document).ready(function() {
		  $('#nights').on('keyup', function() {
			$('#nights-count').text($(this).val());
			var nights = +$(this).val(),
				dailyPrice = +$(this).closest(".tour").data("daily-price");
			$('#total').text(nights * dailyPrice);
		  });
		});
	
	PROPAGAÇÃO DE LINK
		Quando usa '#" nos links, o browser, por default
			navega no DOM para cima e executa os clicks nos elementos superiores
			Também faz com que a página volte ao início
		SOLUÇÕES:
			STOPPROPAGATION
				//faz com que o browser não "navegue" no DOM ACIMA
				  $('.see-photos').on('click', function(event) {
					event.stopPropagation();
					$(this).closest('.tour').find('.photos').slideToggle();
				  });
			PREVENTDEFAULT
				//faz com que o browser não volte a página para a posição inicial	
				  $('.see-photos').on('click', function(event) {
					event.stopPropagation();
					event.preventDefault();
					$(this).closest('.tour').find('.photos').slideToggle();
				  });
	CSS
		.css();
			$(this).css('background-color', '#252b30'); //simples
			$(this).css({'background-color':'#252b30', "font-weight" : "bold"});//objeto js
			
		.addClass("nomeDaClasse");
		.removeClass("nomeDaClasse");
		.toggleClass("nomeDaClasse");
		.hasClass("nomeDaClasse");
	
	ANIMAÇÃO
		
		