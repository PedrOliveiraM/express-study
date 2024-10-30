
# Express-Study

Este repositório contém arquivos e documentação para o estudo do framework Node.js **Express**, com foco na construção de APIs RESTful utilizando boas práticas de desenvolvimento.

## Índice

- [Iniciando o Projeto](#iniciando-o-projeto)
- [Dependências](#dependências)
- [Configurando o Biome](#configurando-o-biome)
- [Scripts de Desenvolvimento](#scripts-de-desenvolvimento)
- [Referências](#referências)

---

## Iniciando o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. Inicialize o projeto com npm:
   ```bash
   npm init -y
   ```

2. Instale as dependências principais e de desenvolvimento listadas abaixo.

## Dependências

Este projeto utiliza as seguintes dependências:

### Dependências principais

- **Express**: Framework web para Node.js, essencial para criar rotas e estruturar as APIs.
- **UUID**: Gera identificadores únicos universais para serem utilizados como IDs nas APIs.
- **Dotenv**: Garante a segurança e organização das variáveis de ambiente.

Instale as dependências principais:

```bash
npm install express uuid dotenv
```

### Dependências de desenvolvimento

- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, tornando-o mais robusto e fácil de manter.
- **Biome**: Ferramenta de linting e formatação para manter um padrão de estilo de código e alertar sobre possíveis erros.

Instale as dependências de desenvolvimento:

```bash
npm install -D typescript @biomejs/biome
```

## Configurando o Biome

O **Biome** é uma ferramenta de linting e formatação que ajuda a manter o código organizado e a identificar erros rapidamente.

1. Instale o Biome (caso ainda não tenha feito):
   ```bash
   npm install -D --save-exact @biomejs/biome
   ```

2. Inicie o arquivo de configuração do Biome:
   ```bash
   npx biome init
   ```

   O Biome agora está configurado e integrado ao projeto para que seja possível realizar a formatação do código automaticamente ao salvar arquivos.

## Scripts de Desenvolvimento

Adicione os seguintes scripts ao `package.json` para facilitar o desenvolvimento:

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "format": "npx @biomejs/biome format --write ."
}
```

- **start**: Inicia o servidor após a compilação.
- **dev**: Roda o servidor em modo de desenvolvimento com reinício automático.
- **build**: Compila o TypeScript em JavaScript.
- **format**: Formata o código conforme o padrão configurado no Biome.

## Referências

- [Express Documentation](https://expressjs.com/)
- [Biome Documentation](https://biomejs.dev/)
- [UUID Documentation](https://www.npmjs.com/package/uuid)
- [Dotenv Documentation](https://www.npmjs.com/package/dotenv)

--- 
