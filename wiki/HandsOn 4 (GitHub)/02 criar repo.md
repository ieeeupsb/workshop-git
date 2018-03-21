# Criar um repositório no GitHub
Com o login devidamente efetuado, pode-se criar um repositório diretamente da página inicial (lado direito, na caixa *Your repositories*), do dashboard, ou através do link [https://github.com/new](https://github.com/new).

Basta dar um nome válido e livre, e uma descrição (antes de criar leia os dois tópicos abaixo).

Agora existem três opções:
1. Já tenho um repositório local que quero hospedar no GitHub
2. Quero apenas criar um novo repositório para trabalhar num projeto

## Colocar um repositório local no GitHub
Neste caso, **repositório no GitHub deve ser criado vazio**. Então, deve-se assegurar que a opção *Initialize this repo with a README* não está marcada (para evitar problemas mais tarde). Caso contrário, o GitHub gera um ficheiro markdown, `README.md`, que contem a descrição do repositório. Este README é um ficheiro para todos os efeitos, pelo que o repositório iria começar com um commit efetuado.

## Novo projeto
No entanto, se ainda não existe um projeto criado, criar o repositório vazio ou não é um pouco irrelevente. A qualquer altura pode-se adicionar o ficheiro `README.md`. Depois basta usar um comando que irá clonar o repositório remoto para um diretório local.

## Concluindo...
Concluidas as configurações inicias do repositório, clica-se no botão verde _Create repository_.

# Colocar um repositório local no GitHub
Para adicionar um repositório local, já existente, ao novo repositório criado no GitHub, e assumindo que foi criado vazio, basta usar os comandos: 
```bash
$git remote add origin <URL>
$git push origin master
```

O primeiro comando cria uma referência para o repositório remoto especificado com <URL>, com o nome origin. Este nome simbólico será posteriormente usado com outros comandos, não sendo necessário especificar URLs. 

O segundo comando, `push`, irá atualizar o repositório remoto com os objetos/dados locais.

💡 É possível fazer associações entre um branch local e um branch num repositório remoto, permitindo, por exemplo, ter nomes diferentes localmente e remotamente. Além disso, seria feita uma associação entre os branches. Ou seja, estando num branch A associado com o branch B remoto, ao fazer `$git push` não seria necessário especificar o remoto nem o branch. Mas apesar de parecer muito vantajoso, existem alguns contras. O mais fácil é sempre especificar servidor remoto e branch. 

# Clonar repositórios
Para clonar um repositório, usa-se `$git clone <url>`. O git suporta diversos protolos. À partida, HTTPS irá servir sempre. 

O comando `clone` cria automaticamente uma pasta no diretório local, com o mesmo nome que o repositório remoto. Além disso, transfere todos os dados e cria o branch principal. Uma coisa importante realçar, é que os branches não são criados automaticamente, apesar de o git ter referências para todos os branches remotos. Para criar o branch localmente, que se chama `branchExemplo`, teriamos que fazer:
```bash
$git branch branchExemplo # criar o branch localmente com o mesmo nome que o remoto
$git pull origin branchExemplo # transfere os dados remotos do branch com o mesmo nome, branchExemplo
```