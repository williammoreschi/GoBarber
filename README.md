# GoBarber
<p>Vou melhorando conforme o andar do curso.</p>
<hr/>
<p>No Node está sendo usado bibliotecas para validação dos dados, padronizaçao de código, ORM para consultar o banco, migration.</p>
<p>Configuração DB usando Docker o banco é um postgres. Se vocé quiser um container igual o meu.</p>

```sh
docker run --name gostack_gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Rotas
| Method | Path | Params | Required | Body | Description |
| ------ | ------ | ------ | ------ | ------ | ------ |
| POST | /user | - | * | { *name: ' ', *email: ' ', *password ' ', provider: boolean } | Criar um usuário |
| POST | /session | - | * | { *email: ' ', *password: ' ' } | Criar Sessão |
| PUT | /user | - | * | { name: '', email: ' ', oldPassword: ' ', password ' ', confirmPassword:' ' } | Alterar o usuário |

#### Observação:
Para alterar o seu usuario é necessário enviar o token junto no cabeçalho da requisição 'Bearer xxxxxxxx', o token é gerado na rota /session.


### Rodar Local

```sh
# instalar as dependências necessarias para que o app funcione
yarn install

# Criar as tabelas da aplicação
yarn sequelize db:migrate

# Iniciar o servidor na porta 3333 (http://localhost:3333)
yarn dev

# Iniciar o servidor mas usando o debug
yarn dev:debug

# Parar o servidor
crtl+c
```
<p>Para acessar as rotas recomendo usar o <a href="https://insomnia.rest/download/" target="_blank">Insominia</a> ou <a href="https://www.getpostman.com/" target="_blank">Postman</a></p>
<p>Import o arquivo com as rotas: insomnia.json</p>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
