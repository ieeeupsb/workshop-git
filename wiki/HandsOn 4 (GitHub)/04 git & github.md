Assim que temos um repositório local de alguma forma associado a um repositório remoto, basicamente faz-se o trabalho localmente como até agora foi visto. Fazer modificações, commits, criar branches, etc, tudo isso é trabalho local independente do que quer que esteja no repositório remoto.

A novidade são os comandos `clone` (já visto), `push` (já visto de forma superficial), `pull` e `fetch`, que serão abordados e recapitulados sucintamente.

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

# Workflow
Trabalhar em repositórios é algo essencialmente local. A única interação que há com o servidor é quando queremos obter dados ou enviar dados. 

Se no repositório estiverem várias pessoas a trabalhar, este é o workflow tipico:
1. Atualizar o repositório local com os novos dados disponiveis no servidor.
2. Todos os conceitos aprendidos nos repositórios locais são válidos aqui. Importa referir que apesar de associarmos que uma branch `A` local é o mesmo que a branch `A` no servidor, na prática isso não acontece, o git diferencia. Como tal, podemos ter conflitos como já foi visto. Se no branch `A` alterar o mesmo ficheiro que outra pessoa alterou e mandou para o repositório, o `pull` vai ter um conflito. O método de resolução é igual ao que já foi visto. 