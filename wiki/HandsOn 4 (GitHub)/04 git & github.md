Assim que temos um repositório local de alguma forma associado a um repositório remoto, basicamente faz-se o trabalho localmente como até agora foi visto. Fazer modificações, fazer commits, criar branches, etc, tudo isso é trabalho local.

A novidade são os comandos `clone`, `push`, `pull` e `fetch`, que serão abordados sucintamente. São estes que permitem que comunicar com repositórios remotos.

# git clone
Este comando cria uma working directory que é copia de um repositório local ou remoto.
```bash
$git clone /path/to/repository
$git clone https://github.com/<user>/<repo name>.git
```
# git push
Enviar as alterações de um branch local para um branch remoto com o mesmo nome (assumindo que o remote tem o nome simbólico *origin*).
```bash
$git push origin master
```
💡 Para listar todos os branches, inclusivé remotos, usar 
```bash
$git branch -a

* master
  remotes/origin/master
```
💡 Para ver todos os remotes associados, usar
```bash
$git remote -v

origin  https://github.com/<user>/shiny-spork (fetch)
origin  https://github.com/<user>/shiny-spork (push)
```
# git pull
Este comando faz _fetch_ dos dados no servidor e faz _merge_ no repositório local.

Tal como no comando `push`, também é necessário especificar o remote e branch.
```bash
$git pull origin someBranch
```
 
# git fetch
O comando `fetch` transfere os dados do servidor. Mas faz apenas isso, não altera nada no repositório local. A utilidade deste comando é que podemos estar interessados em consultar o estado do repositório remoto sem que mude o local, que poderia gerar conflitos por exemplo, por isso, o `fetch` é totalmente seguro. 

O `push`, na realidade, faz um `fetch` seguido de um `merge` da branche especificada.

# Fork & Pull Requests
Recomendo que leiam este [guiao](https://gist.github.com/Chaser324/ce0505fbed06b947d962) sobre forking e pull requests.