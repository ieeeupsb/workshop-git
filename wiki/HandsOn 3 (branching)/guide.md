Tal como apresentado no Workshop, existem diferentes cenários de merge, e para cada um o git vai tentar ser inteligente e resolver problemas por nós. Contudo, há casos ambiguos que o git não resolve, dando origem aos conflitos.

Neste _hands on_ vamos tentar simular um caso de merge que dê conflito.

1. Aprender a criar um _branch_
2. Alternar entre branches
3. Fazer commits numa branch
4. Revisitar o comando `$git log` com mais opções úteis para os branches
4. Fazer merge
5. Resolver conflitos

# Step by step
Considerando que já tens um repositório criado com alguns ficheiros, vamos criar um novo branch.

Para efeitos de ilustração, o meu repositório consiste de um ficheiro **f1** vazio.
## Criar um branch
Usa o comando `$git branch` para criar a branch, especificando um nome.

Por exemplo,
```bash
$git branch bugFix
```

## Modificar o ficheiro no master
A nova branch foi criada, mas continuamos na branch anterior, neste caso, _master_. Altera um dos ficheiros no _master_ e faça commit. O objetivo é posteriormente alterar o mesmo ficheiro, mas na branch que foi criada.

No meu repositório, alterei o ficheiro **f1** e fiz commit.

💡 Por defeito, quando se faz um novo *branch*, este referencia o mesmo *commit* que o *branch* atual. No entanto, por vezes pretendemos criar um _branch_ a partir de um *commit* particular. Para tal, usamos o `git log` para saber o SHA1 desse commit e usamos
```bash
$git branch <branch name> <commit sha1>
```

💡 Agora que conheces o nome simbólico HEAD, fica a saber que podes usá-lo com uma syntaxe particular para referenciar _commits_. Basicamente existem dois operadores, `^` e `~` que a partir do HEAD/commit atual podes referenciar um pai desse commit. Uma imagem vale mais que mil palavras.

//TODO: insert image here

## Alternar entre branches
Para mudar a *branch* ativa, usa-se o comando `$git checkout <branch name>`. Como eu dei o nome _bugFix_ à minha branch, no meu terminal executo
```bash
$git checkout bugFix
```

💡 É possivel num só comando criar uma *branch* e de imediato mudar para essa nova *branch*. 
```bash
$git checkout –b <branch name>
$git checkout –b <branch name> <commit sha1>
$git checkout –b <branch name> HEAD~n
```

💡 Para listares todas as *branches* do repositório local, usa `$git branch`.

## Modificar um ou mais ficheiros comuns à duas branches
Lembra-te que o objetivo é criar um conflito no *merge*. Para tal, precisamos de criar um caso ambiguo em que o mesmo ficheiro foi alterado nas duas *branches*. 

Antes de avançar, vamos usar o `git log` para ver o aspeto atual. O comando usado abaixo é algo extenso, mas basicamente estou a pedir que:
- liste todas as branches `-all`
- que faça um grafico `--graph`
- que mostre informação sucinta `--oneline`
- que mostre as alterações me cada commit `-p`.
```bash
$git log --graph --all --oneline --decorate -p

* 4f1592c (master) Added first paragraph
| diff --git a/f1 b/f1
| index e69de29..9550b9f 100644
| --- a/f1
| +++ b/f1
| @@ -0,0 +1 @@
| +Hello darkness, my old friend!
* c5b35e4 (HEAD -> bugFix) Init commit
  diff --git a/f1 b/f1
  new file mode 100644
  index 0000000..e69de29
  diff --git a/f2 b/f2
  new file mode 100644
  index 0000000..e69de29
```
Se fizesse *merge* neste momento, o git faria um simples _Fast Forward_, porque existe um "caminho" direto de *bugFix* para *master*.

Agora sim, alterei o ficheiro *f1* e fiz *commit* na branch *bugFix*. Correndo novamente o `git log`, com todas as opções ...
```bash
* b4b9d42 (HEAD -> bugFix) a conflict is comming
| diff --git a/f1 b/f1
| index e69de29..6415fdc 100644
| --- a/f1
| +++ b/f1
| @@ -0,0 +1,2 @@
| +Join IEEE!
| +:)
| * 4f1592c (master) Added first paragraph
|/
|   diff --git a/f1 b/f1
|   index e69de29..9550b9f 100644
|   --- a/f1
|   +++ b/f1
|   @@ -0,0 +1 @@
|   +Hello darkness, my old friend!
* c5b35e4 Init commit
  diff --git a/f1 b/f1
  new file mode 100644
  index 0000000..e69de29
  diff --git a/f2 b/f2
  new file mode 100644
  index 0000000..e69de29
```
Visualmente já se vê um ramo, uma divergência entre os dois branches. Mas mais importante que isso, é que o mesmo ficheiro foi alterado em ambos. E também importa realçar que alterei o mesmo bloco (linhas) nos dois ficheiros. 

💡 Digamos que poderão haver casos em que afinal não há ambiguidade e o git até pode tratar da situação sozinho. Imaginemos que temos um ficheiro com uma linha a dizer `Arroz é awesome!`. Se no _master_ adicionar uma linha antes, e no outro *branch* adicionar uma linha depois, o git é esperto suficiente e não tem qualquer problema em fazer *merge* porque existe uma linha/bloco de texto comum que não foi alterado em nenhum dos *branches*.

## Merge
Está na hora de fazer o *merge*. Neste caso, quero que as alterações feitas em _bugFix_ (origem) venham para o _master_ (destino). 
1. Então a primeira coisa  a fazer é mudar para o _master_ com `$git checkout`
2. Usar o comando `$git merge <origin branch name>`


... e sem surpresa, vamos ter um conflito! O git informa todos os ficheiros onde houve um conflito e fica à espera que resolvemos manualmente o problema.
```
Auto-merging f1
CONFLICT (content): Merge conflict in f1
Automatic merge failed; fix conflicts and then commit the result.
```
Importa realçar que para cada ficheiro com conflito, o git coloca delimitadores, que é uma forma de indicar de onde é que veio um certo bloco de texto. No meu caso, o meu ficheiro _f1_ ficou com este aspeto:
```
>>>>>>> master
Hello darkness, my old friend!
=======
Join IEEE!
:)
<<<<<<< bugFix
```
# Resolver conflitos
O `git status` volta a ser útil e dá umas dicas. 
```
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   f1

no changes added to commit (use "git add" and/or "git commit -a")
```
O passo seguinte é então alterar cada um dos ficheiros manualmente. Quando este processo terminar, faz-se `$git add` seguido de `$git commit`, e assim se conclui o processo de *merging* com conflitos.

💡 Para apagar uma branch, quando esta já não for necessária, usa-se `$git branch -d <branch name>`.