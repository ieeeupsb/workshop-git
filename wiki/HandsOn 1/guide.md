Neste primeiro _hands on_ é suposto instalar o git e fazer a primeira configuração.

# Instalar o git
## Windows
[https://git-scm.com/download/win](https://git-scm.com/download/win)
## Mac
[https://git-scm.com/download/mac](https://git-scm.com/download/mac)
## Linux
Instruções para diversas _distros_: [https://git-scm.com/download/linux](https://git-scm.com/download/linux)

# Primeiro teste
Para verificar que o git foi instalado com sucesso, abra um terminal e escreva `git`.

O output do comando deverá ser algo semelhante:
```
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

   ...
```
Se no terminal aparecer que o comando não é reconhecido ou não existe, então é porque a instalação não foi bem sucedida ou são necessárias configurações adicionais (como atualizar a variavel $PATH do sistema).
# Primeira configuração
O git tem uma ferramenta `git config` que permite configurar um leque diverso de coisas. Mas a primeira coisa a configurar no git é a própria identidade, que consiste do nome e e-mail. Esta informação é utilizada sempre que adicionamos snapshots ao repositório.
```bash
$ git config --global user.name "primeiro_nome ultimo_nome"
$ git config --global user.email "exemplo@ieee.pt"
```