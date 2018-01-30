# fuc  
FUC - Frequend used commands  
  
//PROMPT  
//port - proccess  
netstat -aon |find /i "8081"  
or resmon.exe  
//delete all folders  
for /D %f in (folderName*) do rd /s /q "%f"  
//copy folder  
xcopy /y /s dist\* ..\CadastroAPP_DIST  
  
//MONGODB  
use xxx  
db  
show collections  
db.GameScore.find()  
db.users.remove({})  
mongodb://admin:admin@ds161164.mlab.com:61164/multivision	  
mongo mongodb://localhost/multivision  
	  
//GIT - basic  
git add -A & git commit -m "general changes" & git push origin master  
//stage   
git add -A -- src/app/cliente/cliente.service.ts  
//unstage  
git reset -q HEAD -- src/app/cliente/cliente.service.ts  
//ignore changes  
git checkout -q -- src/app/cliente/cliente.service.ts  
//GIT - branches  
git checkout -b iss53  
... do some changes  
git commit -a -m 'added a new footer [issue 53]'  
git checkout master  
git merge iss53  
//GIT - remotes  
git remote -v  
//GIT - remove branch  
git branch -d the_local_branch  
git push origin --delete the_remote_branch  
//git undo "add"  
git reset  
//git remove from repo but keep disk  
git rm --cached -r somedir  
   
//NODE_ENV  
set NODE_ENV=production	  
  
//HEROKU  
heroku login  
heroku create  
heroku config:set NODE_ENV=production  
heroku ps:scale web=1  
heroku open  
  
heroku logs  
heroku restart  
  
heroku keys  
	heroku keys:add  
	c:users\jota\.ssh  
		ssh-keygen  
	heroku keys  
	heroku keys:clean  
	keroku keys: remove joe@joe-i7  
	in WINDOWS  
		copy keys to git/.ssh  
		  
		  
		  
		  
