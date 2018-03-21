Este será o último hands on do workshop e tem como objetivo:
1. Criar conta no GitHub
1. Ilustrar como criar um repositório no GitHub
2. Como clonar um repositório
3. Explorar os comandos `push`, `pull` e `fetch`

# Criar conta no GitHub
(Ver aqui)[]
# Criar um repositório vazio no GitHub
Com o login devidamente efetuado, pode-se criar um repositório diretamente da página inicial (lado direito, na caixa *Your repositories*), do dashboard, ou através do link [https://github.com/new](https://github.com/new).

Basta dar um nome válido e livre, e uma descrição. Também é possível configurar o *.gitignore* (explicado mais à frente) e a licença.

Pretende-se criar um repositório vazio, por isso, a opção *Initialize this repo with a README* não deverá estar marcada (para evitar problemas mais tarde). Caso contrário, o GitHub gera um ficheiro markdown, `README.md`, que contem a descrição do repositório. Este README é um ficheiro para todos os efeitos, pelo que o repositório iria começar com um commit efetuado.
# Clonar um repositório remoto
Com o repositório criado, use o `$git clone` para criar o repositório local, que é uma cópia do repositório remoto.

No GitHub, na página do repositório, tem um botão verde *Clone or download*. A opção principal é fazer clone com HTTPS, mas o GitHub permite usar SSH. O git tem uma lista diversa de protocolos que suporta, estando o HTTPS e SSH incluidos. O uso dos diferentes protocolos não é o foco deste workshop, por isso, usemos o HTTPS. Copia o URL com protocolo HTTPS, e executa `$git clone <URL>`. 
```bash
$git clone https://github.com/ieeeupsb/workshop-git.git
```
O comando cria automaticamente uma pasta com o nome do repositório.
# Trabalhar localmente
Estando o repositório clonado, podemos começar a trabalhar no repositório. 
1. Criar um ficheiro de texto com algum conteudo
2. Faz commit (colocando primeiro na _staging area_, e depois fazendo _commit_).
3. Envia os dados do repositório local para o repositório remoto, utilizando o `$git push origin master`.

Terminado o processo de compressão e upload, verifica que na página do repositório no GitHub já aparece o novo ficheiro (é necessário atualizar a página).
# Atualizar o repositório local
Agora para experimentar o comando `$git pull`, que descarrega as alterações do repositório remoto para o local, pode-se criar um ficheiro no próprio GitHub e fazer commit.

1. Na página GitHub do repositório, clicar no botão _New files_
. Dar um nome diferente do ficheiro criado localmente (e definir algum conteúdo se desejado). No fundo da página tem a secção para fazer commit.
2. No terminal, usar `$git pull origin master` para descarregar as novas alterações do repositório e fazer merge do branch master local com master remoto.