for /D %f in (solyos*) do rd /s /q "%f"


xcopy /y /s dist\* ..\CadastroAPP_DIST

git add --all & git commit -m 'm' & git push

stage 
	git add -A -- src/app/cliente/cliente.service.ts

unstage
	git reset -q HEAD -- src/app/cliente/cliente.service.ts
	
ignore mudanças
	git checkout -q -- src/app/cliente/cliente.service.ts
