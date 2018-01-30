for /D %f in (solyos*) do rd /s /q "%f"


xcopy /y /s dist\* ..\CadastroAPP_DIST

git add --all & git commit -m 'm' & git push

stage 
	git add -A -- src/app/cliente/cliente.service.ts

unstage
	git reset -q HEAD -- src/app/cliente/cliente.service.ts
	
ignore mudanças
	git checkout -q -- src/app/cliente/cliente.service.ts
	
	
	
	
Dopamina
	Dividir os grandes objetivos em pequenos pedaços, é crucial realmente celebrar cada etapa

Serotonina
	Refletir sobre sucessos significativos do passado 
	 se expor ao sol

Oxitocina
	dar um abraço em alguém (oito abraços por dia!)
	níveis de oxitocina das pessoas aumentam 22% quando a pessoa canta.

Endorfinas
	chocolate amargo 

gerais
	exercicio
	meditação 		