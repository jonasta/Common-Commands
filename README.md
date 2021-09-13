# Commonly used commands  
  
## CMD  
### view port - proccess  
netstat -aon |find /i "8081"  
or resmon.exe  
### delete all folders  
for /D %f in (folderName*) do rd /s /q "%f"  
### copy folder  
xcopy /y /s dist\* ..\CadastroAPP_DIST 
### copy files from subfolders  
@for /D %I in (*) do @if exist "%I\\*.ttf" move "%I\\*.ttf" "%cd%"
  
## GIT 
### one liner
git add -A & git commit -m "general changes" & git push origin master  
### stage   
git add -A -- src/app/cliente/cliente.service.ts
git add .
### unstage  
git reset -q HEAD -- src/app/cliente/cliente.service.ts  
or git reset  
### Clean up untracked files
git clean -n -d
git clean -f -d
### ignore changes  
git checkout -q -- src/app/cliente/cliente.service.ts  
### branches  
git checkout -b iss53  
... do some changes  
git commit -a -m 'added a new footer [issue 53]'  
git checkout master  
git merge iss53  
### view remotes  
git remote -v  
### remove branch  
git branch -d the_local_branch  
git push origin --delete the_remote_branch  
### git remove from repo but keep disk  
git rm --cached -r somedir  
### git clean default credentials
git config --local credential.helper ""
### set specific credential
git config user.name "FIRST_NAME LAST_NAME" (--global)
git config user.email "MY_NAME@example.com" (--global)
### list of files to be pushed
git diff --stat --cached [remote/branch]
### For the code diff of the files to be pushed
git diff [remote repo/branch]
### Full file paths of the files that will change, run:
git diff --numstat [remote repo/branch]

   
## HEROKU  
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
	
