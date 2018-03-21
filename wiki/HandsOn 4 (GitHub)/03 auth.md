# Autenticação
Quando se trabalha com repositórios remotos como Github, é necessário autenticação para comandos como `push` ou `fetch`. Então, sempre que usados, o git irá pedir o username e password.

É possível armazenar as credenciais para evitar estar sempre a digitar a mesma informação.
```bash
$git config credential.helper
```
O comando acima configura o git para armazenar as credencias sem data de expiração. O problema é que o git irá guardar as credenciais sem qualquer tipo de encriptação, apenas limitando as permissões do filesystem.

Uma alternativa, é usar o mesmo comando mas com opção de colocar as credencias em cache por um determinado tempo (15 minutos). Isto poderá oferecer mais tranquilidade, mas para muitos não será uma solução.
```bash
$git config credential.helper 'cache'
```
Ambos os comandos não irão pedir logo as credenciais. Basicamente, quando um comando que requere autenticação é executado, insere-se as credenciais e são armazenados.

Existem ainda outras alternativas mais seguras, mas no geral, dependem de sistema operativo para sistema operativo e são _third-party tools_