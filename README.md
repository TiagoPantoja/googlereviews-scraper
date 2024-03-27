# Google Reviews Scraper

Este projeto é um exemplo de um scraper de avaliações do Google usando o Serverless Framework e Node.js. Ele permite extrair avaliações de uma página do Google e armazená-las em um banco de dados PostgreSQL.

## Estrutura do Projeto

- **`config/dbConfig.js`**: Arquivo de configuração do banco de dados PostgreSQL.
- **`src/GoogleReviewsFetcher.js`**: Classe para buscar avaliações do Google utilizando Axios e Cheerio.
- **`src/DatabaseHandler.js`**: Classe para lidar com a inserção de avaliações no banco de dados.
- **`src/handler.js`**: Função principal para acionar o scraper e inserir as avaliações no banco de dados.
- **`serverless.yml`**: Arquivo de configuração principal do Serverless Framework.

## Pré-requisitos

- Node.js
- Serverless Framework
- PostgreSQL

## Configuração

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente no arquivo `serverless.yml` conforme necessário.
4. Execute `sls deploy` para implantar a função no AWS Lambda.

## Uso

Para usar o scraper, você pode chamar a função `scrapeGoogleReviews` da seguinte maneira:

```javascript
const { scrapeGoogleReviews } = require('./src/handler');

const url = 'https://example.com/google-reviews';
scrapeGoogleReviews(url)
  .then(reviews => console.log('Avaliações extraídas:', reviews))
  .catch(error => console.error('Erro ao extrair avaliações:', error));
