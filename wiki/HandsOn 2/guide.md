O segundo _hands on_ consiste em:
1. Criar repositórios
2. Adicionar ficheiros na *staging area*
3. Experimentar o comando `git status`
3. Fazer *commit*
4. Usar o comando *git diff*
5. Remover snapshots da staging area
6. Reverter um commit

# Criar um repositório
Para criar um repositório vazio usamos o comando `$git init`. Este comando deverá ser executado na pasta onde se querer inicializar o repositório. Essa pasta pode estar vazia, ou pode ter ficheiros e sub-diretórios.

O que o comando faz é criar um sub-diretório (oculto), **.git**, e é aqui onde o git armazena os dados, ou seja, é o repositório em si.

**O repositório começa sempre vazio!** Mesmo que o diretório onde o comando é executado contenha ficheiros, o git não irá adicioná-los automaticamente ao repositório, tudo é considerado como *untracked*.

```bash
$mkdir workshop # cria uma pasta vazia
$git init # inicializa o repositório
```

# Colocar ficheiros na _staging area_
Cria um ficheiro de texto e adiciona-o à staging area.

Para colocar ficheiros na staging area, usa-se o comando `$git add`.

💡 Experimenta também usar o comando `$git status` que lista os ficheiros **untracked**, **modificados** e que fazem parte do **snapshot para o próximo commit** (estão na staging area). Para te familiarizares com este comando, experimenta correr o comando sempre que adicionas novos ficheiros na _working directory_, quando fazes o snapshot na _staging area_ e quando fazes _commit_.

Existem diversas formas de usar o comando `$git add` que podem tornar a tarefa mais eficiente. Podes especificar os ficheiros que queres adicionar, podes usar _[patterns](http://wiki.bash-hackers.org/syntax/pattern)_, ou usar parametros que automaticamente consideram ficheiros num estado especifico.
```bash
$git add filenam.txt # adiciona um ficheiro especifico
$git add *.c # adiciona ficheiros com extensão .c
$git add . # adiciona TUDO (new/modified/deleted) 
$git add -A # adiciona TUDO (new/modified/deleted) 
$git add -u # adiciona apenas ficheiros conhecidos, ou seja, aqueles que já surgiram em algum commit (tracked files -> modified/deleted)
```

**Nota**: Se um ficheiro é colocado na _staging area_ e posteriormente modificado, o novo conteudo não será considerado. Ou seja, após usar o `add` com um ficheiro exemplo.txt, o snapshot é criado e irá ser adicionado ao repositório com o `$git commit`. Por isso, o ficheiro até pode ser apagado e o _commit_ irá funcionar na mesma. Mais à frente, quando analisarmos como o git armazena os dados, isto ficará mais claro. 

# Fazer commit
Agora que temos a primeira versão do ficheiro pronta e com o seu snapshot na staging area, podemos fazer commit. Fazer commit consiste em mover o snapshot criado na staging area para o repositório.

Os commits têm uma mensagem que o descreve, e é especificado no parametro `-m`.

```bash
$git commit -m "First commit"
```

O comando `commit` que permite fazer os dois passos, adicionar à _staging area_ e _commit_, num só comando. Contudo, este comando apenas considera ficheiros já conhecidos (novos ficheiros/untracked files são ignorados).
```bash
$git commit -a -m "commit description"
```

💡 Experimenta usar o comando `$git log` antes e após fazer commits. Este comando permite ver todos os commits (alcançaveis através do último commit. Quando aprenderes o conceito de branch, ficará claro em que situações um commit não pode alcançar outro commit).

# Demo (exemplo)
```bash
$git init
Initialized empty Git repository in /mnt/c/Users/fabio/Documents/workshop/.git/

$touch f1.txt # creates empty file

$ls
f1.txt

$git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        f1.txt

nothing added to commit but untracked files present (use "git add" to track)

$git add f1.txt
fdrg@MSI-PE60:/mnt/c/Users/fabio/Documents/workshop$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   f1.txt

$git commit -m "Added first empty file"
[master (root-commit) cfbb95e] Added first empty file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 f1.txt

$git log
commit cfbb95e5cef2aca23774cd59e2a20d48d6fca69a
Author: Fabio Gaspar <DO_NOT_SPAM@outlook.com>
Date:   Sun Mar 18 12:01:10 2018 +0000

    Added first empty file

$cat > f1.txt # modify the file
This is the first paragraph!

$git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   f1.txt

no changes added to commit (use "git add" and/or "git commit -a")

$git commit -a -m "Wrote first line"
[master bdaded3] Wrote first line
 1 file changed, 1 insertion(+)

$ git log
commit bdaded3d1aa1fc919d237073db5fd8c2078aae48
Author: Fabio Gaspar <DO_NOT_SPAM@outlook.com>
Date:   Sun Mar 18 12:02:13 2018 +0000

    Wrote first line

commit cfbb95e5cef2aca23774cd59e2a20d48d6fca69a
Author: Fabio Gaspar <DO_NOT_SPAM@outlook.com>
Date:   Sun Mar 18 12:01:10 2018 +0000

    Added first empty file
```

# *git diff*
O comando `git diff` permite comparar secções do git (working directory, staging area), commits, branches 🔜 etc.
```bash
# compara working directory com a staging area. Ilustra o que iria ser adicionado à staging area com o comando add
$git diff 

# compara o conteúdo da staging area com um commit (se omitido, considera o ultimo commit)
$git diff --cached <commit>

# compara dois commits
$git diff <commit> <commit>

# compara o conteúdo na working directory com um commit
$git diff <commit>

```
Temos dois commits, um com SHA1 bdad... e outro com SHA1 cfbb9...

Normalmente usar-se-ia o SHA1 completo, mas basta usar o suficiente para que o git consiga distinguir objetos (objetos? Wait for it... 🔜).

```bash
$git diff bdad cfbb9
diff --git a/f1.txt b/f1.txt
index 77d7734..e69de29 100644
--- a/f1.txt
+++ b/f1.txt
@@ -1 +0,0 @@
-This is the first paragraph!

$git diff cfbb9 bdad
diff --git a/f1.txt b/f1.txt
index e69de29..77d7734 100644
--- a/f1.txt
+++ b/f1.txt
@@ -0,0 +1 @@
+This is the first paragraph!
```

# Remover ficheiros da _staging area_
Por vezes adicionamos ficheiros à staging area acidentalmente, ou reparamos num erro do conteúdo, e como tal, não queremos fazer commit do snapshot criado.

Existem dois cenários possíveis:
1. Apagar o snapshot de um ou mais ficheiros da staging area, mas não discartar as modificações na working directory.
2. Apagar o snapshot, e repôr o(s) ficheiros (discarta as alterações na working directory)

Para o primeiro caso, usa-se o comando `$git reset <file>`. Podemos especificar um ou mais ficheiros, mas se não indicarmos nada, o git faz *unstage* de todos os ficheiros. 

Para o segundo caso, usa-se `$git checkout -- <file>`. Aqui o parametro `<file>` é orbigatório.

# Reverter um *commit*
Para reverter um commit, usa-se o comando `$git revert <commit SHA1>`. O SHA1 de cada commit pode ser obtido através do `$git log`.

Ao contrário do que se possa pensar, o git não vai apagar o commit. Vai criar um novo commit que reverte o commit especificado. E por sua vez podemos reverter o commit que reverteu o commit que............. `segmentation fault (core dumped)`

**Nota:** Antes de usar `revert`, é necessário garantir que não existem alterações na working directory. O `$git stash` é um comando útil aqui, mas apenas é explicado na parte de repositórios remotos.